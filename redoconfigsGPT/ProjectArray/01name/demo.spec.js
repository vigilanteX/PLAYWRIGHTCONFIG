import { test } from "@playwright/test";

test("name property", async function ({ page }) {
  await page.goto("https://google.com");
  await page.waitForTimeout(5000);
});
