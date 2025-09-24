// anchor-privy-setup.ts
import {
    Connection,
    LAMPORTS_PER_SOL,
    PublicKey, SystemProgram,
    Transaction,
    type TransactionSignature,
} from "@solana/web3.js";
import {
    AnchorProvider,
    type Idl,
    Program,
    type Wallet as AnchorWallet, web3, workspace,
} from "@coral-xyz/anchor";
import { SolanaResponse } from "../types/solana-tx";
import { useCallback } from "react";
import { useConnection, useWallet } from "@solana/wallet-adapter-react";
import {
  createAssociatedTokenAccountInstruction,
  createTransferCheckedInstruction,
  getAssociatedTokenAddress,
  TOKEN_PROGRAM_ID,
} from "@solana/spl-token";
import BN from "bn.js";
import {sYLDS, USDC, wYLDS} from "@/types/tokens.ts";
import {HastraSolVaultStake as HastraSolVaultStakeIdl} from "@/types/idl/hastra-sol-vault-stake.ts";
import {HastraSolVaultMint as HastraSolVaultMintIdl} from "@/types/idl/hastra-sol-vault-mint.ts";

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

const ataInstruction = async (connection: Connection, signer: PublicKey, to: PublicKey, mint: PublicKey) => {
    const toTokenAccountInfo = await connection.getAccountInfo(to);
    return  toTokenAccountInfo ? [] : [
        createAssociatedTokenAccountInstruction(
            signer,
            to,
            signer,
            mint
        )
    ];

}
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
      const program = new Program(HastraSolVaultMintIdl as Idl, provider);

      // program accounts
      const signer = publicKey;
      const userVaultTokenAccount: PublicKey = await getAssociatedTokenAddress(
        new PublicKey(USDC),
        signer
      );
      const userMintTokenAccount: PublicKey = await getAssociatedTokenAddress(
        new PublicKey(wYLDS),
        signer
      );
      const mint = new PublicKey(wYLDS);
      const vault = new PublicKey(import.meta.env.VITE_SOLANA_USDC_VAULT);
      const configPda = new PublicKey(
        import.meta.env.VITE_SOLANA_USDC_WYLDS_CONFIG_PDA
      );
      const mintAuthorityPda = new PublicKey(
        import.meta.env.VITE_SOLANA_USDC_WYLDS_MINT_AUTHORITY_PDA
      );

      const createAtaInstructions = await ataInstruction(connection, signer, userMintTokenAccount, mint);

      console.log(`signer:        ${signer.toBase58()}`);
      console.log(`swapToken:     ${userVaultTokenAccount.toBase58()}`);
      console.log(`toAccount:     ${userMintTokenAccount.toBase58()}`);
      console.log(`vault TA:      ${vault.toBase58()}`);
      console.log(`mint:          ${mint.toBase58()}`);
      console.log(`configPda:     ${configPda.toBase58()}`);
      console.log(`mintAuthority: ${mintAuthorityPda.toBase58()}`);
      console.log(`tokenProgram:  ${TOKEN_PROGRAM_ID.toBase58()}`);
      return await confirmTransaction(connection, () =>
        program?.methods
          .deposit(new BN(amount * 1_000_000))
          .accounts({
            signer: signer,
            config: configPda,
            vaultTokenAccount: vault,
            mint: mint,
            mintAuthority: mintAuthorityPda,
            userVaultTokenAccount: userVaultTokenAccount,
            userMintTokenAccount: userMintTokenAccount,
            tokenProgram: TOKEN_PROGRAM_ID,
          })
          .preInstructions(createAtaInstructions)
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

export const useStake = () => {
    const { connection } = useConnection();
    const { publicKey } = useWallet();
    const wallet = useAnchorWallet();

    const stake = useCallback(
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
            const program = new Program(HastraSolVaultStakeIdl as Idl, provider);

            // program accounts
            const signer = publicKey;
            const userVaultTokenAccount: PublicKey = await getAssociatedTokenAddress(
                new PublicKey(wYLDS),
                signer
            );
            const userMintTokenAccount: PublicKey = await getAssociatedTokenAddress(
                new PublicKey(sYLDS),
                signer
            );
            const syldsMint = new PublicKey(sYLDS);
            const vault = new PublicKey(import.meta.env.VITE_SOLANA_SYLDS_VAULT);
            const configPda = new PublicKey(
                import.meta.env.VITE_SOLANA_SYLDS_CONFIG_PDA
            );
            const mintAuthorityPda = new PublicKey(
                import.meta.env.VITE_SOLANA_SYLDS_MINT_AUTHORITY_PDA
            );
            const vaultTokenAccount = new PublicKey(
                import.meta.env.VITE_SOLANA_SYLDS_VAULT_TOKEN_ACCOUNT,
            )

            const createAtaInstructions = await ataInstruction(connection, signer, userMintTokenAccount, syldsMint);

            console.log(`signer:        ${signer.toBase58()}`);
            console.log(`userVaultTokenAccount:     ${userVaultTokenAccount.toBase58()}`);
            console.log(`userMintTokenAccount:     ${userMintTokenAccount.toBase58()}`);
            console.log(`vault:         ${vault.toBase58()}`);
            console.log(`vault TA:      ${vaultTokenAccount.toBase58()}`);
            console.log(`mint:          ${syldsMint.toBase58()}`);
            console.log(`configPda:     ${configPda.toBase58()}`);
            console.log(`mintAuthority: ${mintAuthorityPda.toBase58()}`);
            console.log(`tokenProgram:  ${TOKEN_PROGRAM_ID.toBase58()}`);
            return await confirmTransaction(connection, () =>
                program?.methods
                    .deposit(new BN(amount * 1_000_000))
                    .accounts({
                        config: configPda,
                        vaultTokenAccount: vaultTokenAccount,
                        mint: syldsMint,
                        mintAuthority: mintAuthorityPda,
                        signer: signer,
                        userVaultTokenAccount: userVaultTokenAccount,
                        userMintTokenAccount: userMintTokenAccount,
                        tokenProgram: TOKEN_PROGRAM_ID
                    })
                    .preInstructions(createAtaInstructions)
                    .rpc()
            );
        },
        [connection, wallet, publicKey]
    );

    return {
        invoke: stake,
    };
};

