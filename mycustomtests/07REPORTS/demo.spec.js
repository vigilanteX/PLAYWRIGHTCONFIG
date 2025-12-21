import { test } from "@playwright/test";

test("reporting1", async function () {
  console.log("report 1");
  throw new Error("meow");
});
test("reporting2", async function () {
  console.log("report 2");
});
