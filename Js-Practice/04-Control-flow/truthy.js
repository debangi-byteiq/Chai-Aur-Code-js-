const userEmail = "h@hitesh.ai"

if (userEmail) {  //we have assumed that the value inside the mail is truthy value
    console.log("Got user email");
} else{
    console.log("DOn't have user email")
}

//falsy values
// false, 0, -0, BigInt (0n), "", null , undefined, NaN

//truthy values
// "0", 'false', true, "null", " ", [], {}, function(){}

// if (userEmail.length === 0){
//     console.log("Array is empty");
// }

const emptyObj = {}

if (Object.keys().length === 0){
    console.log("Object is empty");
}

false == 0 //true
false == "" //true
0 == "" //true

//Nullish Coalescing Operator (??) : null undefined

let val1;
// val1 = 5 ?? 10
// console.log(val1);  //used in case of db response calling
val1 = null ?? 10
console.log(val1)  //5 //safety check to assign value if present else null

// var1 = undefined ?? 15 -> //15
val1 = null ?? 12 ?? 37 //12 
//to handle errors
//different from ternary operator

//Ternary Operator 

// condition ? true : false

const score = 30

score >= 50 ? console.log("Pass") : console.log("Fail")