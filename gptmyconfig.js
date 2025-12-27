import { devices } from "@playwright/test";
/** @type {import('@playwright/test').PlaywrightTestConfig} */
export const config = {
  testDir: "./redoconfigsGPT/UseObject/07trace",
  outputDir: "./custom-output",
  use: {
    headless: false,
    baseURL: "https://naveenautomationlabs.com",
    trace: "retain-on-failure",
  },
};
