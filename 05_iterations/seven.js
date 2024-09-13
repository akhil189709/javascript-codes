const myNums = [1,2,3,4,5,6,7,8,9,10]
const newNums =  myNums
                .map((nums)=> nums*10)
                .map((nums)=> nums+10)
                .filter((nums)=> nums<88)///this is called the chaining of the map and the filter here we can use multiple maps and the filters 
console.log(newNums);