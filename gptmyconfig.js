import { devices } from "@playwright/test";
/** @type {import('@playwright/test').PlaywrightTestConfig} */
export const config = {
  testDir: "./redoconfigsGPT/UseObject/04browserName",
  use: {
    headless: false,
    baseURL: "https://naveenautomationlabs.com",
    browserName: "firefox",
  },
};
