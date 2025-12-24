import { test } from "@playwright/test";

test("tc screenshot", async function ({ page }, testInfo) {
  await page.goto("https://www.google.com/?zx=1766556881842&no_sw_cr=1");
  const path = testInfo.outputPath("myss.png");
  await page.screenshot({ path });
});
