import { devices } from "@playwright/test";
/** @type {import('@playwright/test').PlaywrightTestConfig} */
export const config = {
  testDir: "redoconfigsGPT/ProjectArray/06dependencies",
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
    {
      name: "grepcheck",
      use: { headless: false },
      testDir: "redoconfigsGPT/ProjectArray/04grep",
      grepInvert: new RegExp("testmatchdemox2"),
    },
    {
      name: "outDirTest",
      use: { headless: false, video: "on", trace: "on", screenshot: "on" },
      testDir: "redoconfigsGPT/ProjectArray/05outdirtest",
      outputDir: "redoconfigsGPT/ProjectArray/05outdirtest/output-folder",
    },
    {
      name: "intialsetup",
      testMatch: "**/*.setup.js",
      testDir: "redoconfigsGPT/ProjectArray/06dependencies",
      use: { headless: false },
    },

    {
      name: "dependencycheck",
      testDir: "redoconfigsGPT/ProjectArray/06dependencies",
      testMatch: "**/*.spec.js",
      use: { headless: false },
      dependencies: ["intialsetup"],
    },
  ],
};
