import { devices } from "@playwright/test";
/** @type {import('@playwright/test').PlaywrightTestConfig} */
export const config = {
  testDir: "./redoconfigsGPT/15globalTear",
  use: {
    headless: false,
  },
  globalSetup: "./globalSetupInfo/global.setup.js",
  globalTeardown: "./globalTeardownInfo/global.tear.js",
};
