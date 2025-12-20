import { expect, test } from "@playwright/test";

test("my test1", async function ({ page }) {
  await page.goto("https://google.com");
  const mylocator = page.locator("#meow");
  await page.locator("#meow").click();
  await expect(mylocator).toBeVisible();
  await page.waitForTimeout(31000);
});
