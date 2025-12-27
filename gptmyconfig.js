import { devices } from "@playwright/test";
/** @type {import('@playwright/test').PlaywrightTestConfig} */
export const config = {
  testDir: "./redoconfigsGPT/UseObject/08storageState",
  outputDir: "./custom-output",
  use: {
    headless: false,
    storageState: "storagesession/user.json",
  },
  globalSetup: "redoconfigsGPT/UseObject/08storageState/custom.setup.js",
};
