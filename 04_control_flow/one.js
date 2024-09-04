//if
if(true){
    console.log("akhil kumar");
    
}

const userLoggedIn = true

if(userLoggedIn){
    console.log("the code is running")
}

if(2 == "2"){
    console.log("this code is working");
    
}
if(3 != 2){
    console.log("this code is working");
    
}
const temperature = 40
if(temperature < 40){
    console.log("today is cool not to hot");
}
else{
    console.log("to hot today");
}
const score = 200
if(score >= 200){
    let  power = "fly"/////////////////// we donot use var datatype because var has global scope 
    console.log(`the power is ${power}`);
}
else{
    console.log(`cannot do anything`);
    
}
const balance = 1000
if(balance > 500) console.log("test"),console.log("test 2");
// this is implicit scope


const usersLoggedIn  = true
const debitCard = true

const LoggedInFromGoogle = false
const LoggedInFromEmail = true
if(usersLoggedIn && debitCard){
    console.log("Allow this user to use the website");
    
}
if(LoggedInFromEmail || LoggedInFromEmail){
    console.log("Allow this user again");
    
}
