const coding = ["js","cpp","python","html","react"]
coding.forEach(function (item){
    console.log(item);
    
})

coding.forEach( (value) =>  {
    console.log(value);
    
})

function printme(item){
    console.log(item);
    
}

coding.forEach(printme)

coding.forEach((item,index,coding)=>{

    console.log(item,index,coding);
})

const mycoding = [
    {
        languageName:"javascript",
        languageFile: "js"
    },
    {
        languageName:"c++",
        languageFile: "cpp"
    },
    {
        languageName:"python",
        languageFile: "py"
    }
]

mycoding.forEach((item) =>{
    // console.log(item.languageFile);
    console.log(item.languageName);
    
})