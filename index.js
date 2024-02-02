import { checking } from "./data.js";


function prod(a,b){
    return a*b
}
// console.log(prod(5,6))

// const date= new Date();
//console.log(date.getDate()) //getting the date of today
//console.log(date.getMonth()) //how to get the current month
//console.log(date.getFullYear()) //gettinng the current year

// const res=Math.pow(date,2)
// console.log(res)


//Calculate the factorial of a number
function fact(x){

    let num=1;

    if(x===0){
        console.log ("This number does not have a factorial")
    }
else{
    for(let i=x; i>=1; i--){
        num=num*i;
    }
}
return num;
}
// console.log(fact(5));

//Calculate th sum of two numbers

function sum(a,b){
    return a+b
}
console.log(sum(5,6))

//Find the maximum number in an array

const arr=[4,10,25,2,6,43,72,100]
const maxim=Math.max(...arr)
console.log(maxim)

// const minim=Math.min(...arr)
// console.log(minim)

//Calculate the factorial if the number is even and leave it if it is odd

function factorial(a){
    let num=1;
    if(a%2!==0){
        console.log('This is an odd number, prefer not to calculate the factorial!')
    }

    else{
        for(let i=1; i<=a; i++){
            num=num*i;
        }
    }
    return num
}

console.log(factorial(4))


const theString="wnfgimekmn"
console.log(checking(theString))
