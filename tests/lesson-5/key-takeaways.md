#lesson 5
## DOM Structure (Document Object Mode)
- Đây là cấu trúc của một trang web HTML gồm nhiều phần như html, header,body và những thành phần trong body
- Có thể hiểu DOM chính là một dạng cây cấu trúc dữ liệu, dùng để truy xuất HTML và XML
- Khi vẽ một cây DOM thì cần vẽ từ trên xuống dưới và từ trái qua phải
## Lambda Function (Arrow Function)
# Cú Pháp
- (paramenter) => {code here}
## Ananoymous Fuction ( hàm không tên)
- Ít khi xài khi viết code, thường được sử dụng một lần và không tái sử dụng
# Cú pháp
- Function (paramenters){code here} 
- Khác với một function bình thường sẽ là Function name (paramenters) {code here}
## Selector ( quan trọng)
# Các kiểu selector
- Xpath selector
- Css selector
- Playwrigth selector
# Xpath selector
- có hai loại là tuyệt đối và tương đối
- Tuyệt đối sẽ có cú pháp là : /html/body/tên thẻ/....
- Điểm bất lợi là cú pháp dài, khó nhớ, khó tìm kiếm trong cây DOM
- Tương Đối sẽ có cú pháp là : //tên thẻ[@thuộc tính = "giá trị thuộc tính"]
- Lưu ý: đối với lấy một text của thẻ sẽ là : //tên thẻ[text()="giá trị text"]
# Playwright Basic
## Điều kiện tiên quyết
### Đặt tên file phải có .spec.js (name.spec.js)
### Phải import : import { test } from '@playwright/test'; vào file
## Cú pháp cơ bản
test('<tên test>', async ({ page }) => {
    await test.step('Tên step', async () => {
              await page.action()
   });
});
# Với action có thể là goto, locator,check 
# Locator action có thể kèm theo các phương thức như check(), click(),.... Tham khảo thêm trong slide