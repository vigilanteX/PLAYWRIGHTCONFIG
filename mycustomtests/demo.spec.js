import { test } from "@playwright/test";

test("my test1", async function ({ page }) {
  await page.goto("https://google.com");
});
