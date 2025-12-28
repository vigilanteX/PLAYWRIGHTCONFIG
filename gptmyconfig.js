import { devices } from "@playwright/test";
/** @type {import('@playwright/test').PlaywrightTestConfig} */
export const config = {
  testDir: "redoconfigsGPT/ProjectArray/01name/demo.spec.js",
  use: {
    headless: true,
  },
  workers: 4,
  projects: [
    {
      name: "customff",
      use: { headless: false, browserName: "firefox" },
      testDir: "./redoconfigsGPT/ProjectArray/01name",
    },
    {
      name: "testdirmatchignore",
      use: { headless: false, browserName: "chromium" },
      testDir: "./redoconfigsGPT/ProjectArray/02testdirmatchignore",
    },
    {
      name: "workersinfo",
      use: { headless: false, browserName: "firefox" },
      testDir: "redoconfigsGPT/ProjectArray/03workers",
      workers: 1,
      fullyParallel: true,
    },
  ],
};
