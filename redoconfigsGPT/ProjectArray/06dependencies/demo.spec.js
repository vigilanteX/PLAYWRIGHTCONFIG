import { test } from "@playwright/test";

test("intial", async function ({ page }) {
  await page.goto("https://yahoo.com");
});
