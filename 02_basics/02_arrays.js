 const marvel_hereos = ["thor","ironman","spiderman"]
 const dc_hereos = ["superman","batman","wonder-women"]

 marvel_hereos.push(dc_hereos)/// here the arrays is treated as the data in the array i.e the new array will be the new element
 console.log(marvel_hereos);
 console.log(marvel_hereos[3][2]);

const all_heroes = marvel_hereos.concat(dc_hereos)/// concat method returns the new array thats why we are making the new array
console.log(all_heroes);

//SPREAD OPERATOR

const all_new_heroes = [...marvel_hereos,...dc_hereos]/// this is the short-hand property to merge two arrays
console.log(all_new_heroes);

const anotherArr = [1,2,3,[12,343],1,22,[222,1,[232,222,222,323,[23232,3232,3232]]]]
const real_arr = anotherArr.flat(Infinity)/// this converts the all the internal arrays into the single array upto any depth
console.log(real_arr);


console.log(Array.isArray("akhil kumar"));// rerurs the boolean value
console.log(Array.from("akhil kumar"));// converts the string to the array

console.log(Array.from({name:"akhil"}));///****IMP:: returns the empty array:  here we have to tell whether we want to make the array of keys or values

let score1 = 100
let score2 = 200
let score3 = 300
console.log(Array.of(score1, score2, score3));/// converts the elements into the array:

 

 