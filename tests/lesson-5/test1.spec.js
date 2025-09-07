import { expect, test } from '@playwright/test';

test("Register User", async ({ page }) => {
    await test.step("Navigate to Meterial page", async () => {
        await page.goto("https://material.playwrightvn.com/");
    })
    await test.step("Click to Lesson 1 ", async () => {
        await page.locator("//a[text() ='Bài học 1: Register Page (có đủ các element)']").click();
    })
    await test.step("input user ", async () => {
        await page.locator("//input[@id='username']").fill("Phi Tran");
        await page.locator("//input[@id='email']").fill("phitran1990@gmail.com");
        await page.check("//input[@id='male']");
        // cach de check multi checkbox
        const hobbiesCheckox = ['#traveling', '#cooking'];
        for (const locator of hobbiesCheckox) {
            await page.locator(locator).check();
        }
        await page.selectOption("//select[@id='interests']", "art");
        await page.selectOption("//select[@id='country']", "canada");
        //await page.locator("//input[@id='dob']").click(); --> chua biet cach select date picker
        await page.setInputFiles("//input[@type='file']", "tests/lesson-5/testdata/test1.txt"); // tren window nho chuyen "\" thanh "/"
        await page.locator("//textarea[@id='bio']").fill("Phi Test");
        // range input chua biet cach de chon
        await page.locator("//input[@type='color']").fill("#757575");


    })
    await test.step("Clicks Register", (async () => {
        await page.locator("//button[@type='submit']").click();
        await page.waitForTimeout(3000);


    }))

});