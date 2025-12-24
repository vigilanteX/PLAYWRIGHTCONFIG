import { devices } from "@playwright/test";
/** @type {import('@playwright/test').PlaywrightTestConfig} */
const myCustomConfig = {
  // testDir: "mycustomtests/09ImportantProjects",
  /* Run tests in files in parallel */
  fullyParallel: false,
  /* Fail the build on CI if you accidentally left test.only in the source code. */
  forbidOnly: false,
  /* Retry on CI only */
  retries: 0,
  /* Opt out of parallel tests on CI. */
  workers: process.env.CI ? 1 : undefined,
  /* Reporter to use. See https://playwright.dev/docs/test-reporters */
  reporter: [["junit", { outputFile: "resultsxml.xml" }]],
  /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
  use: {
    /* Base
     URL to use in actions like `await page.goto('')`. */
    // baseURL: 'http://localhost:3000',

    /* Collect trace when retrying the failed test. See https://playwright.dev/docs/trace-viewer */
    trace: "off",
    headless: false,
    actionTimeout: 9000,
    navigationTimeout: 6000,
    screenshot: "off",
    video: {
      mode: "on",
      size: {
        height: 1920,
        width: 1080,
      },
    },
    // baseURL: "https://naveenautomationlabs.com/",
  },
  timeout: 40000,
  expect: {
    timeout: 15000,
  },

  /* Configure projects for major browsers */
  projects: [
    // {
    //   name: "master",
    //   use: {
    //     ...devices["Desktop Chrome"],
    //     baseURL: "https://naveenautomationlabs.com",
    //     headless: false,
    //   },
    // },
    // {
    //   name: "desktop firefox browser",
    //   use: { ...devices["Desktop Firefox"] },
    // },
    // {
    //   name: "iphone15pro",
    //   use: {
    //     ...devices["iPhone 15 Pro Max"],
    //     browserName: "chromium",
    //     headless: false,
    //     baseURL: "https://naveenautomationlabs.com",
    //   },
    // },
    {
      name: "tear",
      testMatch: "**/*.clean.js",
    },
    {
      name: "setup",
      testMatch: "**/*.setup.js",
    },
    {
      name: "setup2",
      testMatch: /.*\.setup\.js/,
    },
    {
      name: "testdependency",
      use: { ...devices["Desktop Firefox"] },
      dependencies: ["setup"],
      teardown: "tear",
      testDir: "mycustomtests/09ImportantProjects",
    },
    {
      name: "testmatchuse",
      testMatch: "09ImportantProjects/**/*.meow.js",
    },
    {
      name: "testignore",
      testIgnore: "testignorecheck/**/*.meow.js",
      testMatch: "testignorecheck/**/*.spec.js",
    },

    // {
    //   name: "firefox",
    //   use: { ...devices["Desktop Firefox"] },
    // },

    // {
    //   name: "webkit",
    //   use: { ...devices["Desktop Safari"] },
    // },

    /* Test against mobile viewports. */
    // {
    //   name: 'Mobile Chrome',
    //   use: { ...devices['Pixel 5'] },
    // },
    // {
    //   name: 'Mobile Safari',
    //   use: { ...devices['iPhone 12'] },
    // },

    /* Test against branded browsers. */
    // {
    //   name: 'Microsoft Edge',
    //   use: { ...devices['Desktop Edge'], channel: 'msedge' },
    // },
    // {
    //   name: 'Google Chrome',
    //   use: { ...devices['Desktop Chrome'], channel: 'chrome' },
    // },
  ],

  /* Run your local dev server before starting the tests */
  // webServer: {
  //   command: 'npm run start',
  //   url: 'http://localhost:3000',
  //   reuseExistingServer: !process.env.CI,
  // },
};
export default myCustomConfig;
