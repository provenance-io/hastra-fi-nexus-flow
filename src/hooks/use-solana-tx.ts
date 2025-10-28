// anchor-privy-setup.ts
import {
    Connection,
    LAMPORTS_PER_SOL,
    PublicKey,
    SystemProgram,
    Transaction,
    type TransactionSignature,
} from "@solana/web3.js";
import {
    AnchorProvider,
    type Idl,
    Program,
    type Wallet as AnchorWallet,
    web3,
} from "@coral-xyz/anchor";
import {SolanaResponse} from "../types/solana-tx";
import {useCallback} from "react";
import {useConnection, useWallet} from "@solana/wallet-adapter-react";
import {
    createAssociatedTokenAccountInstruction,
    createTransferCheckedInstruction,
    getAssociatedTokenAddress,
    TOKEN_PROGRAM_ID,
} from "@solana/spl-token";
import BN from "bn.js";
import {PRIME, USDC, wYLDS} from "@/types/tokens.ts";
import {
    HastraSolVaultStake as HastraSolVaultStakeIdl
} from "@/types/idl/hastra-sol-vault-stake.ts";
import {
    HastraSolVaultMint as HastraSolVaultMintIdl
} from "@/types/idl/hastra-sol-vault-mint.ts";
import {ClaimProof, DistributionDetail} from "@/types/staking.ts";

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

