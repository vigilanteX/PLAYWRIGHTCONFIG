import { test } from "@playwright/test";

test("checking minimal config", function () {
  console.log("checking minimal config");
});
test.only("only marked scenario in redoconfigGPT.demo1.test.js", function () {
  console.log("only marked scenario in redoconfigGPT.demo1.test.js");
});
