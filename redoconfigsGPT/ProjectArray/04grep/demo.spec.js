import { test } from "@playwright/test";
test("testmatchdemox0 @smoke", async function ({ page }) {
  await page.waitForTimeout(5000);
  console.log("testmatchdemox0");
});
test("testmatchdemox1", async function ({ page }) {
  await page.waitForTimeout(5000);
  console.log("testmatchdemox1");
});
test("testmatchdemox2 @smoke", async function ({ page }) {
  await page.waitForTimeout(5000);
  console.log("testmatchdemox2");
});
test("testmatchdemox3", async function ({ page }) {
  await page.waitForTimeout(5000);
  console.log("testmatchdemox3");
});
