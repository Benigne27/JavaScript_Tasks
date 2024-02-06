const items = [
    {name: 'Bike', price:100},
    {name: 'TV', price:200},
    {name: 'Album', price:10},
    {name: 'Book', price:5},
    {name: 'Phone', price:500},
    {name: 'Computer', price:1000},
];
// 1. Filter and show the product that will be bought when you don't have much money (Cheap one)

const cheapProd= items.filter((prod)=>{
    return prod.price<10
})
console.log(cheapProd)

// 2. Filter and show the product that will be expensive in the array

const expProd= items.filter((prod)=>{
    return prod.price>500
})

console.log(expProd)

// 3. Calculate the full price of all products combined

const fullPrice=items.reduce((sum, prod)=>{
    return sum+prod.price

},0) //where 0 is the initial value of the sum

console.log(fullPrice)
// 4. Calculate the full price of all products combined and remove products that are under $10

const item=items.filter((prod)=>{
    return prod.price>=10
})

const fullprice2=item.reduce((sum,prod)=>{
    return sum+prod.price
}, 0)
console.log(fullprice2)

// 5. Filter and show the product that will be start with letter b at first position
const bStarter=items.filter((prod)=>{
    return prod.name.toLowerCase().startsWith('b')
})

console.log(bStarter)
