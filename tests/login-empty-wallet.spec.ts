import { test, expect } from "@playwright/test";
import {
  exportWalletForBrowser,
  generateTestWallet,
} from "./utils/solana-helpers";
import { getPhantomInjectionScript } from "./utils/mock-phantom";

test("Login with empty wallet", async ({ page }) => {
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

  // Click on Phantom to connect
  await phantomOption.click();

  // Login page loads
  await expect(page.getByText("Your decentralized finance")).toBeVisible();
  // User cannot buy
  await expect(
    page
      .getByText(
        "You must have SOL and USDC in your wallet to buy PRIME or stake PRIME."
      )
      .first()
  ).toBeVisible();
  // User cannot spend
  await page.getByRole("tab", { name: "Send" }).click();
  await expect(
    page
      .locator("div")
      .filter({
        hasText:
          /^You must have SOL and USDC, WYLDS, or SYLDS in your wallet to send\.$/,
      })
      .first()
  ).toBeVisible();
  // User cannot stake
  await page.getByRole("tab", { name: "Stake" }).click();
  await expect(page.getByText("You must have SOL and PRIME")).toBeVisible();
  await expect(page.getByText("You must have SOL and sYLDS")).toBeVisible();
});
