import { devices } from "@playwright/test";
/** @type {import('@playwright/test').PlaywrightTestConfig} */
export const config = {
  testDir: "./redoconfigsGPT/16webserver",
  use: {
    headless: false,
  },
  webServer: {
    url: "http://localhost:9000",
    timeout: 10000,
    command: "node ./myserver.js",
    stdout: "pipe",
  },
};
