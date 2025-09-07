import { test } from '@playwright/test';
test("Add Product", async ({ page }) => {
    await test.step("Navigate to Meterial page", async () => {
        await page.goto("https://material.playwrightvn.com/");
    })
    await test.step("Click to Lesson 3 ", async () => {
        await page.locator("//a[text() ='Bài học 4: Personal notes']").click();
    })
    await test.step("Add Note 1 ", async () => {

        await page.locator("//input[@id='note-title']").fill("Cơ chế giúp thợ lặn Croatia nín thở hơn 29 phút");
        await page.locator("//textarea[@id='note-content']").fill('1 Khoa học công nghệCửa sổ tri thứcThứ hai, 8/9/2025, 00:00 (GMT+7) Cơ chế giúp thợ lặn Croatia nín thở hơn 29 phút Vận động viên lặn tự do Vitomir Maričić có thể nín thở 29 phút 3 giây nhờ tập luyện làm tăng lượng oxy dự trữ và trì hoãn phản xạ hít thở không tự chủ của cơ thể.');
        await page.locator("//button[@id='add-note']").click();
        await page.waitForTimeout(100);

    });
    await test.step("Add Note 2 ", async () => {

        await page.locator("//input[@id='note-title']").fill("Vì sao đêm nay Mặt Trăng chuyển màu đỏ");
        await page.locator("//textarea[@id='note-content']").fill('Gần 6 tỷ người ở nhiều nước bao gồm Việt Nam có thể chứng kiến Mặt Trăng chuyển màu đỏ khi hiện tượng nguyệt thực toàn phần diễn ra đêm 7-8/9. Theo Space, nguyệt thực toàn phần xảy ra khi trăng tròn di chuyển hoàn toàn vào trung tâm phần bóng của Trái Đất, hay vùng tối (umbra). Thay vì biến mất trong bóng tối, Mặt Trăng chuyển sang màu đỏ - tạo nên hiện tượng "trăng máu".');
        await page.locator("//button[@id='add-note']").click();
        await page.waitForTimeout(100);

    });
    await test.step("Add Note 3 ", async () => {

        await page.locator("//input[@id='note-title']").fill("'Bố già AI' bị bạn gái chia tay bằng ChatGPT");
        await page.locator("//textarea[@id='note-content']").fill('Nhà khoa học máy tính Geoffrey Hinton ưa dùng ChatGPT trong cuộc sống hàng ngày, nhưng chatbot lại góp phần trong cuộc chia tay của ông với bạn gái cũ. "Cô ấy nhờ ChatGPT nói cho tôi biết tôi là một gã tồi thế nào", Geoffrey Hinton kể lại trong cuộc phỏng vấn với Financial Times ngày 5/9. Hinton, 78 tuổi, được mệnh danh là "Bố già AI" nhờ những đóng góp cho mạng neuron nhân tạo và được trao giải Nobel Vật lý năm ngoái.');
        await page.locator("//button[@id='add-note']").click();
        await page.waitForTimeout(5000);

    });
    await test.step("Search Note", async () => {
        await page.locator("//input[@id='search']").fill('Vì sao đêm nay Mặt Trăng chuyển màu đỏ');
        await page.waitForTimeout(5000);
    })


});