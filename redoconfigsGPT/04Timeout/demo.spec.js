import { test } from "@playwright/test";
test("04 timeout", async function ({ page }) {
  await page.waitForTimeout(29000);
});
