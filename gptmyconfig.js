import { devices } from "@playwright/test";
/** @type {import('@playwright/test').PlaywrightTestConfig} */
export const config = {
  testDir: "./redoconfigsGPT/UseObject/03viewport",
  use: {
    headless: false,
    baseURL: "https://naveenautomationlabs.com",
    viewport: {
      height: 300,
      width: 280,
    },
  },
};
