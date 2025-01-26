const user = {
    username: "hitesh",
    loginCount: 8,
    signedIn: true,
    getUserdetails: ()=>{
        // console.log("Got user details from database")
        // console.log(`Username: ${username}`);//username.defined
        console.log(`Username: ${this.username}`);
        console.log(this); //object user 
    }
}//object->base literal

console.log(user.username);
console.log(user.getUserdetails());
console.log(this)//{} // in browser same this will return window object as it is the global context there

//this : refer to current context




//****************constructor function*********** */
// const PromiseONe = new Promise()
// const date = new Date()
//used to create new instances or contexts from the existing object literals

function User(username, loginCount, isLoggedIn){
    // myusername = username
    this.username = username
    this.loginCount = loginCount
    this.isLoggedIn = isLoggedIn

    this.greetings = ()=>{
        console.log(`Welcome ${this.username}`);
    }
    return this
} 
// ***********cannot declare the above function as arrow function to further create instances

const userOne =  new User("hitesh", 12, true)
// const userTwo = User("hola", 13, false)//rewrites the values
const  userTwo = User("hola", 13, false) //use new keyword to create a new instance
console.log(userOne);
console.log(userOne.constructor); //[Function:User]
console.log(userTwo)//has its own copy of instance

//new keyword:
//creates a new object
//a constructor function is called when something is declared with new keyword
//all the arguments are injected inside the this keyword and are available from the function 


//instanceOf:
function Car(make, model, year){
    this.make = make;
    this.model = model;
    this.year = year;
}
const auto = new Car('Honda', 'Accord', 1998)
console.log(auto instanceof Object)//true :expected



/***************
 Constructors: In JavaScript, constructors are functions that are specifically designed to create objects. They typically use the this keyword within their body to refer to the object being created.
Arrow Functions: Arrow functions have a different internal scoping mechanism for this. The this value within an arrow function is lexically bound, meaning it's inherited from the enclosing scope (where the arrow function is defined), rather than being dynamically bound to the newly created object.*/
/* Avoid using arrow functions as constructors. Use traditional function declarations when you  intend to create objects using the new keyword. */

