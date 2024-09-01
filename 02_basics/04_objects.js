const obj = new Object()  /// this is the singleton object
const tinderUser = {} ////          this is non-singleton object
// console.log(obj);
// console.log(tinderUser);

tinderUser.name = "akhil kumar"
tinderUser.age = 23
tinderUser.id = "123sds"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const realUser = {
    email : "akhil@google.com",
    fullName :{ ////             this is the nested objects 
        userFullName : {
            firstName: "akhil",
            lastName: "kumar"
        }    
    }
}
// console.log(realUser.fullName.userFullName.firstName);

const obj1 = {1:"a", 2: "b"}
const obj2 = {3:"c", 4: "d"}

const obj3 = {...obj1,...obj2} /// to merge two different objects
// console.log(obj3);

const obj4 = Object.assign({},obj1,obj2)  /// this is same as above
// console.log(obj4);

const arr = [
    {
        email: "akhil@google.com",
        name: "akhil-kumar"
    },
    {
        email: "akhil@google.com",
        name: "akhil-kumar"
    },
    {
        email: "akhil@google.com",
        name: "akhil-kumar"
    }
]
// console.log(arr[1].email);

// console.log(tinderUser);
// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty('age')); /// gives you the boolean value, this gives whether the object has that property or not.

const course = {
    courseName : "js-in-hindi",
    price : 999,
    courseInstructor : "hitesh-chaudhary"
}

const{courseInstructor: instrutor} = course //// this is used to extract the value of the object.

console.log(instrutor);

// {
//     "name" : "akhil_kumar",/// this is the json, in json keys and the values are strings
//     "age" : "23",
//     "email" : "akhil@google.com"
// }




