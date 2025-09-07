import { test } from '@playwright/test';
test("Add Product", async ({ page }) => {
    await test.step("Navigate to Meterial page", async () => {
        await page.goto("https://material.playwrightvn.com/");
    })
    await test.step("Click to Lesson 3 ", async () => {
        await page.locator("//a[text() ='Bài học 3: Todo page']").click();
    })
    await test.step("Add Todo ", async () => {
        for (let i = 1; i < 5; i++) {
            await page.locator("//input[@id='new-task']").fill(`To Do ${i}`);
            await page.locator("//button[@id='add-task']").click();

        };

       
        await page.waitForTimeout(5000);


    })


});