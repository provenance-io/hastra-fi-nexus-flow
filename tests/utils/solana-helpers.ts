// e2e/utils/solana-test-utils.ts
import {
  Connection,
  Keypair,
  LAMPORTS_PER_SOL,
  PublicKey,
  Transaction,
  SystemProgram,
} from "@solana/web3.js";
import {
  createMint,
  getOrCreateAssociatedTokenAccount,
  mintTo,
  getAccount,
} from "@solana/spl-token";
import bs58 from "bs58";

// ==================== CONNECTION ====================

export const RPC_URL = "https://api.devnet.solana.com";
export const connection = new Connection(RPC_URL, "confirmed");

// ==================== WALLET GENERATION ====================

/**
 * Generate a test wallet
 */
export function generateTestWallet(): Keypair {
  return Keypair.generate();
}

/**
 * Load a wallet from a base58 encoded secret key
 */
export function loadWallet(secretKeyBase58: string): Keypair {
  try {
    const secretKey = bs58.decode(secretKeyBase58);
    return Keypair.fromSecretKey(secretKey);
  } catch (error) {
    throw new Error("Invalid secret key format. Must be base58 encoded.");
  }
}

/**
 * Get a test wallet - either load from env or generate new one
 * @param envVarName - Optional environment variable name to load from (e.g., 'TEST_WALLET_1')
 * @param generateIfMissing - If true, generates new wallet if env var not found
 */
export function getTestWallet(
  secretKey?: string,
  generateIfMissing: boolean = true
): Keypair {
  if (secretKey) {
    if (secretKey) {
      const wallet = loadWallet(secretKey);
      console.log("  Address:", wallet.publicKey.toBase58());
      return wallet;
    }

    if (!generateIfMissing) {
      throw new Error(`Secret key not provided. `);
    }

    console.log(`⚠️  No secret key provided, generating new wallet`);
  }

  const wallet = generateTestWallet();

  return wallet;
}

/**
 * Export wallet as base58 for browser injection
 */
export function exportWalletForBrowser(keypair: Keypair): string {
  return bs58.encode(keypair.secretKey);
}

// ==================== SOL OPERATIONS ====================

// Persistent funder wallet (loaded from environment or generated once)
let funderWallet: Keypair | null = null;

/**
 * Get or create a persistent funder wallet
 * This wallet can be manually funded once and reused across all tests
 */
export function getFunderWallet(): Keypair {
  if (funderWallet) {
    return funderWallet;
  }

  // Try to load from environment variable
  const funderSecretKey = process.env.TEST_FUNDER_SECRET_KEY;

  if (funderSecretKey) {
    try {
      const secretKey = bs58.decode(funderSecretKey);
      funderWallet = Keypair.fromSecretKey(secretKey);
      console.log("✓ Loaded funder wallet from environment");
      console.log("  Address:", funderWallet.publicKey.toBase58());
      return funderWallet;
    } catch (error) {
      console.warn("Failed to load funder wallet from env, generating new one");
    }
  }

  // Generate new funder wallet
  funderWallet = Keypair.generate();
  console.log("");
  console.log("=".repeat(70));
  console.log("⚠️  NEW FUNDER WALLET GENERATED");
  console.log("=".repeat(70));
  console.log("Address:", funderWallet.publicKey.toBase58());
  console.log("Secret Key:", bs58.encode(funderWallet.secretKey));
  console.log("");
  console.log("Fund this wallet with devnet SOL, then add to .env:");
  console.log(`TEST_FUNDER_SECRET_KEY=${bs58.encode(funderWallet.secretKey)}`);
  console.log("");
  console.log("Faucet links:");
  console.log("  - https://faucet.solana.com/");
  console.log("  - https://solfaucet.com/");
  console.log("");
  console.log("Or use CLI:");
  console.log(
    `  solana airdrop 5 ${funderWallet.publicKey.toBase58()} --url devnet`
  );
  console.log("=".repeat(70));
  console.log("");

  return funderWallet;
}

/**
 * Transfer SOL from funder wallet to a test wallet
 */
