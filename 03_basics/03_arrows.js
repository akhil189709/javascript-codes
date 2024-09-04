const user = {
        username: "akhil kumar",
        age : 23,
        welcomeMessage:  function(){
            // console.log(`${this.username}, welcome to the website`);
            // console.log(this);
            
        },
        price : 999
    }
    user.welcomeMessage()
    user.username = "kut-kut"
    user.welcomeMessage()
    
    // console.log(this);
    
    // function chai(){
    //     console.log(this);
        
    // }
    // chai() 
     const func = () => {
        let username = "akhil kumar"
        console.log(this.username);
        
    }
    func()

    // const addtwo = (num1, num2) => {   this is the explicit return here we have to write the return keyword 


    //     return num1+num2
    // }
    // console.log(addtwo(11,10))

    const addtwo = (num1, num2) => (num1+ num2);/// this is the implicit return here we donot have to write the return keyword and only parenthesis is allowed here
    
    const objF = (num1,num2)=> ({username:"akhil kumar"}) /// here the curly braces is under the parenthesis that's why this is happing
        
    console.log(addtwo(11,10))


    