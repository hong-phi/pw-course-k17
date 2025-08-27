const scores = [85, 90, 78];
const ages = [18, 21, 16, 25];
const words = ["apple", "banana", "cherry", "date"];
//3.1
let score = scores.find((sc)=> sc >80);
console.log(score);
//3.2
let age = ages.find((ag)=>ag > 20);
console.log(age);
//3.3
let word = words.find((w)=>w.length>5);
console.log(word);