async function transferFromFunder(
  destination: PublicKey,
  amount: number
): Promise<string> {
  const funder = getFunderWallet();
  const funderBalance = await getSolBalance(funder.publicKey);

  if (funderBalance < amount + 0.01) {
    // +0.01 for fees
    throw new Error(
      `Funder wallet has insufficient balance: ${funderBalance} SOL. ` +
        `Need at least ${amount + 0.01} SOL. ` +
        `Please fund ${funder.publicKey.toBase58()}`
    );
  }

  console.log(
    `Transferring ${amount} SOL from funder to ${destination.toBase58()}`
  );

  const transaction = new Transaction().add(
    SystemProgram.transfer({
      fromPubkey: funder.publicKey,
      toPubkey: destination,
      lamports: amount * LAMPORTS_PER_SOL,
    })
  );

  const signature = await connection.sendTransaction(transaction, [funder]);
  await connection.confirmTransaction(signature);

  console.log(`✓ Transfer complete: ${signature}`);
  return signature;
}

/**
 * Airdrop SOL to a wallet on devnet with multiple fallback options
 */
export async function airdropSol(
  publicKey: PublicKey,
  amount: number = 2
): Promise<string> {
  console.log(`Requesting ${amount} SOL for ${publicKey.toBase58()}`);

  // Try official devnet faucet first
  try {
    const signature = await connection.requestAirdrop(
      publicKey,
      amount * LAMPORTS_PER_SOL
    );

    await connection.confirmTransaction(signature);
    console.log(`✓ Airdrop confirmed via RPC: ${signature}`);
    return signature;
  } catch (error: unknown) {
    console.log(
      `RPC airdrop failed: ${
        (error as Error).message ? (error as Error).message : "Unknown"
      }`
    );
  }

  // Fallback 1: Try transferring from funder wallet
  try {
    const funder = getFunderWallet();
    const funderBalance = await getSolBalance(funder.publicKey);

    if (funderBalance >= amount + 0.01) {
      console.log(`Using funder wallet (balance: ${funderBalance} SOL)...`);
      return await transferFromFunder(publicKey, amount);
    } else {
      console.log(
        `Funder wallet has insufficient balance: ${funderBalance} SOL`
      );
    }
  } catch (error: unknown) {
    console.log(
      `Funder transfer failed: ${
        (error as Error).message ? (error as Error).message : "Unknown"
      }`
    );
  }

  // Fallback 2: Try smaller amounts multiple times
  console.log("Attempting multiple small airdrops...");
  const smallAmount = 0.5; // Request 0.5 SOL at a time
  const iterations = Math.ceil(amount / smallAmount);
  let successCount = 0;

  for (let i = 0; i < iterations; i++) {
    try {
      await new Promise((resolve) => setTimeout(resolve, 2000)); // Wait between requests

      const signature = await connection.requestAirdrop(
        publicKey,
        smallAmount * LAMPORTS_PER_SOL
      );

      await connection.confirmTransaction(signature);
      successCount++;
      console.log(`✓ Small airdrop ${i + 1}/${iterations}: ${signature}`);
    } catch (error: unknown) {
      console.log(
        `Small airdrop ${i + 1} failed: ${
          (error as Error).message ? (error as Error).message : "Unknown"
        }`
      );
    }
  }

  if (successCount > 0) {
    const balance = await getSolBalance(publicKey);
    console.log(
      `✓ Completed ${successCount}/${iterations} small airdrops. Balance: ${balance} SOL`
    );
    if (balance >= amount * 0.5) {
      // At least 50% of requested amount
      return "multi-airdrop-success";
    }
  }

  // Fallback 3: Check if we already have enough SOL
  const currentBalance = await getSolBalance(publicKey);
  if (currentBalance >= amount * 0.9) {
    console.log(
      `✓ Wallet already has sufficient balance: ${currentBalance} SOL`
    );
    return "sufficient-balance";
  }

  // Final fallback: Instructions
  const funder = getFunderWallet();
  const errorMessage = `
    ⚠️  All automatic funding methods failed!
    
    Option 1: Fund the persistent funder wallet (RECOMMENDED)
    ---------------------------------------------------------
    Address: ${funder.publicKey.toBase58()}
    
    Fund it once with 10+ SOL using:
    - https://faucet.solana.com/
    - solana airdrop 10 ${funder.publicKey.toBase58()} --url devnet
    
    Then add to .env:
    TEST_FUNDER_SECRET_KEY=${bs58.encode(funder.secretKey)}
    
    This wallet will fund all future test wallets automatically!
    
    Current funder balance: ${await getSolBalance(funder.publicKey)} SOL
    Current test wallet balance: ${currentBalance} SOL
    Requested amount: ${amount} SOL
  `;

  console.error(errorMessage);

  // If we have at least some SOL, continue anyway
  if (currentBalance > 0.1) {
    console.log(`Continuing with current balance: ${currentBalance} SOL`);
    return "partial-balance";
  }

  throw new Error(
    "Unable to fund wallet. Please fund the funder wallet manually (see instructions above)."
  );
}

