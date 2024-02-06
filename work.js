//Get the day of today and display it as a day of the week

const date=new Date();
const today=date.getDay();
const time=date.getTime();
console.log(time)

const day=()=>{
    switch(today){
        case 0:
            console.log("Today is: Sunday")
            break;
        case 1:
            console.log("Today is: Monday")
            break;
        case 2:
            console.log("Today is: Tuesday")
            break;
        case 3:
            console.log("Today is: Wednesday")
            break;
        case 4:
            console.log("Today is: Thursday")
            break;
        case 5:
            console.log("Today is: Friday")
            break;
        case 6:
                console.log("Today is: Saturday")
                break
            default:
                console.log("Not a day!")

    }
}
day();

//Find the largest of three given integer numbers

const theLargest=(a,b,c)=>{
    if(a>b && a>c){
        console.log(a + " is the largest number")
    }
    else if(b>a && b>c){
        console.log(b + " is the largest number")
    }
    else{
        console.log(c + " is the largest number")
    }

}

// theLargest(10,7,7)

const isInRange=(x,y,z)=>{
    if((x>=50 && x<=99) || (y>=50 && y<=99) || (z>=50 && z<=99)){
        return true
    }
    else{
        return false
    }


}

// console.log(isInRange(10,50,100))

const colors = ['red', 'green', 'blue', 'yellow', 'orange', 'brown'];
// Using the join() method, create a string that joins 
//all elements of the colors array into a single string separated by commas.
const str=colors.join(',')
console.log(str)

// Apply the splice() method to remove the second and third elements 
//from the colors array and replace them with 'purple' and 'pink'.
const str1=colors.splice(1, 2, "purple", "pink")
console.log(str1)
console.log(colors)


// Utilize the copyWithin() method to copy the elements from index 1 to index 3 
//within the colors array to index 0.
const str2=colors.copyWithin(0,1,3)
console.log(str2)

// Finally, transform all elements of the colors array to uppercase
// using the toUpperCase() method.
const str3=colors.toString().toUpperCase()
console.log(str3)

// Apply the find() method to find the first element in the colors array
// that starts with the letter 'b'.

const str4=(strg)=>{
    if(strg.startsWith('b')){
        return strg
    }
}
console.log(colors.find(str4))

// Apply the slice() method to create a new array selectedColors containing
// the elements from index 1 to index 3 (inclusive) from the colors array.

const selectedColors=colors.slice(1,4)
console.log(selectedColors)


