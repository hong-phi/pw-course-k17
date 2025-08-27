const numbers = [1, 2, 3];
// 1.1 In lan luot tung phan tu cuar numbers
numbers.forEach((val, index) => {
    console.log(`index ${index} : ${val}`);
});
// 1.2 Tinh tong
let tong = 0;
numbers.forEach((val) => {
    tong += val
});
console.log(tong)
// 1.2 tim gia tri lon nhat;
let max = numbers[0];
numbers.forEach((val) => {
    if (max < val) {
        max = val
    };

});
console.log(`Max is ${max} `);
// 1.2 tim gia tri nho nhat;
let min = numbers[0];
numbers.forEach((val) => {
    if (min > val) {
        min = val
    };
});
console.log(`Min is ${min} `);
//1.3 tao mang moi tu numbers, moi phan tu nhan doi
//let numbers2 = Array.from(numbers,(a)=>a*2);// cach tren google tu do co the suy ra cho for each tuong tu
let numbers2; // tao mang moi
numbers.forEach((val, index, array) => {
    array[index] = val * 2; // nhan doi phan tu trong mang goc
});
numbers2 = numbers; // gang gia tri mang goc bang mang moi
console.log(numbers2);

