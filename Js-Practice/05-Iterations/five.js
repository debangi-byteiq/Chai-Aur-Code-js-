// const coding = ['js', 'ruby', 'python', 'cpp']

//forEach()
//callback function usage
// coding.forEach(function (item){
//     console.log(item);
// })

// coding.forEach((item) => console.log(item)) //using arrow function

// function printMe(item){
//     console.log(item)
// } 

// coding.forEach(printMe)//just give reference of the function rather than calling it inside th eforEach fuction as argument

// coding.forEach((item, index, arr)=>{
//     console.log(item, index, arr);
// })

const myCoding = [
    {
        languageName: "java",
        languageFileName : "Java"
    },
    {
        languageName: "java",
        languageFileName : "Java"
    },
    {
        languageName: "java",
        languageFileName : "Java"
    },
    {
        languageName: "java",
        languageFileName : "Java"
    }
]

myCoding.forEach((item) => {
    console.log(item.languageName);
    console.log(item.languageFileName);
})
