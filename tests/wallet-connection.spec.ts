// e2e/wallet-adapter.spec.ts
import { test, expect } from "@playwright/test";
import {
  generateTestWallet,
  airdropSol,
  createTestUSDC,
  mintTestUSDC,
  getSolBalance,
  exportWalletForBrowser,
  connection,
  waitForTransaction,
} from "./utils/solana-helpers";
import { getPhantomInjectionScript } from "./utils/mock-phantom";

test.describe("Solana dApp with wallet-adapter", () => {
  test("should connect wallet and complete transaction", async ({
    page,
    context,
  }) => {
    // Generate test wallet
    const wallet = generateTestWallet();
    const walletAddress = wallet.publicKey.toBase58();

    console.log("=".repeat(60));
    console.log("Test Wallet:", walletAddress);
    console.log(
      "Explorer:",
      `https://explorer.solana.com/address/${walletAddress}?cluster=devnet`
    );
    console.log("=".repeat(60));

    // Airdrop SOL
    console.log("Requesting SOL airdrop...");
    const airdropSig = await airdropSol(wallet.publicKey, 2);
    console.log("Airdrop signature:", airdropSig);
    console.log(
      "Airdrop tx:",
      `https://explorer.solana.com/tx/${airdropSig}?cluster=devnet`
    );

    // Verify balance
    const balance = await getSolBalance(wallet.publicKey);
    console.log("Wallet balance:", balance, "SOL");
    expect(balance).toBeGreaterThanOrEqual(1.9); // Allow small variance

    // Inject mock Phantom wallet
    await page.addInitScript(
      getPhantomInjectionScript(exportWalletForBrowser(wallet))
    );

    // Listen for console logs from the page to capture transaction signatures
    const transactionSignatures: string[] = [];
    page.on("console", (msg) => {
      const text = msg.text();
      console.log("Browser:", text);

      // Capture transaction signatures from your dApp logs
      const sigMatch = text.match(
        /signature[:\s]+([1-9A-HJ-NP-Za-km-z]{87,88})/i
      );
      if (sigMatch) {
        transactionSignatures.push(sigMatch[1]);
        console.log("Captured transaction signature:", sigMatch[1]);
      }
    });

    // Navigate to your dApp
    await page.goto("/");
    await page.waitForLoadState("networkidle");

    // Connect wallet
    console.log("Connecting wallet...");
    await page.click('button:has-text("Connect Wallet")');

    // Wait for connection to complete
    await page.waitForTimeout(2000);

    // Verify wallet is connected and address is displayed
    const displayedAddress = await page
      .locator('[data-testid="wallet-address"]')
      .textContent();
    expect(displayedAddress).toContain(walletAddress.slice(0, 4));
    console.log("Wallet connected successfully");

    // Trigger a transaction in your dApp
    // This will use your dApp's connection.sendTransaction() and connection.confirmTransaction()
    console.log("Initiating transaction...");
    await page.click('button:has-text("Send Transaction")');

    // Wait for your dApp to show success
    await page.waitForSelector('[data-testid="transaction-success"]', {
      timeout: 60000, // Devnet can be slow
    });

    console.log("Transaction confirmed by dApp!");

    // Get the transaction signature from the page
    const txSignature = await page
      .locator('[data-testid="transaction-signature"]')
      .textContent();
    console.log("Transaction signature:", txSignature);
    console.log(
      "View on Explorer:",
      `https://explorer.solana.com/tx/${txSignature}?cluster=devnet`
    );

    // Verify transaction on-chain using our connection
    if (txSignature) {
      const confirmed = await waitForTransaction(txSignature.trim());
      expect(confirmed).toBe(true);

      // Get transaction details
      const txDetails = await connection.getTransaction(txSignature.trim(), {
        maxSupportedTransactionVersion: 0,
      });

      expect(txDetails).not.toBeNull();
      console.log("Transaction verified on-chain!");
      console.log("Slot:", txDetails?.slot);
      console.log(
        "Block time:",
        new Date((txDetails?.blockTime || 0) * 1000).toISOString()
      );
    }
  });

  test("should handle transfer between wallets", async ({ page }) => {
    // Create sender and receiver
    const sender = generateTestWallet();
    const receiver = generateTestWallet();

    console.log("=".repeat(60));
    console.log("Sender:", sender.publicKey.toBase58());
    console.log("Receiver:", receiver.publicKey.toBase58());
    console.log("=".repeat(60));

    // Fund sender
    await airdropSol(sender.publicKey, 2);

    const initialBalance = await getSolBalance(sender.publicKey);
    console.log("Sender initial balance:", initialBalance, "SOL");

    // Inject sender wallet
    await page.addInitScript(
      getPhantomInjectionScript(exportWalletForBrowser(sender))
    );

    await page.goto("/");
    await page.click('button:has-text("Connect Wallet")');
    await page.waitForTimeout(2000);

    // Fill transfer form (adjust selectors to match your dApp)
    await page.fill(
      '[data-testid="recipient-input"]',
      receiver.publicKey.toBase58()
    );
    await page.fill('[data-testid="amount-input"]', "0.5");

    // Submit transfer
    console.log("Sending 0.5 SOL...");
    await page.click('button:has-text("Transfer")');

    // Wait for confirmation
    await page.waitForSelector('[data-testid="transaction-success"]', {
      timeout: 60000,
    });

    // Verify balances on-chain
    const senderFinalBalance = await getSolBalance(sender.publicKey);
    const receiverBalance = await getSolBalance(receiver.publicKey);

    console.log("Sender final balance:", senderFinalBalance, "SOL");
    console.log("Receiver balance:", receiverBalance, "SOL");

    // Sender should have less (0.5 SOL + fees)
    expect(senderFinalBalance).toBeLessThan(initialBalance - 0.5);
    expect(senderFinalBalance).toBeGreaterThan(initialBalance - 0.51); // Max 0.01 SOL fees

    // Receiver should have the 0.5 SOL
    expect(receiverBalance).toBeGreaterThanOrEqual(0.5);

    console.log("Transfer verified on-chain!");
  });

  test("should mint and transfer test USDC", async ({ page }) => {
    // Setup wallets
    const sender = generateTestWallet();
    const receiver = generateTestWallet();
    const mintAuthority = generateTestWallet();

    console.log("=".repeat(60));
    console.log("Sender:", sender.publicKey.toBase58());
    console.log("Receiver:", receiver.publicKey.toBase58());
    console.log("=".repeat(60));

    // Fund wallets
    await airdropSol(sender.publicKey, 2);
    await airdropSol(receiver.publicKey, 1); // For token account rent
    await airdropSol(mintAuthority.publicKey, 2);

    // Create test USDC
    console.log("Creating test USDC mint...");
    const usdcMint = await createTestUSDC(mintAuthority);
    console.log("USDC Mint:", usdcMint.toBase58());
    console.log(
      "Mint explorer:",
      `https://explorer.solana.com/address/${usdcMint.toBase58()}?cluster=devnet`
    );

    // Mint 1000 USDC to sender
    console.log("Minting 1000 USDC to sender...");
    const mintSig = await mintTestUSDC(
      usdcMint,
      sender.publicKey,
      mintAuthority,
      1000
    );
    console.log(
      "Mint tx:",
      `https://explorer.solana.com/tx/${mintSig}?cluster=devnet`
    );

    // Inject sender wallet
    await page.addInitScript(
      getPhantomInjectionScript(exportWalletForBrowser(sender))
    );

    await page.goto("/");
    await page.click('button:has-text("Connect Wallet")');
    await page.waitForTimeout(2000);

    // Your dApp might need to know the token mint address
    // You can pass it via URL or set it in localStorage
    await page.evaluate((mint) => {
      window.localStorage.setItem("testUSDCMint", mint);
    }, usdcMint.toBase58());

    // Reload to pick up the test mint
    await page.reload();
    await page.waitForTimeout(2000);

    // Fill transfer form
    await page.fill(
      '[data-testid="recipient-input"]',
      receiver.publicKey.toBase58()
    );
    await page.fill('[data-testid="amount-input"]', "100");

    // Select USDC token (if your dApp has a token selector)
    await page.click('[data-testid="token-select"]');
    await page.click(`[data-token-mint="${usdcMint.toBase58()}"]`);

    // Submit transfer
    console.log("Transferring 100 USDC...");
    await page.click('button:has-text("Transfer")');

    // Wait for confirmation
    await page.waitForSelector('[data-testid="transaction-success"]', {
      timeout: 60000,
    });

    console.log("USDC transfer completed!");

    // Get transaction signature
    const txSig = await page
      .locator('[data-testid="transaction-signature"]')
      .textContent();
    if (txSig) {
      console.log(
        "Transfer tx:",
        `https://explorer.solana.com/tx/${txSig.trim()}?cluster=devnet`
      );
    }

    console.log("All transactions can be verified on Solana Explorer (devnet)");
  });

  test("should handle insufficient balance error", async ({ page }) => {
    // Create wallet with minimal funds
    const wallet = generateTestWallet();

    console.log("Test wallet (low funds):", wallet.publicKey.toBase58());

    // Airdrop only 0.01 SOL (not enough for most transactions)
    await airdropSol(wallet.publicKey, 0.01);

    await page.addInitScript(
      getPhantomInjectionScript(exportWalletForBrowser(wallet))
    );

    await page.goto("/");
    await page.click('button:has-text("Connect Wallet")');
    await page.waitForTimeout(2000);

    // Try to send 1 SOL (more than wallet has)
    await page.fill(
      '[data-testid="recipient-input"]',
      "DummyAddress111111111111111111111111111111111"
    );
    await page.fill('[data-testid="amount-input"]', "1");

    console.log("Attempting transaction with insufficient funds...");
    await page.click('button:has-text("Transfer")');

    // Should show error
    const errorLocator = page.locator('[data-testid="transaction-error"]');
    await errorLocator.waitFor({ timeout: 10000 });

    const errorText = await errorLocator.textContent();
    console.log("Error message:", errorText);

    expect(errorText?.toLowerCase()).toMatch(/insufficient|balance|funds/);

    console.log("Error handling verified!");
  });
});
