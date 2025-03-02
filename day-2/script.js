// Task 1

const name= "Sourav";
const age= 20;
const programming_language= "C++"
const isStudent_status= true;

console.log(name);
console.log(age);
console.log(programming_language);
console.log(isStudent_status);

let a=20;
a=30;//let can be reassign the value 
console.log(a);

const obj={
    name:"sourav",
    age:20,
    language:"english"

}
console.log(obj);
console.log(obj.name)
obj.age=30; 
console.log(obj);

// obj={
//     name:"kalu",
//     age:50
// }
// console.log(obj); //Assignment to constant variable.error 

let obj2={
    name:"sourav sing",
    age:20,
    language:"english"

}

console.log(obj2)

obj2={
    name:"kalu sing",
    age:20,
    language:"english"}

    
console.log(obj2)



const results = [74, 93, 59, 66, 83, 80];
console.log(results);
let newResults = results;

const sum = 100;
newResults.push(sum)
console.log(newResults);

// in above here, we can reassign the constant objects > value. (In Non-Primitive Data Types)
// also can change the inside value.
// but can't redeclared the same variable name

// const arr=[10,20,60,40,80];

// console.log(arr);z

// let store=arr;

// // console.log(store);

// const val=50;

// store.push(val);
// console.log(store)