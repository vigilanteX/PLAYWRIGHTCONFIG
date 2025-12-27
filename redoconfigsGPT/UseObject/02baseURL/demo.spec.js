import { test } from "@playwright/test";

test("headless check", async function ({ page }) {
  await page.goto("opencart/index.php?route=account/login");
  await page.waitForTimeout(5000);
});
