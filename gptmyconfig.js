import { devices } from "@playwright/test";
/** @type {import('@playwright/test').PlaywrightTestConfig} */
export const config = {
  testDir: "redoconfigsGPT/ProjectArray/01name/demo.spec.js",
  use: {
    headless: true,
  },
  projects: [
    {
      name: "customff",
      use: { headless: false, browserName: "firefox" },
      testDir: "./redoconfigsGPT/ProjectArray/01name",
    },
  ],
};
