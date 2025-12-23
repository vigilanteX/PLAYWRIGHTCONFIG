import { test } from "@playwright/test";

test("yahooooooooo", async function ({ page }) {
  await page.goto("https://yahoo.com");
  await page.waitForTimeout(4000);
});
