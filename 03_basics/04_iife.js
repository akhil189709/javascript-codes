//IMMEDIATELY INVOKED FUNCTIONS EXPRESSIONS

(function chai(){  /// this is the named IIFE
    console.log(`DB connected`);
    
})();/// we have the execution of the function so that next block of code can execute

//iife is used to overcome the pollution from the global scope i.e the variable declare in the global scope cannot pollute the scope of function

(() =>{
    console.log(`DB CONNECTED TWO`);
    
})();
/// passing the parameters in the iife

( (name) =>{
    console.log(`DB CONNECTED TWO ${name}`);
    
})('akhil kumar')