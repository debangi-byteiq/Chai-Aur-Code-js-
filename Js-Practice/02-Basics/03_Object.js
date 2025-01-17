//singleton : when an object made from a constructor
// object.create


//object literals
const mySym = Symbol("key1")//declare a symbol

const JsUser = {
    name: "Manish",
    age: "32",
    [mySyn]: "key1",//use a symbol with []
    location: "Bhubaneswar",
    email: "hola@google.com",
    isLoggedIn: false,
    "score": 48
}

console.log(JsUser.email)
console.log(JsUser["email"])
console.log(JsUser["score"]);
console.log(JsUser[mySym])//access a symbol

// JsUser.email = "hollo@google.com"
Object.freeze(JsUser)
JsUser.email = "holle@google.com"
console.log(JsUser.email)

JsUser.greeting = function(){
    console.log("Hello JS User", this.age)
}
console.log(JsUser.greeting) //[Function (anonymous)]
console.log(JsUser.greeting())// Returns the function

