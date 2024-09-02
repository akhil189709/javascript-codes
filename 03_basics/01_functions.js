function sayMyName(){
    console.log("a");
    console.log("k");
    console.log("h");
    console.log("i");
    console.log("l");
    
}
sayMyName()

//add two numbers
function addTwo(number1, number2){

    return number1+ number2
}
addTwo(55,55)
const result = addTwo(11,11)
console.log( "result: ", result);


function loginUserName(username){

    if(username === undefined){
        console.log("please enter the username");
        return
    }
    
        return `${username} just logged in`
    
}
console.log(loginUserName());


function calculateCartPrice(...num1){/// this is the rest operator
    return num1
}
console.log(calculateCartPrice(12,332,4435,4533))


///passing the object in the functions -->|

const user =  {
    username:"akhil kumar",
    price : 999,
    isloogedIn : true
}
function handleObject(anyobject){

    console.log(`username is ${anyobject.username} and the price is ${anyobject.price}`);
}
handleObject(user)

// passing the arrays in the functions -->|

const myArr = [100,300,4000,3433]

function handleArr(getArr){
    
    return getArr[2]
}
console.log(handleArr(myArr))

