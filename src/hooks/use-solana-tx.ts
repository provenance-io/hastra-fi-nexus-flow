// anchor-privy-setup.ts
import {
  Connection,
  LAMPORTS_PER_SOL,
  PublicKey,
  Transaction,
  type TransactionSignature,
} from "@solana/web3.js";
import {
  AnchorProvider,
  type Idl,
  Program,
  type Wallet as AnchorWallet,
} from "@coral-xyz/anchor";
import { SolanaResponse } from "../types/solana-tx";
import { solVaultMintIdl } from "../types/idl/solana";
import { useCallback } from "react";
import { useConnection, useWallet } from "@solana/wallet-adapter-react";
import {
  createAssociatedTokenAccountInstruction,
  createTransferCheckedInstruction,
  getAssociatedTokenAddress,
  TOKEN_PROGRAM_ID,
} from "@solana/spl-token";
import BN from "bn.js";
import { USDC, YIELD } from "@/types/tokens.ts";

const RPC_ENDPOINT = import.meta.env.VITE_SOLANA_RPC_URL;

const confirmTransaction = async (
  connection: Connection,
  fn: () => Promise<TransactionSignature>
): Promise<SolanaResponse> => {
  const sig = await fn();
  const { blockhash, lastValidBlockHeight } =
    await connection.getLatestBlockhash();
  const confirmation = await connection.confirmTransaction(
    {
      signature: sig,
      blockhash,
      lastValidBlockHeight,
    },
    "confirmed"
  );
  return new SolanaResponse(confirmation.value.err === null, confirmation, sig);
};
export const useAnchorWallet = (): AnchorWallet | undefined => {
  const { publicKey, signAllTransactions, signTransaction } = useWallet();
  if (publicKey && signTransaction && signAllTransactions) {
    // @ts-expect-error - AnchorWallet expects a specific type
    return {
      publicKey,
      signTransaction,
      signAllTransactions,
    };
  }
};

export const useDepositAndMint = () => {
  const { connection } = useConnection();
  const { publicKey } = useWallet();
  const wallet = useAnchorWallet();

  const depositAndMint = useCallback(
    async (amount: number) => {
      if (!wallet) {
        console.error("No wallet found. Please connect your wallet.");
        return;
      }
      if (!publicKey) {
        console.error("No public key found. Please connect your wallet.");
        return;
      }
      const provider = new AnchorProvider(connection, wallet, {
        preflightCommitment: "confirmed",
      });
      const program = new Program(solVaultMintIdl() as Idl, provider);

      // program accounts
      const signer = publicKey;
      const swapTokenAccount: PublicKey = await getAssociatedTokenAddress(
        new PublicKey(USDC),
        signer
      );
      const toTokenAccount: PublicKey = await getAssociatedTokenAddress(
        new PublicKey(YIELD),
        signer
      );
      const yieldMint = new PublicKey(YIELD);
      const vault = new PublicKey(import.meta.env.VITE_SOLANA_USDC_VAULT);
      const configPda = new PublicKey(
        import.meta.env.VITE_SOLANA_USDC_YIELD_CONFIG_PDA
      );
      const mintAuthorityPda = new PublicKey(
        import.meta.env.VITE_SOLANA_USDC_YIELD_MINT_AUTHORITY_PDA
      );

      return await confirmTransaction(connection, () =>
        program?.methods
          .depositAndMint(new BN(amount * 1_000_000))
          .accounts({
            signer: signer,
            swapToken: swapTokenAccount,
            toAccount: toTokenAccount,
            vault: vault,
            mint: yieldMint,
            config: configPda,
            mintAuthority: mintAuthorityPda,
            tokenProgram: TOKEN_PROGRAM_ID,
          })
          .rpc()
      );
    },
    [connection, wallet, publicKey]
  );

  return {
    invoke: depositAndMint,
  };
};

