// task 1
// *
// * *
// * * *
// * * * *
// * * * * *

for (let i=1;i<=5;i++)
{
   let peramid="";
    for(let j=1;j<=i;j++)
    {
        peramid=peramid+"*";
    }

    console.log(peramid);
}

// task-2
let n=3;
let multiply=1;
for (let i=1;i<=10;i++)
{
    multiply=n*i;
    console.log(`${n}*${i}=${multiply}`);
}

// task-3
let sum=0;
for(let i=1;i<=500;i++)
{
    if(i%2===1)
    {
        sum=sum+i;
    }
}
console.log(sum)

// task-4
for(let i=1;i<=20;i++)
{
    if(i%3===0)
    {
        continue;
    }
    console.log(i);
}

// task-5
let num = 6789;
let reverse = 0;
while(num > 0) {
    let digit = num % 10; // got the last digit 9.
    reverse = reverse * 10 + digit; // add 9 to the reverse
    num = Math.floor(num / 10); // Math.floor to get digits without decimal digit(678).
}
console.log(reverse); 

// task-6
// Task 6. Write your understanding on the differences between for, while, and do-while loop. Create their flow charts.

/** for loop : When we know that how many times a block of code will looping, in this condition we will use "for loop".
 === for loop Flow Chart: 
  Start > Initialize variable > check condition > if False(Terminate) > if True(Execute the output) > update the value;
    then again, check condition > true(execute the output) > update the value..... continue the loop until FALSE(condition)
 */

/** while loop : When we don't know that, how many time the loop will be repeating, in this condition we will use "while loop".
 === while loop Flow Chart :
  Start > Initialize variable > check condition > if False(Terminate) > if True(Execute the output) > update the value(if needed);
  then again, check condition > Execute the output > update value.... continue the process
 */

/** do while loop : If we need to execute the output at-least once(before conditioning), we will use "do while loop".
 === do while Flow Chart : 
  Start > Initialize variable > execute the output > Update the variable > check condition > if False(Terminate) > if True(execute output).
   then again, update the value > check condition > execute output > continue the process
*/