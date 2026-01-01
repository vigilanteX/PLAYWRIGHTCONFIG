import { test } from "@playwright/test";

test("intial", async function ({ page }) {
  await page.goto("https://google.com");
  await page.waitForTimeout(5000);
});
