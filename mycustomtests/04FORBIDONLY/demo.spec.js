import { test } from "@playwright/test";

test("test1", async function () {
  console.log("testcase 1");
});
test("test2", async function () {
  console.log("testcase 2");
});
test("test3", async function () {
  console.log("testcase 3");
});
test("test4", async function () {
  console.log("testcase 4");
});
test.only("test5", async function () {
  console.log("testcase 5");
});
