// task-1

let day = "Monday";

switch (day) {
   case "monday":
       console.log("It's the start of the week.");
       break;
   default:
       console.log("It's a normal day.");
} //"Its a normal days" will be print.

// task -2

const amount=300;
if(amount%100===0)
    console.log("Withdrawal successful");
else
console.log("Invalid amount");

// task-3
let a=10,b=20;
let cal=a-b;
switch(cal)
{
    case a+b:
        console.log("Addition",cal);
        break;
    case a-b:
        console.log("Subtraction",cal);
        break;
    case a*b:
        console.log("Multiplication",cal);
        break;
    case a/b:
        console.log("division",cal);
        break;
    default:
        console.log("invalid calculation");
}

// task-4
let age=52;
if(age<18)
    console.log("Children,$3");
else if(age>=18 && age<=60)
   console.log("Adults,$10");
else 
   console.log("senior,$8");  

// task 5
const month = "January";
switch (month) {
  case "March":
  case "April":
    console.log("Their horoscope sign is 'Aries'.");
    break;
  case "May":
  case "June":
    console.log("Their horoscope sign is 'Taurus'.");
    break;
  case "July":
  case "August":
    console.log("Their horoscope sign is 'Gemini'.");
    break;
  case "September":
  case "October":
    console.log("Their horoscope sign is 'Cancer'.");
    break;
  case "November":
  case "December":
    console.log("Their horoscope sign is 'Leo'.");
    break;
  case "January":
  case "February":
    console.log("Their horoscope sign is 'Virgo'.");
    break;
  default:
    console.log("Your input is Wrong!");
}

// task 6
const oneSide = 3;
const twoSides = 6;
const threeSides = 9;

if (oneSide === twoSides && oneSide === threeSides) {
  console.log("All sides equal is called, Equilateral Triangle.");
} else if (
  oneSide === twoSides ||
  oneSide === threeSides ||
  twoSides === threeSides
) {
  console.log("Two sides equal is called, Isosceles Triangle.");
} else {
  console.log("All sides different is called, Scalene Triangle.");
}