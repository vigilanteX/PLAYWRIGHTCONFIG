import { test } from "@playwright/test";

test("out put directory", async function ({ page }, testInfo) {
  await page.goto("https://google.com");
});
