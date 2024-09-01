// object literals
// Object.create/// this is through the constructor method

const mySym = Symbol("mykey-1") 
const jsUser = { /// here the keys are treated as the strings
    name : "akhil kumar",
    "full-name" : "akhil kumar dhiman",
    age : 23,
    email : "akhil@gmail.com",
    isLoggedIn : false,
    lastLoginDays : ["Monday","saturday"],
    location: "noida",
    [mySym] : "key-1"//this is the syntax how we can use the symbol in the objects, first we have to declare the symbol first before the object creation
}
console.log(jsUser.email);
console.log(jsUser["email"]);
console.log(jsUser["full-name"]);
console.log(jsUser[mySym]);


/// changes in the objects 
jsUser.email = "akhil@amazon.com"
console.log(jsUser["email"]);

// freezing the object

// Object.freeze(jsUser)//  now the object is freezed and we cannot make the changes after this
jsUser.email = "akhil@flipkart.com"
console.log(jsUser["email"]);
console.log(jsUser);


jsUser.greetings = function(){
    console.log("hello JS user");
}
console.log(jsUser.greetings());

jsUser.greetingsTwo = function(){
    console.log(`hello jsUser ${this["full-name"]}`);
}
console.log(jsUser.greetingsTwo());









