import { devices } from "@playwright/test";
/** @type {import('@playwright/test').PlaywrightTestConfig} */
export const config = {
  testDir: "./redoconfigsGPT/03testIgnore",
  testIgnore: "**/*.spec.js",
};