/**
 * Airdrop SOL with retry logic and exponential backoff
 */
export async function airdropSolWithRetry(
  publicKey: PublicKey,
  amount: number = 2,
  maxRetries: number = 5
): Promise<string> {
  for (let attempt = 1; attempt <= maxRetries; attempt++) {
    try {
      console.log(`Funding attempt ${attempt}/${maxRetries}...`);
      return await airdropSol(publicKey, amount);
    } catch (error: unknown) {
      console.log(
        `Attempt ${attempt} failed: ${
          (error as Error).message ? (error as Error).message : "Unknown"
        }`
      );

      if (attempt < maxRetries) {
        const waitTime = Math.pow(2, attempt) * 1000; // Exponential backoff
        console.log(`Waiting ${waitTime}ms before retry...`);
        await new Promise((resolve) => setTimeout(resolve, waitTime));
      }
    }
  }

  throw new Error(`Failed to fund wallet after ${maxRetries} attempts`);
}

/**
 * Get SOL balance in SOL (not lamports)
 */
export async function getSolBalance(publicKey: PublicKey): Promise<number> {
  const balance = await connection.getBalance(publicKey);
  return balance / LAMPORTS_PER_SOL;
}

// ==================== SPL TOKEN OPERATIONS ====================

/**
 * Create a test USDC mint (SPL token with 6 decimals)
 */
export async function createTestUSDC(payer: Keypair): Promise<PublicKey> {
  console.log("Creating test USDC mint...");

  const mint = await createMint(
    connection,
    payer,
    payer.publicKey,
    payer.publicKey,
    6 // USDC has 6 decimals
  );

  console.log(`Test USDC mint created: ${mint.toBase58()}`);
  return mint;
}

/**
 * Mint test USDC to a wallet
 */
export async function mintTestUSDC(
  mint: PublicKey,
  destination: PublicKey,
  authority: Keypair,
  amount: number
): Promise<string> {
  console.log(`Minting ${amount} USDC to ${destination.toBase58()}`);

  const tokenAccount = await getOrCreateAssociatedTokenAccount(
    connection,
    authority,
    mint,
    destination
  );

  const signature = await mintTo(
    connection,
    authority,
    mint,
    tokenAccount.address,
    authority,
    amount * 1_000_000 // Convert to smallest unit (6 decimals)
  );

  console.log(`Minted USDC: ${signature}`);
  return signature;
}

/**
 * Get token balance for a wallet
 */
export async function getTokenBalance(
  mint: PublicKey,
  owner: PublicKey
): Promise<number> {
  try {
    const tokenAccount = await getOrCreateAssociatedTokenAccount(
      connection,
      Keypair.generate(), // Won't actually be used since account exists
      mint,
      owner,
      true // allowOwnerOffCurve
    );

    const accountInfo = await getAccount(connection, tokenAccount.address);
    return Number(accountInfo.amount) / 1_000_000; // Convert from smallest unit
  } catch (error) {
    console.error("Error getting token balance:", error);
    return 0;
  }
}

// ==================== TRANSACTION HELPERS ====================

/**
 * Wait for transaction confirmation
 */
export async function waitForTransaction(
  signature: string,
  maxRetries: number = 30
): Promise<boolean> {
  for (let i = 0; i < maxRetries; i++) {
    const status = await connection.getSignatureStatus(signature);
    if (
      status?.value?.confirmationStatus === "confirmed" ||
      status?.value?.confirmationStatus === "finalized"
    ) {
      return true;
    }
    await new Promise((resolve) => setTimeout(resolve, 1000));
  }
  return false;
}

/**
 * Get transaction details for verification
 */
export async function getTransactionDetails(signature: string) {
  try {
    const tx = await connection.getTransaction(signature, {
      maxSupportedTransactionVersion: 0,
      commitment: "confirmed",
    });

    if (!tx) {
      return null;
    }

    return {
      slot: tx.slot,
      blockTime: tx.blockTime,
      fee: tx.meta?.fee,
      success: tx.meta?.err === null,
      logs: tx.meta?.logMessages,
      preBalances: tx.meta?.preBalances,
      postBalances: tx.meta?.postBalances,
    };
  } catch (error) {
    console.error("Error fetching transaction:", error);
    return null;
  }
}

/**
 * Verify a transaction succeeded on-chain
 */
export async function verifyTransactionSuccess(
  signature: string
): Promise<boolean> {
  const details = await getTransactionDetails(signature);
  return details !== null && details.success;
}