const ataInstruction = async (
  connection: Connection,
  signer: PublicKey,
  to: PublicKey,
  mint: PublicKey
) => {
  const toTokenAccountInfo = await connection.getAccountInfo(to);
  return toTokenAccountInfo
    ? []
    : [createAssociatedTokenAccountInstruction(signer, to, signer, mint)];
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
  return undefined;
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

      const createAtaInstructions = await ataInstruction(
        connection,
        signer,
        userMintTokenAccount,
        mint
      );

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
        new PublicKey(PRIME),
        signer
      );
      const PRIMEMint = new PublicKey(PRIME);
      const vault = new PublicKey(import.meta.env.VITE_SOLANA_PRIME_VAULT);
      const configPda = new PublicKey(
        import.meta.env.VITE_SOLANA_PRIME_CONFIG_PDA
      );
      const mintAuthorityPda = new PublicKey(
        import.meta.env.VITE_SOLANA_PRIME_MINT_AUTHORITY_PDA
      );
      const vaultTokenAccount = new PublicKey(
        import.meta.env.VITE_SOLANA_PRIME_VAULT_TOKEN_ACCOUNT
      );

      const createAtaInstructions = await ataInstruction(
        connection,
        signer,
        userMintTokenAccount,
        PRIMEMint
      );

      console.log(`signer:        ${signer.toBase58()}`);
      console.log(
        `userVaultTokenAccount:     ${userVaultTokenAccount.toBase58()}`
      );
      console.log(
        `userMintTokenAccount:     ${userMintTokenAccount.toBase58()}`
      );
      console.log(`vault:         ${vault.toBase58()}`);
      console.log(`vault TA:      ${vaultTokenAccount.toBase58()}`);
      console.log(`mint:          ${PRIMEMint.toBase58()}`);
      console.log(`configPda:     ${configPda.toBase58()}`);
      console.log(`mintAuthority: ${mintAuthorityPda.toBase58()}`);
      console.log(`tokenProgram:  ${TOKEN_PROGRAM_ID.toBase58()}`);
      return await confirmTransaction(connection, () =>
        program?.methods
          .deposit(new BN(amount * 1_000_000))
          .accounts({
            config: configPda,
            vaultTokenAccount: vaultTokenAccount,
            mint: PRIMEMint,
            mintAuthority: mintAuthorityPda,
            signer: signer,
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
        new PublicKey(PRIME),
        signer
      );

      const PRIMEMint = new PublicKey(PRIME);

      const configPda = new PublicKey(
        import.meta.env.VITE_SOLANA_PRIME_CONFIG_PDA
      );
      const [ticketPda] = web3.PublicKey.findProgramAddressSync(
        [Buffer.from("ticket"), signer.toBuffer()],
        program.programId
      );

      console.log(`signer:                        ${signer.toBase58()}`);
      console.log(`userMintTokenAccount:          ${userMintTokenAccount.toBase58()}`);
      console.log(`ticketPda:                     ${ticketPda.toBase58()}`);
      console.log(`mint:                          ${PRIMEMint.toBase58()}`);
      console.log(`configPda:                     ${configPda.toBase58()}`);
      console.log(`tokenProgram:                  ${TOKEN_PROGRAM_ID.toBase58()}`);

      return await confirmTransaction(connection, () =>
        program?.methods
          .unbond(new BN(amount * 1_000_000))
          .accounts({
            config: configPda,
            signer: signer,
            mint: PRIMEMint,
            userMintTokenAccount: userMintTokenAccount,
            tokenProgram: TOKEN_PROGRAM_ID,
            ticket: ticketPda,
            systemProgram: SystemProgram.programId,
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

export const useRedeemStake = () => {
  const { connection } = useConnection();
  const { publicKey } = useWallet();
  const wallet = useAnchorWallet();

  const redeem = useCallback(async () => {
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

    const PRIMEMint = new PublicKey(PRIME);

    const signer = publicKey;
    const userMintTokenAccount: PublicKey = await getAssociatedTokenAddress(
      new PublicKey(PRIME),
      signer
    );
    const userVaultTokenAccount: PublicKey = await getAssociatedTokenAddress(
      new PublicKey(wYLDS),
      signer
    );

    const vaultTokenAccount = new PublicKey(
      import.meta.env.VITE_SOLANA_PRIME_VAULT_TOKEN_ACCOUNT
    );

    const configPda = new PublicKey(
      import.meta.env.VITE_SOLANA_PRIME_CONFIG_PDA
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
    console.log(
      `vaultTokenAccount:             ${vaultTokenAccount.toBase58()}`
    );
    console.log(
      `vaultAuthority:                ${vaultAuthorityPda.toBase58()}`
    );
    console.log(`signer:                        ${signer.toBase58()}`);
    console.log(
      `userMintTokenAccount:          ${userMintTokenAccount.toBase58()}`
    );
    console.log(
      `userVaultTokenAccount:         ${userVaultTokenAccount.toBase58()}`
    );
    console.log(`mint:                          ${PRIMEMint.toBase58()}`);
    console.log(`ticketPda:                     ${ticketPda.toBase58()}`);
    console.log(
      `tokenProgram:                  ${TOKEN_PROGRAM_ID.toBase58()}`
    );
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
          mint: PRIMEMint,
          tokenProgram: TOKEN_PROGRAM_ID,
          ticket: ticketPda,
          systemProgram: SystemProgram.programId,
        })
        .rpc()
    );
  }, [connection, wallet, publicKey]);

  return {
    invoke: redeem,
  };
};

export const useRequestRedeem = () => {
    const { connection } = useConnection();
    const { publicKey } = useWallet();
    const wallet = useAnchorWallet();

    const redeem = useCallback(async (amount: number) => {
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

        const wYLDSMint = new PublicKey(wYLDS);

        const signer = publicKey;
        const userMintTokenAccount: PublicKey = await getAssociatedTokenAddress(
            new PublicKey(wYLDSMint),
            signer
        );

        const configPda = new PublicKey(
            import.meta.env.VITE_SOLANA_USDC_WYLDS_CONFIG_PDA
        );
        const [redemptionRequestPda] = web3.PublicKey.findProgramAddressSync(
            [Buffer.from("redemption_request"), signer.toBuffer()],
            program.programId
        );
        const [redeemVaultAuthorityPda] = PublicKey.findProgramAddressSync(
            [Buffer.from("redeem_vault_authority")],
            program.programId
        );

        console.log(`config:                        ${configPda.toBase58()}`);
        console.log(`signer:                        ${signer.toBase58()}`);
        console.log(`userMintTokenAccount:          ${userMintTokenAccount.toBase58()}`);
        console.log(`mint:                          ${wYLDSMint.toBase58()}`);
        console.log(`redemptionRequestPda:          ${redemptionRequestPda.toBase58()}`);
        console.log(`amount:                        ${amount}`);
        console.log(`Redeem Vault Authority PDA:    ${redeemVaultAuthorityPda.toBase58()}`);

        return await confirmTransaction(connection, () =>
            program?.methods
                .requestRedeem(new BN(amount * 1_000_000))
                .accounts({
                    signer: signer,
                    userMintTokenAccount: userMintTokenAccount,
                    redemptionRequest: redemptionRequestPda,
                    mint: wYLDSMint,
                    config: configPda,
                    systemProgram: SystemProgram.programId,
                    tokenProgram: TOKEN_PROGRAM_ID,
                    redeemVaultAuthority: redeemVaultAuthorityPda
                })
                .rpc()
        );
    }, [wallet, publicKey, connection]);

    return {
        invoke: redeem,
    };
};

export const useClaimWYLDS = () => {
    const { connection } = useConnection();
    const { publicKey } = useWallet();
    const wallet = useAnchorWallet();

    const claim = useCallback(
        async () => {
            if (!wallet) {
                console.error("No wallet found. Please connect your wallet.");
                //throw new Error("No wallet found. Please connect your wallet.");
            }
            if (!publicKey) {
                console.error("No public key found. Please connect your wallet.");
                //throw new Error("No public key found. Please connect your wallet.");
            }
            console.log("\n\n--- Claiming wYLDS Rewards ---\n");

            const fetchDistroUrl = `${import.meta.env.VITE_HASTRA_PULSE_URL}/distributions/address/${publicKey.toBase58()}/type/ylds-distribution`;
            // retrieve unclaimed distributions from backend API
            let unclaimedDistributions: DistributionDetail[] = [];
            await fetch(fetchDistroUrl)
                .then((res) => res.json())
                .then((data: unknown) => {
                    unclaimedDistributions = (data as DistributionDetail[]).filter(d => !d.claimed && d.published);
                })
                .catch((err) => {
                    console.error("Error fetching interest earned data:", err);
                });

            console.dir(unclaimedDistributions);

            const provider = new AnchorProvider(connection, wallet, {
                preflightCommitment: "confirmed",
            });
            const program = new Program(HastraSolVaultMintIdl as Idl, provider);

            const signer = publicKey;
            const mint = new PublicKey(wYLDS);
            const tokenAccount: PublicKey = await getAssociatedTokenAddress(
                new PublicKey(wYLDS),
                signer
            );

            const configPda = new PublicKey(
                import.meta.env.VITE_SOLANA_USDC_WYLDS_CONFIG_PDA
            );
            const mintAuthorityPda = new PublicKey(
                import.meta.env.VITE_SOLANA_USDC_WYLDS_MINT_AUTHORITY_PDA
            );

            const transactions: Transaction[] = [];
            for (const d of unclaimedDistributions) {
                // TODO secure this fetch to avoid tampering by having the wallet holder sign a JWT token with the request
                const fetchProofUrl = `${import.meta.env.VITE_HASTRA_PULSE_URL}/distributions/claim/proof/address/${publicKey.toBase58()}/epoch/${d.epochIndex}`;

                let proof: ClaimProof | null = null;
                await fetch(fetchProofUrl)
                    .then((res) => res.json())
                    .then((data: unknown) => {
                        proof = data as ClaimProof;
                    })
                    .catch((err) => {
                        throw new Error(`Error fetching claim proof data: ${err}`);
                    });
                if(!proof) {
                    throw new Error("No proof found for distribution");
                }

                const hastraProof = proof.hastraProof.map((p) => ({
                    isLeft: p.position === "left",
                    sibling: Buffer.from(p.data, "hex"),
                }));

                const [epochPda] = PublicKey.findProgramAddressSync(
                    [Buffer.from("epoch"), new BN(d.epochIndex).toArrayLike(Buffer, "le", 8)],
                    program.programId
                );
                // derive claim record PDA
                const [claimPda] = PublicKey.findProgramAddressSync(
                    [Buffer.from("claim"), epochPda.toBuffer(), provider.wallet.publicKey.toBuffer()],
                    program.programId
                );

                console.dir(hastraProof);
                const ix = await program?.methods
                    .claimRewards(new BN(proof.amount), hastraProof)
                    .accountsStrict({
                        config: configPda,
                        user: provider.wallet.publicKey,
                        epoch: epochPda,
                        claimRecord: claimPda,
                        mintAuthority: mintAuthorityPda,
                        mint: mint,
                        userMintTokenAccount: tokenAccount,
                        systemProgram: SystemProgram.programId,
                        tokenProgram: TOKEN_PROGRAM_ID
                    }).instruction();
                const tx = new Transaction().add(ix);
                tx.feePayer = provider.wallet.publicKey;
                tx.recentBlockhash = (await connection.getLatestBlockhash()).blockhash;
                transactions.push(tx);
            }

            //sign all transactions
            const signedTxs = await wallet.signAllTransactions!(transactions);
            const confirmations = [];
            for (const signedTx of signedTxs) {
                const sig = await connection.sendRawTransaction(signedTx.serialize(), {})
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
                confirmations.push(confirmation);
            }
            return confirmations;
        },
        [connection, wallet, publicKey]
    );

    return {
        invoke: claim,
    };
};

