import { test } from "@playwright/test";

test("t4", async function ({ page }) {
  await page.waitForTimeout(5000);
});
test("t5", async function ({ page }) {
  await page.waitForTimeout(5000);
});
test("t6", async function ({ page }) {
  await page.waitForTimeout(5000);
});
