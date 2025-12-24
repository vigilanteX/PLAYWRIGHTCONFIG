import { expect, test } from "@playwright/test";

test("snapshot", async function ({ page }) {
  await page.goto("https://google.com");
  //await page.screenshot({ path: "snapshot/meow.png" });
  await expect(page).toHaveScreenshot("meow.png");
  await page.waitForTimeout(5000);
});
