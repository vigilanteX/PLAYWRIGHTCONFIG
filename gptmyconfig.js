import { devices } from "@playwright/test";
/** @type {import('@playwright/test').PlaywrightTestConfig} */
export const config = {
  testDir: "./redoconfigsGPT/UseObject/02baseURL",
  use: {
    headless: false,
    baseURL: "https://naveenautomationlabs.com",
  },
};
