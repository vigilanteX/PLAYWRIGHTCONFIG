import { devices } from "@playwright/test";
/** @type {import('@playwright/test').PlaywrightTestConfig} */
export const config = {
  testDir: "./redoconfigsGPT/06forbidOnly",
  timeout: 25000,
  globalTimeout: 40000,
  forbidOnly: true,
};
