import { test } from "@playwright/test";
test("t1", async function ({ page }) {
  await page.goto(
    "https://naveenautomationlabs.com/opencart/index.php?route=account/account"
  );
  await page.waitForTimeout(5000);
});
