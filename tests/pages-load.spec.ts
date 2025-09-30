import { test, expect } from "@playwright/test";

test("Landing page loads", async ({ page }) => {
  await page.goto("/");

  // Main page loads with component sections
  await expect(page).toHaveTitle(
    "Hastra-Fi | Pushing Forward the Future of Finance"
  );
  await expect(page.getByText("Elite DeFi Products for the")).toBeVisible();

  await expect(page.getByText("Liquid Yield. No staking.")).toBeVisible();
  await expect(page.getByText("Staked PRIME Token")).toBeVisible();
  await expect(page.getByText("Our Innovation Approach")).toBeVisible();

  // About page loads with main sections
  await page
    .getByRole("navigation")
    .getByRole("link", { name: "About" })
    .click();
  await expect(page.getByText("Repeat after Us: Accessing")).toBeVisible();
  await expect(
    page.getByRole("heading", { name: "Our Mission", exact: true })
  ).toBeVisible();
  await expect(page.getByRole("heading", { name: "Our Belief" })).toBeVisible();
  await expect(page.getByRole("heading", { name: "Our Vision" })).toBeVisible();
  await expect(page.getByText("Hastra is built on Provenance")).toBeVisible();
  await expect(page.getByText("Most DeFi protocols create")).toBeVisible();
  await expect(
    page.getByRole("heading", { name: "Coming Soon: HASH Token Buy" })
  ).toBeVisible();
  await expect(page.getByText("This isn't about short-term")).toBeVisible();
  await expect(page.getByText("When we succeed, HASH holders")).toBeVisible();
  await expect(
    page.getByRole("heading", { name: "Join Our Mission" })
  ).toBeVisible();

  // PRIME product page loads with main sections
  await page.getByRole("button", { name: "Products" }).click();
  await page
    .getByRole("menuitem", { name: "PRIME Token PRIME Earn Up to" })
    .click();
  await expect(page.getByText("Earn yield on-the-go and")).toBeVisible();
  await expect(
    page.locator("h2").filter({ hasText: "What is PRIME?" })
  ).toBeVisible();
  await expect(
    page.getByRole("heading", { name: "How It Works" })
  ).toBeVisible();
  await expect(
    page.getByRole("heading", { name: "Watch PRIME as it Grows" })
  ).toBeVisible();
  await expect(page.getByRole("heading", { name: "FAQ" })).toBeVisible();
  // Click into one FAQ
  await page.getByRole("button", { name: "What is PRIME?" }).click();
  await expect(
    page.getByText(
      "PRIME is a token representing a vault of the YLDS token - the first SEC-"
    )
  ).toBeVisible();
  await expect(page.getByText("Want to bring PRIME to your")).toBeVisible();
  await expect(
    page.getByRole("heading", { name: "Documentation & Resources" })
  ).toBeVisible();

  // Click on Learn Page
  const [learnPagePromise] = await Promise.all([
    page.waitForEvent("popup"),
    page.getByRole("link", { name: "Learn" }).first().click(),
  ]);
  await learnPagePromise.waitForLoadState();
  // This should navigate us to the Hastra Helpdesk page
  await expect(
    learnPagePromise.getByRole("heading", { name: "Hastra Helpdesk" })
  ).toBeVisible();
});
