const car = {
    make:  'Toyota',
    model: 'Corrola',
    year: '2021'
};
console.log(`năm sản xuất ${car.year}`);

let person = {
    name: 'Phi',
    address: {
        street: 'Phan Dang Luu',
        city: 'Ho Chi Minh',
        country: 'Viet Nam'
    }
};
console.log(`Tên Đường của user: ${person['address']['street']}`);

const student ={
    name: 'Phi',
    grade: {
        math: '9',
        english: '8',
    }
};
console.log(`Điểm toán của user là: ${student['grade']['math']}`);

const setting ={
    volume:'50',
    brightness:'100',
};
setting.volume='90';
console.log(`change volume to ${setting.volume}`);

const bike ={
    wheel: '4x'
};
bike.color ='orange';
console.log(bike);

const employee ={
    name:'Phi',
    age: '20'
};
delete employee.age;
console.log(employee); 

const school ={
    classA: ["Giang","Hoa","Hau"],
    classB: ["Nam","Anh","Phi"]
};
console.log(`Danh Sach Hoc Sinh Lop A: ${school.classA}`);