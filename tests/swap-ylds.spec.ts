import test, { expect } from "@playwright/test";
import { getTestWallet } from "./utils/solana-helpers";
import {
  getDirectKeypairInjection,
  exportWalletForBrowser,
} from "./utils/direct-wallet-injection";

test("Swap YLDS", async ({ page }) => {
  // NOTE: This is the dedicated devnet testing wallet
  const wallet = getTestWallet(
    "29DcBEpGdNrkLtgMBZHHbdTTPrL2nN2QzeRvHURu7UQQQv28WQyiBYiVntJRBRcc4QUYVjS6pTuNCB62GgyTQBvy",
    false
  );
  // Inject wallet before navigation
  await page.addInitScript(
    getDirectKeypairInjection(exportWalletForBrowser(wallet))
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
  await page.getByPlaceholder("Enter amount in USD").click();
  await page.getByPlaceholder("Enter amount in USD").fill("1");
  await page.getByRole("button", { name: "Swap USDC for wYLDSdevnet" }).click();
  await expect(
    page.getByText("Swapped 1 USD for 1.000000 wYLDSdevnet", { exact: true })
  ).toBeVisible();
});
