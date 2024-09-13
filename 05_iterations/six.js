const coding = ["java","ruby","python","cpp","js"]

const values = coding.forEach((items)=>{
    console.log(items);
    return items;
    
})
console.log(values);

const mynums = [1,2,3,4,5,6,7,8,9]
const newNums = mynums.filter((nums)=>{
    return nums>5
})
console.log(newNums);

const newNums2 = []
mynums.forEach((num)=>{
    if (num>4) {
        newNums2.push(num)
    }

})
console.log(newNums2);

const books =[
    {title:'book one',   genre:'fiction',     publish:1981, edition: 2004},
    {title:'book two',   genre:'Non-fiction', publish:1992, edition: 2008},
    {title:'book three', genre:'history',     publish:1999, edition: 2007},
    {title:'book four',  genre:'Non-fiction', publish:1989, edition: 2010},
    {title:'book five',  genre:'science',     publish:2009, edition: 2014},
    {title:'book six',   genre:'fiction',     publish:1987, edition: 2010},
    {title:'book seven', genre:'history',     publish:1986, edition: 1996},
    {title:'book eight', genre:'scicence',    publish:2011, edition: 2016}
]

// const userbooks = books.filter((bks)=> bks.genre==="Non-fiction")
const userbooks2 = books.filter((bks)=> bks.publish > 1990 && bks.genre==="history")
console.log(userbooks2);






