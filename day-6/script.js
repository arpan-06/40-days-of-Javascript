// task-1

const fun=(n)=>((n * 9.0 / 5.0) + 32.0);
console.log(fun(20));

// task-2
const findMax=(num1,num2)=>{
    if(num1===num2) return "not possible";
   else if(num1>num2)
    return num1;
   else
   return num2;

}

const ans=findMax(5,9)
console.log(ans);
console.log(typeof ans)

// task -3
let palindrom=(str)=>{
   let rev="";
   for(let i=str.length-1;i>=0;i--)
   {
    rev=rev+str[i];
   }
   if(rev===str) return true;
   else return false;
}

console.log(palindrom("madm"));

// task-4
let fact=(n)=>{
 if(n===0 || n===1)
    return 1;

 let res=1;
 while(n>=2)
 {
    res=n*res;
    n--;
 }
  return res;
}

const final=fact(0);
console.log(final);

// task=5
const countVowel= (str)=>{
    let count =0;
   for(let i=0;i<str.length;i++)
   {
        if(str[i]==="A"||str[i]==="E"||str[i]==="I"||str[i]==="O"||str[i]==="U"){
            count++;
        }
    
        // else return 0;
   }
   if(count===0) return 0;
   else return count;
}

console.log(countVowel("SHM"));// ans=2;

// task-6

const funUpperCase=(s)=>{
    let upperWord =true;
    let res=" ";
   for(char of s)
   {
      if(upperWord && char!=" ")
      {
        res=res+char.toUpperCase();
        upperWord=false;
      }
      else if(char===" ")
      {
         upperWord=true;
         res=res+" ";
      }
      else{
        res=res+char;
      }

   }

   return res;

}

console.log(funUpperCase("Hello  World"));

// task -7
const hello=((str)=>{
   console.log("Hello +", str);
})("javascript")

// task -8
const func= (name, a)=>{
    console.log(name);
    a();
}

func("hello",()=>{
    console.log("greetings")
})