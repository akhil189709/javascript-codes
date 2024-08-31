////DATES

let mydate = new Date()/// creating the instance of the date class
console.log(mydate.toString());
console.log(mydate.toDateString());
console.log(mydate.toLocaleString());
console.log(mydate.toISOString());
console.log(mydate.toTimeString());
console.log(mydate.toJSON());
console.log(typeof mydate);/// object

let myCreatedDate = new Date(2024, 7 , 31 ,21, 2)
let myCreatedDate2 = new Date("08-31-2024")
console.log(myCreatedDate2.toDateString());


console.log(myCreatedDate.toLocaleString());

let timeStamp = Date.now()
console.log(timeStamp);

console.log(myCreatedDate2.getTime());

let newDate = new Date()
console.log(newDate);
console.log(newDate.getDay());
console.log(newDate.getMonth());

console.log(newDate.toLocaleString('default',{  /// this gives full name of the day
        weekday:"long"
}));




