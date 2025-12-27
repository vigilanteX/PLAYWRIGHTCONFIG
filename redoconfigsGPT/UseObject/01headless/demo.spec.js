import { test } from "@playwright/test";

test("headless check", async function ({ page }) {
  await page.goto("https://google.com");
  await page.waitForTimeout(5000);
});
