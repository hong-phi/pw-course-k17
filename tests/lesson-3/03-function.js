// function multiply
function multiply(a,b){
    return a*b;
}
const result1 = multiply(3,5);
//console.log(`the result1 is: ${result1}`);
// find Min
function findMind(a,b,c){
    if(a<=b&&a<=c){
       return a;
    };
     if(b<=a&&b<=c){
        return b;
    };
     if(c<=a&&c<=b){
        return c;
    };
}
const Min1 = findMind(2,1,3);
//console.log(`Min is ${Min1}`);
const Min2 = findMind(4,8,5);
//console.log(`Min is ${Min2}`);
//get top Student
let student= [
    {name: 'Anh', Score: 10},
    {name: 'Phi', Score: 9},
    {name: 'Trung', Score: 8},
    {name: 'Quy', Score: 6},
    {name: 'Long', Score: 5}];
function getTopStudents(students,threshold){
    for(i=0;i<students.length;i++)
    {
        if(students[i].Score >= threshold ){
            //return students[i];
            console.log(students[i]);
        }
    }
}
const listStudent = getTopStudents(student,8);
//console.log(`Danh Sach Hoc Sinh Gioi ${listStudent}`);

// tính lãi hằng năm
function calculateInterest(principal,rate,years){
    total = principal+principal*rate*years/100;
    return total;
}
const Interest = calculateInterest(1000000,6,8);
console.log(`Tien lai la ${Interest}`);
