#lesson 3
## Git
### git commit -amend -m "message"
Cau lenh dung de thay doi message cua commmit thuong se thuc hien cung cac buoc sau
- Gõ i -> vào chế độ insert
- Gõ esc để thoát insert
- Gõ “:wq” -> write and quit
### git restore --staged <file>
Cau lenh dung de dua file tu vung staging ve lai vung working directory (revert commit)
### git reset HEAD~1 (undo 1 commit)
Cau lenh dung de dua  mot commit tu vung staging ve lai vung working directory
### git-branch
#### git check-out: thay doi nhanh
vd : khi co 3 branch, neu muon thay doi vung lam viec tu nhanh branch 1 sang branch 3 thi su dung
git check-out branch 3
thuong se di khem voi option -b
### .gitignore
cau lenh dung de bo qua mot file nao ma khong can git theo doi nua
## JS
### Conventions
co cac loai conventions cho bien nhu sau
snake_case: chưa dùng
kebab-case: tên file
camelCase: tên biến
PascalCase: tên class
### su dung `` khi console.log cho mot ket qua se giup de nhin hon
vd console.log(`Toi la ${name}`);
voi ${} la ten bien can truyen vao
### Object
Object la mot loai bien su dung de chua nhieu cap key trong do
cu phap:
let/const <ten_object> = {
<thuoc_tinh>: <gia_tri>,
...
}
Trong đó:
- <thuoc_tinh>: giống quy tắc đặt tên
biến
- <gia tri>: có kiểu giống biến, hoặc
là 1 object khác.
vd
const user = {
    name : "Phi",
    age : 18
    gioi tinh:{
        nam: true,
        nu: false
    }
};
Khi muon lay mot thuoc tinh trong object ta su dung
console.log("name = " + user.name);
console.log("name = " + user[gioitinh][nam]);
## Gan lai gia tri cho bien
user.name = Anh
user[gioitinh][nu] = true
## xoa mot thuoc tinh
deleted user.age
### them mot thuoc tinh
user.color
### Logical operator
&& : cả 2 vế của mệnh đề
đều đúng
|| : một trong 2 vế đúng
! : đảo ngược lại giá trị
của mệnh đề
vd 
a == true
b == true
c == false
if (a&&b){
    run code;
}
=> display runcode
if (a && c){
    run code;
}
=> display nothing
if (a || c){
    run code;
}
=> display runcode
## Array
cu phap let a = ["a",1,true,{name:"user"}]
cach duyet toan bo phan tu trong mang
cu phap
for (i=0; i<a.length; i++){
    logic here
}
## Function
cu phap 
function name (){
    logic here
}
Cach tra ve gia tri cho mang
cu phap
function name (a){
    return a;
}
const b = name(a);