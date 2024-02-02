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

theLargest(10,7,7)

const isInRange=(x,y,z)=>{
    if((x>=50 && x<=99) || (y>=50 && y<=99) || (z>=50 && z<=99)){
        return true
    }
    else{
        return false
    }

}

isInRange(10,50,100)