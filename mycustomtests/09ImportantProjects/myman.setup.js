import { test as setup } from "@playwright/test";

setup("mysetup", async function ({ page }) {
  await page.goto("https://google.com");
  await page.waitForTimeout(5000);
});
