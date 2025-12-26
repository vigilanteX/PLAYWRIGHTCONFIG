import { test } from "@playwright/test";
test("exception", function () {
  throw new Error("exception retries");
});
/*
  retries: 3 set in config
  ✘  1 redoconfigsGPT/10retries/demo.spec.js:2:5 › exception (5ms)
  ✘  2 redoconfigsGPT/10retries/demo.spec.js:2:5 › exception (retry #1) (5ms)
  ✘  3 redoconfigsGPT/10retries/demo.spec.js:2:5 › exception (retry #2) (8ms)
  ✘  4 redoconfigsGPT/10retries/demo.spec.js:2:5 › exception (retry #3) (4ms)

*/