export const useUnbond = () => {
    const { connection } = useConnection();
    const { publicKey } = useWallet();
    const wallet = useAnchorWallet();

    const unbond = useCallback(
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
            const program = new Program(HastraSolVaultStakeIdl as Idl, provider);

            // program accounts
            const signer = publicKey;
            const userMintTokenAccount: PublicKey = await getAssociatedTokenAddress(
                new PublicKey(sYLDS),
                signer
            );

            const syldsMint = new PublicKey(sYLDS);

            const configPda = new PublicKey(
                import.meta.env.VITE_SOLANA_SYLDS_CONFIG_PDA
            );
            const [ticketPda] = web3.PublicKey.findProgramAddressSync(
                [Buffer.from("ticket"), signer.toBuffer()],
                program.programId
            );

            console.log(`signer:                        ${signer.toBase58()}`);
            console.log(`userMintTokenAccount:          ${userMintTokenAccount.toBase58()}`);
            console.log(`ticketPda:                     ${ticketPda.toBase58()}`);
            console.log(`mint:                          ${syldsMint.toBase58()}`);
            console.log(`configPda:                     ${configPda.toBase58()}`);
            console.log(`tokenProgram:                  ${TOKEN_PROGRAM_ID.toBase58()}`);
            return await confirmTransaction(connection, () =>
                program?.methods
                    .unbond(new BN(amount * 1_000_000))
                    .accounts({
                        config: configPda,
                        signer: signer,
                        mint: syldsMint,
                        userMintTokenAccount: userMintTokenAccount,
                        tokenProgram: TOKEN_PROGRAM_ID,
                        ticket: ticketPda,
                        systemProgram: SystemProgram.programId
                    })
                    .rpc()
            );
        },
        [connection, wallet, publicKey]
    );

    return {
        invoke: unbond,
    };
};

export const useRedeem = () => {
    const { connection } = useConnection();
    const { publicKey } = useWallet();
    const wallet = useAnchorWallet();

    const redeem = useCallback(
        async () => {
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
            const program = new Program(HastraSolVaultStakeIdl as Idl, provider);

            const syldsMint = new PublicKey(sYLDS);

            const signer = publicKey;
            const userMintTokenAccount: PublicKey = await getAssociatedTokenAddress(
                new PublicKey(sYLDS),
                signer
            );
            const userVaultTokenAccount: PublicKey = await getAssociatedTokenAddress(
                new PublicKey(wYLDS),
                signer
            );

            const vaultTokenAccount = new PublicKey(
                import.meta.env.VITE_SOLANA_SYLDS_VAULT_TOKEN_ACCOUNT,
            )

            const configPda = new PublicKey(
                import.meta.env.VITE_SOLANA_SYLDS_CONFIG_PDA
            );
            const [ticketPda] = web3.PublicKey.findProgramAddressSync(
                [Buffer.from("ticket"), signer.toBuffer()],
                program.programId
            );
            const [vaultAuthorityPda] = web3.PublicKey.findProgramAddressSync(
                [Buffer.from("vault_authority")],
                program.programId
            );

            console.log(`config:                        ${configPda.toBase58()}`);
            console.log(`vaultTokenAccount:             ${vaultTokenAccount.toBase58()}`);
            console.log(`vaultAuthority:                ${vaultAuthorityPda.toBase58()}`);
            console.log(`signer:                        ${signer.toBase58()}`);
            console.log(`userMintTokenAccount:          ${userMintTokenAccount.toBase58()}`);
            console.log(`userVaultTokenAccount:         ${userVaultTokenAccount.toBase58()}`);
            console.log(`mint:                          ${syldsMint.toBase58()}`);
            console.log(`ticketPda:                     ${ticketPda.toBase58()}`);
            console.log(`tokenProgram:                  ${TOKEN_PROGRAM_ID.toBase58()}`);
            return await confirmTransaction(connection, () =>
                program?.methods
                    .redeem()
                    .accounts({
                        config: configPda,
                        vaultTokenAccount: vaultTokenAccount,
                        vaultAuthority: vaultAuthorityPda,
                        signer: signer,
                        userMintTokenAccount: userMintTokenAccount,
                        userVaultTokenAccount: userVaultTokenAccount,
                        mint: syldsMint,
                        tokenProgram: TOKEN_PROGRAM_ID,
                        ticket: ticketPda,
                        systemProgram: SystemProgram.programId
                    })
                    .rpc()
            );
        },
        [connection, wallet, publicKey]
    );

    return {
        invoke: redeem,
    };
};
