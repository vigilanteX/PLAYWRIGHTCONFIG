import { test as tear } from "@playwright/test";

tear("my tear", async function ({ page }) {
  await page.goto("https://bing.com");
  await page.waitForTimeout(4000);
});
