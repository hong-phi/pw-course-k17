const str = "Playwright";
//2.1 in lan luot cac ky tu trong mang str
for (let name of str) {
    // console.log(name);
}
//2.2 tao mang dao nguoc tu str
const strnguoc = [];
for (let name of str) {
    strnguoc.unshift(name);
}
//console.log(strnguoc);

//2.3
const arr = [1, 2, 3, 4, 3, 55, 23];

// let firstIndex = arr.indexOf(3);
// let lastIndex = arr.lastIndexOf(3);
// console.log(`Vi tri dau tien cua so 3 la index ${firstIndex}`);
// console.log(`Vi tri cuoi cung cua so 3 la index ${lastIndex}`);
for (const [index, num] of arr.entries()) {
    if (num === 3) {
        console.log(`Phan tu cua 3 la  ${index}`)
    }
}
//2.4
const dupArr = [1, 2, 3, 1, 2, 4, 5];
// for(const num1 of dupArr){
//     for(const num2 of dupArr){
//         if(num1 != num2){
//             console.log(num1);
//             continue;
//         };
//     }
// }
const numOnlyOne = dupArr.filter(item => {
    return dupArr.indexOf(item) === dupArr.lastIndexOf(item);
});
console.log(numOnlyOne);

