import { test } from "@playwright/test";
test("global setup test", async function ({ page }) {
  await page.goto("https://google.com");
  await page.waitForTimeout(6000);
});
