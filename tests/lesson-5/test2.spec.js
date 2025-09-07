import { test } from '@playwright/test';
test("Add Product", async ({ page }) => {
    await test.step("Navigate to Meterial page", async () => {
        await page.goto("https://material.playwrightvn.com/");
    })
    await test.step("Click to Lesson 2 ", async () => {
        await page.locator("//a[text() ='Bài học 2: Product page']").click();
    })
    await test.step("input user ", async () => {
        for (let i = 0; i < 2; i++) {
            await page.locator("//button[@data-product-id=1]").click();

        };
        for (let i = 0; i < 3; i++) {
            await page.locator("//button[@data-product-id=2]").click();

        };
        await page.locator("//button[@data-product-id=3]").click();
       
        await page.waitForTimeout(5000);


    })


});