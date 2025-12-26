import { devices } from "@playwright/test";
/** @type {import('@playwright/test').PlaywrightTestConfig} */
export const config = {
  testDir: "./redoconfigsGPT",
  use: {},
  projects: [
    {
      name: "demo1",
      use: { ...devices["Desktop Chrome"] },
    },
  ],
};
