// tinh tong tu 1 den 100
let tong = 0
for(i=1;i<101;i++)
{
    tong += i;
}
console.log(`tong tu 1 den 100 la ${tong}`);

//bang cu chuong tu 2 den 9
for(i=2; i < 10 ; i ++){
    console.log(`bang cu chuong ${i}`);
    for(j=1;j<10;j++){
        let ketqua = i*j;
        console.log(`${i} x ${j} = ${ketqua}`);
    }
}
// in cac so le tu 1 den 99
for(i=1;i<100;i++){
    if(i%2===1){
        console.log(`so le la ${i}`);
    }
}
// tinh tong doanh thu
let DoanhThu = [
    {month: 1, total: 100},
    {month: 2, total: 200},
    {month: 3, total: 50},
    {month: 4, total: 100},
    {month: 5, total: 300},
    {month: 6, total: 400},
    {month: 7, total: 500},
    {month: 8, total: 800},
    {month: 9, total: 1000},
    {month: 10, total: 300},
    {month: 11, total: 200},
    {month: 12, total: 500}
]
let TongDoanhThu = 0
for(i=0;i<DoanhThu.length;i++){
    TongDoanhThu += DoanhThu[i].total;
};
console.log(`Tong Doanh Thu Nam: ${TongDoanhThu}`);