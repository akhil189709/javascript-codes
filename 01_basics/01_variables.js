const accountId = 123232
let accountEmail = "akhil@google.com"
var accountCity = "meerut"
accountPassword = "akhil@213"
let accountState

// we donot use var because of block scope and functional scope

/*
var:
1.Function-scoped== This means that if a variable is declared with var inside a function, it is only accessible within that function, but if it's declared outside of any function, it becomes globally scoped.
2.Variables declared with var are not block-scoped, meaning that if you declare a var inside a block (e.g., inside a loop or an if statement), it is still accessible outside that block.

let:
1. Block-scoped==This means that a variable declared with let is only accessible within the block in which it was declared. This is a more restricted scope compared to var, which can help prevent accidental usage of variables outside their intended scope.

*/


// accountId = 43323
accountEmail = "akhil@gmail.com"
accountCity = "khatuli"
accountPassword = "akhil212"

console.log(accountId);
console.log(accountEmail);
console.log(accountCity);
console.log(accountPassword);
console.log(accountState);


console.table([accountCity,accountEmail,accountPassword,accountId,accountState])