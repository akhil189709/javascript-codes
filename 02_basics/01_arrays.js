//Arrays
const arr = [1,2,4,5,6]
console.log(arr);
console.log(typeof arr);
console.log(arr[1]);

const Myarr = ["hulk","iron-man","ant-man"]
const myArr2 = new Array(1,3,4,5,6,7)
console.log(myArr2[0]);

///Arrays Methods

arr.push(99)
arr.push(100)
arr.push(200) // this adds the values in the array at the last index
console.log(arr);

arr.pop()///// this donot require any kind of argument this only remove the last element of the array
console.log(arr);

arr.unshift(9)/// this adds the value at the start of the array at the 0 index and it shifts all values in the array
console.log(arr);

myArr2.shift()/// this doesnot require any arguments and removes the value of the 0th index
console.log(myArr2);

arr.shift()
console.log(arr);

const newArr = myArr2.join()/// this converts the value of the array into the string
console.log(myArr2);
console.log(newArr);
console.log(typeof newArr);


/// SLICE AND SPLICE

console.log("A: ",myArr2);
const newArr2 = myArr2.slice(1,3)/// this method donot includes the element at the second argument and starts from the first argument as the index 
console.log(newArr2);

console.log("B: ",myArr2);
const newArr3 = myArr2.splice(1,3)/// this includes the 1 index and the 3 index and all the values in between them
console.log(newArr3);

console.log("C: ",myArr2);

/// IMPORTANT:  the slice and the splice methods manipulates the original array












