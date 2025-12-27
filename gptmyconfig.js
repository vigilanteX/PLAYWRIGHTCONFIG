import { devices } from "@playwright/test";
/** @type {import('@playwright/test').PlaywrightTestConfig} */
export const config = {
  testDir: "./redoconfigsGPT/UseObject/05screenshot",
  outputDir: "./custom-output",
  use: {
    headless: false,
    baseURL: "https://naveenautomationlabs.com",
    screenshot: "only-on-failure",
  },
};
