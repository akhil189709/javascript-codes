const arr= [1,2,3,4,4]

const mySum = arr.reduce((acc,currval)=>{
    console.log(`acc: ${acc} and the currval is: ${currval}`);
    return acc+currval
},0)

const mySum2 = arr.reduce((acc,currval)=>acc+currval,0)/// this is direct method for the above. both are same
console.log(mySum);
console.log(mySum2);

const shopingKart=[
    {
        itemName: "java course",
        price: 2999
    },
    {
        itemName: "mobile dev course",
        price: 12999
    },
    {
        itemName: "data-science course",
        price: 8999
    },
    {
        itemName: "mern course",
        price: 6999
    }

]
const totalAmount = shopingKart.reduce((acc,items)=>acc+items.price,0)
console.log(totalAmount);


