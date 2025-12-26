import { test } from "@playwright/test";

test("t1", async function ({ page }) {
  await page.waitForTimeout(15000);
});
test("t2", async function ({ page }) {
  await page.waitForTimeout(15000);
});
test("t3", async function ({ page }) {
  await page.waitForTimeout(15000);
});
test("t4", async function ({ page }) {
  await page.waitForTimeout(15000);
});
