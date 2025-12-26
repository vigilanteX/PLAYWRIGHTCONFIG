import { devices } from "@playwright/test";
/** @type {import('@playwright/test').PlaywrightTestConfig} */
export const config = {
  testDir: "./redoconfigsGPT/09fullyParallel",
  workers: 8,
  fullyParallel: true,
};
