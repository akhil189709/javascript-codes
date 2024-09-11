/// for of loop

let arr = [1,2,3,4,5]
for (const value of arr) {
    // console.log(value);
}
let greetings = "hello akhil kumar!"
for (const greet  of greetings) {
    // console.log(`each character of greetings is ${greet}`);
    
}

//Map
const map = new Map()/// in maps the values will be unique and in the same order as they are given
map.set("In", "India")
map.set("USA", "United states of America")
map.set("Fr", "France")

// console.log(map);

for (const [key,value] of map) { //here we are doing the destructuring of the array
    // console.log(key," -: " ,value);
}

const myObj = {///objects are not iteratable here
    "game1" : "vice-city",
    "game2" : "spiderman"
}
for (const [key,value] of myObj) {
    console.log(key," -: " ,value);
}
