// @ts-check
import { defineConfig, devices } from "@playwright/test";
import myCustomConfig from "./myconfig.js";
import { config } from "./gptmyconfig.js";
/**
 * Read environment variables from file.
 * https://github.com/motdotla/dotenv
 */
// import dotenv from 'dotenv';
// import path from 'path';
// dotenv.config({ path: path.resolve(__dirname, '.env') });

/**
 * @see https://playwright.dev/docs/test-configuration
 */
export default defineConfig(config);
