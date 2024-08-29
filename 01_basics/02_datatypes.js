// JavaScript has several data types, which can be broadly categorized into two types: primitive and non-primitive (or reference) types.

// 1. Primitive Data Types
// These are the most basic data types in JavaScript. They are immutable, meaning their values cannot be changed.

// Number: Represents both integers and floating-point numbers.
// let age = 25;
// let pi = 3.14;

// String: Represents sequences of characters (text).
// let name = "John Doe";

// Boolean: Represents logical values, either true or false.
// let isActive = true;

// Undefined: A variable that has been declared but not yet assigned a value.
// let x; // x is undefined

// Null: Represents the intentional absence of any object value.
// let y = null;

// Symbol: Represents a unique identifier (introduced in ES6).
// let sym = Symbol('description');

// BigInt: Represents integers with arbitrary precision (introduced in ES2020).
// let bigNumber = BigInt(9007199254740991);

// 2. Non-Primitive (Reference) Data Types:

// These are more complex types and can hold collections of values.

// Object: Represents collections of key-value pairs. Objects can also include functions (methods).
// let person = {
//   name: "Alice",
//   age: 30,
// };


// Array: A special type of object that holds an ordered list of values (elements).
// let numbers = [1, 2, 3, 4, 5];


// Function: A callable object that can be defined with the function keyword or as an arrow function.
// function greet() {
//   console.log("Hello, world!");
// }


// Date: Represents a single moment in time.
// let currentDate = new Date();


// RegExp: Represents regular expressions, which are patterns used to match character combinations in strings.
// let pattern = /abc/;


// 3. Special Types

// NaN: Stands for "Not-a-Number" and is a result of an invalid number operation.
// let result = 0 / 0; // result is NaN

// Type Checking:

// To check the data type of a variable in JavaScript, you can use the typeof operator.
// console.log(typeof 42);          // "number"
// console.log(typeof "Hello");     // "string"
// console.log(typeof true);        // "boolean"
// console.log(typeof undefined);   // "undefined"
// console.log(typeof null);        // "object" (this is a known quirk in JavaScript)
// console.log(typeof Symbol());    // "symbol"
// console.log(typeof {});          // "object"
// console.log(typeof []);          // "object"
// console.log(typeof function(){});// "function"



// These are the basic data types in JavaScript that form the foundation for creating more complex structures and operations.









