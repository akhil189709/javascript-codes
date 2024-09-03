
let a = 300
if(true){
    const a = 22
    let b = 33
    var c = 44
    console.log(a);/// this a is completely independent to the global scope here both a's are different
    
}
console.log(c); /// here the var datatype is came out of the if block i.e it does not follow the block scope thing and can be accessible to globaly scope that's why we use the let datatype
console.log(a);

///NESTED SCOPES

function one(){
     let username = "akhil kumar"

    function two(){
        
        let website = "youtube"
        console.log(username);
        
    }
    // console.log(website);
    two()
    
}
one()