export const useAirDrop = () => {
  const fundWithAirdrop = useCallback(async (publicKey: PublicKey | null) => {
    if (!publicKey) return;
    const connection = new Connection(RPC_ENDPOINT, "confirmed");
    return confirmTransaction(connection, () =>
      connection.requestAirdrop(publicKey, 0.1 * LAMPORTS_PER_SOL)
    );
  }, []);

  return {
    invoke: fundWithAirdrop,
  };
};

export const useCreateTokenAccounts = () => {
  const { connection } = useConnection();
  const { publicKey, signTransaction } = useWallet();

  const createTokenAccount = useCallback(
    async (mintAddresses: string[]) => {
      if (!publicKey) return;

      interface TokenMint {
        tokenAddress: PublicKey;
        mint: PublicKey;
      }

      const signer = publicKey;
      const mintPublicKeys = mintAddresses.map(
        (address) => new PublicKey(address)
      );

      // Get associated token accounts that don't exist
      const neededAtas = await Promise.all(
        mintPublicKeys.map(async (mint, index) => {
          const tokenAddress = await getAssociatedTokenAddress(
            mintPublicKeys[index],
            signer
          );
          const ata = await connection.getAccountInfo(tokenAddress);
          if (ata === null) {
            return {
              tokenAddress: tokenAddress,
              mint: mint,
            } as TokenMint;
          }
          return undefined;
        })
      );

      // Build transaction
      const tx = new Transaction();
      tx.feePayer = signer;
      tx.recentBlockhash = (await connection.getLatestBlockhash()).blockhash;
      console.dir(neededAtas);
      neededAtas.forEach((ata) => {
        if (ata) {
          tx.add(
            createAssociatedTokenAccountInstruction(
              signer,
              ata.tokenAddress,
              signer,
              ata.mint
            )
          );
        }
      });

      console.dir(tx);

      // Sign with Privy
      const signed = await signTransaction!(tx);

      console.dir(signed);

      // Send transaction and confirm
      return confirmTransaction(connection, () =>
        connection.sendRawTransaction(signed.serialize(), {
          skipPreflight: false,
        })
      );
    },
    [connection, publicKey, signTransaction]
  );

  return {
    invoke: createTokenAccount,
  };
};

export const useTransfer = () => {
  const { connection } = useConnection();
  const { publicKey, signTransaction } = useWallet();

  const transfer = useCallback(
    async (toWalletAddress: string, tokenAddress: string, amount: number) => {
      if (!publicKey || !toWalletAddress) return;

      const toPubkey = new PublicKey(toWalletAddress);
      const mint = new PublicKey(tokenAddress);

      // Get associated token accounts
      const fromTokenAccount = await getAssociatedTokenAddress(mint, publicKey);
      const toTokenAccount = await getAssociatedTokenAddress(mint, toPubkey);

      // Create transfer instruction
      const ix = createTransferCheckedInstruction(
        fromTokenAccount,
        mint,
        toTokenAccount,
        publicKey,
        amount * 1_000_000,
        6,
        [],
        TOKEN_PROGRAM_ID
      );

      // Build transaction
      const tx = new Transaction();
      tx.feePayer = publicKey;
      tx.recentBlockhash = (await connection.getLatestBlockhash()).blockhash;

      // If dest ATA doesn’t exist, add instruction to create it
      const toAcct = await connection.getAccountInfo(toTokenAccount);
      if (!toAcct) {
        tx.add(
          createAssociatedTokenAccountInstruction(
            tx.feePayer,
            toTokenAccount,
            toPubkey,
            mint
          )
        );
      }

      tx.add(ix);

      // Sign with Privy
      const signed = await signTransaction!(tx);

      // Send transaction and confirm
      return confirmTransaction(connection, () =>
        connection.sendRawTransaction(signed.serialize(), {
          skipPreflight: false,
        })
      );
    },
    [publicKey, connection, signTransaction]
  );

  return {
    invoke: transfer,
  };
};
