import { devices } from "@playwright/test";
/** @type {import('@playwright/test').PlaywrightTestConfig} */
export const config = {
  testDir: "./redoconfigsGPT/07reporter",
  timeout: 25000,
  globalTimeout: 40000,
  forbidOnly: true,
  reporter: [["html"], ["json"], ["dot"]],
};
