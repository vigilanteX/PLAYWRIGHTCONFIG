import { test } from "@playwright/test";

test("trace", async function ({ page }) {
  await page.goto(
    "https://naveenautomationlabs.com/opencart/index.php?route=account/login"
  );
  await page.locator("#input-email").fill("bobatea@gmail.com");
  await page.locator("#input-password").fill("12345");
  await page.click("[value='Login']");
  await page.waitForTimeout(5000);
});
