// #Primitive:
// 7 types : String,Number,Boolean,null,undefined,Symbol,BigInt
// const score = 322
// const scorevalue = 232.3
// const isLoggedIn = false
// const outsideTemp = null
// let emailadd;

const id = Symbol('232')
const anotherId = Symbol('232')

// console.log(id === anotherId);

const bigNumber = 23233232345745n


//javascript is dynamically typed language this means that we donot have to define the datatype of the variable

// reference types(non- primitive):
//Array,objects,functions

const heroes = ["shaktiman", "krish","naagraaj"]///Array

let myObj = {
    name: "akhil kumar",
    age: 23,
}///objects

///functions

const myFunction =  function(){

console.log("akhil kumar");
}
console.log(typeof myFunction);
console.log(typeof heroes);
console.log(typeof id);


