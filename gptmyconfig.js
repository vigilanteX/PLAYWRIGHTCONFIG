import { devices } from "@playwright/test";
/** @type {import('@playwright/test').PlaywrightTestConfig} */
export const config = {
  testDir: "./redoconfigsGPT/13outputDir",
  outputDir: "custom-output",
  use: {
    headless: false,
    screenshot: "on",
    trace: "on",
    actionTimeout: 8000,
  },
  reporter: "html",
};
