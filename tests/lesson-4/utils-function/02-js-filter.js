const scores = [85, 90, 78];
const ages = [18, 21, 16, 25];
const words = ["apple", "banana", "cherry", "date"];
//2.1
let score = scores.filter(function(num){ return num > 80})
console.log(score);
//2.2
let age = ages.filter(function(ag){return ag >= 18});
console.log(age);
//2.3
let word = words.filter(function(w){return w.length>5});
console.log(word);