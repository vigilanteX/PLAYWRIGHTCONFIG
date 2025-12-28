import { test } from "@playwright/test";
test("testmatchdemox0 @smoke", async function ({ page }) {
  await page.goto("https://google.com");
  await page.waitForTimeout(5000);
});
