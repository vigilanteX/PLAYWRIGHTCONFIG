import { test } from "@playwright/test";
test("t1", function () {});
test("t2", function () {});
test("t3", function () {});
test("t4", function () {
  throw new Error("meowerror");
});
