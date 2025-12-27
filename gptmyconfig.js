import { devices } from "@playwright/test";
/** @type {import('@playwright/test').PlaywrightTestConfig} */
export const config = {
  testDir: "./redoconfigsGPT/UseObject/06video",
  outputDir: "./custom-output",
  use: {
    headless: false,
    baseURL: "https://naveenautomationlabs.com",
    video: {
      mode: "on",
    },
  },
};
