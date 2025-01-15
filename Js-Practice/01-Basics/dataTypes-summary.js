//On the basis of how the data is stored in the memory or accessed from the memory datatypes are primitive and non primitive

//JS is dynamically types because we dont need to do any type declarations manually
// let num = 2 will automatically take num as a number

//typeof 
//:undefined => "undefined"
//:null => "object"
//:boolean => "boolean"
//: number => "number"
//:string => "string"
//:object(native and does not implement [[Call]]) => "object"
//:object(native or host and doed not implement [[Call]])=> "function
//:object(host and does not implement [[Call]]) => "Implementation-defined except may not be "undefined", "boolean", "number", "string" 

//Primitive : call by value (changes made are in the copies not directly in the var)

//7 types : String, Number, Boolean, null, undefined, Symbol, Bigint


const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id == anotherId); //false

const bigNumber = 25458908765456345676543n  //bigint defined
console.log(typeof bigNumber); // undefined

//Reference (Non primitive)

//Array, Objects, Functions


const students = ['subhasree', 'prity', 'mausumi', 'gaurav']

let myObj = {
    name: 'Debangi',
    age: '6'
}

const myFunction = function(){
    console.log("hola")
}

console.log(typeof myFunction); //function object

// *************************** Memory ********************

//Stack (Primitive): you get a copy of the vallue
// , Heap (Non-Primitive) : you get a reference to the value

let myName = "John Doe"
let copyName = myName
copyName = "John Simons"

console.log(myName);//John Doe even when value is changed the original value remains same, because only the copy value changes
console.log(copyName); //John Simons

let userOne = {
    email: "abc@gmail.com",
    upi: "user@ybl"
}
let userTwo = userOne

// userTwo.email = "def@gmail.com"

console.log(userOne.email);// both the obj values change because they both refer to a same value, rather than taking copy
console.log(userTwo.email);










