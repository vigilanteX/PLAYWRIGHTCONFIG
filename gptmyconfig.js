import { devices } from "@playwright/test";
/** @type {import('@playwright/test').PlaywrightTestConfig} */
export const config = {
  testDir: "./redoconfigsGPT/12Expect",
  expect: {
    timeout: 10000,
  },
  timeout: 30000,
  use: {
    headless: false,
  },
};
