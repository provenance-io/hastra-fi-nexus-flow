import { test, expect } from "@playwright/test";
import {
  airdropSol,
  exportWalletForBrowser,
  generateTestWallet,
} from "./utils/solana-helpers";
import { getPhantomInjectionScript } from "./utils/mock-phantom";

test("Landing page loads", async ({ page }) => {
  await page.goto("/");

  await expect(page).toHaveTitle(
    "Hastra-Fi | Pushing Forward the Future of Finance"
  );
});

test("Connect unfunded wallet", async ({ page }) => {
  // Generate a test wallet
  const wallet = generateTestWallet();

  // Inject the mock Phatom wallet BEFORE navigating to the page
  await page.addInitScript(
    getPhantomInjectionScript(exportWalletForBrowser(wallet))
  );

  // Navigate
  await page.goto("/earn");
  await page.waitForLoadState("networkidle");

  // Verify button is visible
  const connectButton = page
    .getByRole("button", { name: "Connect Wallet" })
    .first();
  await expect(connectButton).toBeVisible();

  // Click connect
  await connectButton.click();

  // Wait for connection to complete
  await page.waitForTimeout(1500);

  const modal = page
    .locator('[role="dialog"]')
    .or(page.locator(".wallet-adapter-modal"));
  await expect(modal).toBeVisible({ timeout: 5000 });

  const phantomOption = page
    .locator("button", { hasText: "Phantom" })
    .or(page.locator('[data-testid="wallet-adapter-phantom"]'))
    .or(page.locator("li", { hasText: "Phantom" }))
    .first();

  await expect(phantomOption).toBeVisible({ timeout: 5000 });
  console.log("✓ Phantom wallet detected in modal");

  // Click on Phantom to connect
  await phantomOption.click();
  console.log("✓ Clicked Phantom wallet option");
  await expect(page.getByText("Your decentralized finance")).toBeVisible();
  await expect(
    page.getByText(
      "You must have SOL and USDC in your wallet to buy wYLDS or stake wYLDS"
    )
  ).toBeVisible();

  // await page.getByRole("button", { name: "Phantom", exact: true }).click();
  // await page.getByText("Disconnect Wallet").click();
  // await expect(page.getByText("Start Earning Immediately")).toBeVisible();
});
