import { expect, test } from "@playwright/test";

test("expect check", async function ({ page }) {
  await page.goto(
    "https://naveenautomationlabs.com/opencart/index.php?route=account/login"
  );
  const input = await page.locator("#input-emails");
  await expect(input).toBeVisible();
});
