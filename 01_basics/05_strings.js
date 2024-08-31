const name = "akhil kumar "
let marks = 50
let roll_num = 32
console.log(`the marks of ${name} is ${marks} and his roll_num is ${roll_num}`);

const gameName = new String("akhil kumar dhiman sharma")
console.log(gameName);
console.log(gameName[0]);
console.log(gameName[1]);
console.log(gameName.__proto__);

console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(3));
console.log(gameName.indexOf('l'));

const newString = gameName.substring(0,4)
console.log(newString);

const anotherString = gameName.slice(0,4) /// this can take the negetive values as well 

console.log(anotherString);

const moreString = "    akhil kumar     "
console.log(moreString);
console.log(moreString.trim());/// this will remove the starting and the ending spaces


const url = "https://akhilkumar.com/akhil%20kumar"
console.log(url.replace('%20','-'));

console.log(url.includes('32443'));

console.log(gameName.split(','));







