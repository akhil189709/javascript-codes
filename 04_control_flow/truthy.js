const userEmail = "akhil@gmail"
if(userEmail){
    console.log("have the user email");
}
else{
    console.log("donot have the user email");
}
///falsy value -->
// 1.fasle
// 2.0
// 3. -0
// 4. BigInt 0n
// 5. ""
// 6. null
// 7. undefined
// 8. NaN

//truthy values -->
// 1."0"
// 2.'fasle'
// 3." "
// 4. []
// 5. {}
// 6. function(){}

/// for the empty arrays
const userLogin = []
if(userLogin.length == 0 ){
    console.log("the Arr is empty ");
}

// for the empty objects
const myObj = {}
if(Object.keys(myObj).length == 0){/// this will convert the object into the array
    console.log("the object is empty");
}

///NULL COELESICING OPETARTOR : ?? null, undefined
let val1 
val1 = null ?? 5
val1 = undefined ?? 10 
val1 = null ?? 22 ?? 15 ///here the first value other than the null or undefined will get executed
console.log(val1);

// terniary operator-->
// condition ? true : false\

let IceTeaPrice = 100
IceTeaPrice >=80 ? console.log("more than 80 "): console.log("less than 80");


