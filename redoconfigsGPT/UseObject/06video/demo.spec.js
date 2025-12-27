import { test } from "@playwright/test";

test("screenshot", async function ({ page }) {
  await page.goto("opencart/index.php?route=account/login");
  await page.waitForTimeout(5000);
});
