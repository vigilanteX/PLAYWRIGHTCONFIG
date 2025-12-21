import { test } from "@playwright/test";

test("test1", async function ({ page }) {
  await page.goto("https://google.com");
  await page.waitForTimeout(5000);
});
test("test2", async function ({ page }) {
  await page.goto("https://google.com");
  await page.waitForTimeout(5000);
});
test("test3", async function ({ page }) {
  await page.goto("https://google.com");
  await page.waitForTimeout(5000);
});
test("test4", async function ({ page }) {
  await page.goto("https://google.com");
  await page.waitForTimeout(5000);
});
