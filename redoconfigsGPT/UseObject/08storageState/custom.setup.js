import { chromium } from "@playwright/test";
async function fn() {
  const browser = await chromium.launch({ headless: false });
  const context = await browser.newContext();
  const page = await context.newPage();
  await page.goto(
    "https://naveenautomationlabs.com/opencart/index.php?route=account/login"
  );
  await page.locator("#input-email").fill("bobatea@gmail.com");
  await page.locator("#input-password").fill("12345");
  await page.locator("[value='Login']").click();
  await page.waitForTimeout(4000);
  await page.context().storageState({ path: "./storagesession/user.json" });
  await context.close();
  console.log("custom setup call finished");
}

export default fn;
