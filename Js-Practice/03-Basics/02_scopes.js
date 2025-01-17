
var c = 300 
let a = 300 //can be changed anywhere  //global scope
//definition of global scope in browser console and in node are different //will learn later

if (true){//block scope
    let a = 10
    const b = 20
    var c = 30  
    console.log("Inside if", a)  
}

// console.log(a); //not defined outside scope of if
// console.log(b); //not defined as outside scope of if
console.log(c); //can be accessible

console.log(a, "outside if") //after declaring let a outside if



function one(){
    const user = "hermoine"

    function two(){
        const website = "youtube"
        console.log(user)
 
     }
    //   console.log(website);  //access cannot be done  //error found so next lines could not be executed
      
      two()
}

one()


//closure : in case of nested functions, child func can access variables of parent but viveversa is not allowed

if (true){
    const user = "hitesh"
    if (user ==="hitesh"){
        const website = " youtube"
        console.log(user + website);
    }
    // console.log(website); //error
}

// console.log(user);//error

//********************************** interesting **************************************************


function addone(num){
    return num + 1
}

addone(5)
//in above case accessing the function can be done before declaration

const addTwo = function(num){
    return num + 2
}

addTwo(5) // here before declaring the function we cannot acces the function