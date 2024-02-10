//To clear from localStorage we use
localStorage.clear();

localStorage.setItem("todo","Learning")
localStorage.setItem("to-do","JavaScript") //If you are using the same key in the LocalStorage, then it 
//will update what was stored with the same key but if you want to keep both values, then the keys have
//to be different.

const valueFrom=localStorage.getItem("todo")
console.log(valueFrom)

//JSON.parse converts a string into an object

const data='{"first":"John", "last":"Doe"}'
console.log(data)
const convertToObj=JSON.parse(data)
console.log(convertToObj)

//JSON.stringfy converts an object into a string

const backToString=JSON.stringify(convertToObj)
console.log(backToString)

//In LocalStorage you always have to store data into the String form

const todoArr=["Cleaning","Cooking","Washing"]
const toString=JSON.stringify(todoArr)

localStorage.clear()


//While using classes and tags while getting them from the document, 
//we have to loop if we want the content to change. 
//Only when you are using Id you don not need to loop.

//EventListeners

const p=document.getElementById("demo")
document.getElementById("btn").addEventListener("mouseover", ()=>{
    p.innerHTML="Good Morning Africa!"
})


const input=document.getElementById("input")
const btn=document.getElementById("button")

let todo=[]

btn.addEventListener("click", ()=>{
    todo.push(input.value)
    console.log(todo)
})