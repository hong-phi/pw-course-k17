const scores = [85, 90, 78];
const numbers = [1, 2, 3];
//4.1
let score = scores.map(so => {
    if (so < 90) {
        return so + so * (10 / 100);
    } else {
        // Nếu không, giữ nguyên giá trị
        return so - so * (5 / 100);
    }
});
console.log(score);
//4.2
let numToString = numbers.map(nu => nu.toString());
console.log(numToString);
//4.3
let numDouble = numbers.map(num => num * 2);
console.log(numDouble);