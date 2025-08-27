const scores = [85, 90, 78];
const ages = [18, 21, 16, 25];
const words = ["apple", "banana", "cherry", "date"];
//1.1
const score = scores.every((num) => num >70);
//console.log(score);
//1.2
const age = scores.every((a) => a >15);
//console.log(age);
//1.3
const largerThan3 = words.every(word => word.length > 3);
console.log(largerThan3);