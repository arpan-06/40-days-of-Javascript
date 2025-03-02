// task 1
let number=10;
if(number %2===0)
    console.log(number,"even number")
else
console.log(number, "odd number")
// task 2

let age=10;
if(age>=18)
    console.log("Allowd for driving license")
else
console.log("not Allowd for driving license")
// task 3

let monthly_salary= 12300;
let annual_salary=monthly_salary*12;
let bonus=(annual_salary*20)/100;
let ctc= annual_salary+bonus;
console.log(ctc);
// task 4
const clr="RED"
if(clr==="RED")
    console.log("STOP");
else
console.log("GO");


// task 5
let units=6;
let monthly_unit_avsorve=units*30;
let monthly_unit_charge= monthly_unit_avsorve*150;
let annual_unit_charge=monthly_unit_charge*12;
let discount= (annual_unit_charge*20)/100;
let final= annual_unit_charge-discount;
console.log(final);

// task 6
const year=2025;
year%4===0?console.log("leap year"):console.log("not leap year");

// task 7
let a=20,b=90,c=50;
if(a>b && a>c)
    console.log(a);
else if(b>a && b>c)
     console.log(b);
else
   console.log(c) ;

// task 8
const count = 5;
const double = count << 1;
console.log(double);
const double1 = count * (2 ^ 0); // another tricky way
console.log(double1);