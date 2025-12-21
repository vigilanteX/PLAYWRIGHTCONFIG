import { test } from "@playwright/test";
test("test failure", async function ({ page }) {
  for (let i = 1; i < 10; i++) {
    console.log(`test case worked ${i}`);
    if (i % 2 === 0) {
      throw new Error("FUCK");
    }
  }
});
