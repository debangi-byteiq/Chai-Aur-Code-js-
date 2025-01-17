//singleton

// const tinderUser = new Object()  //singleton
const tinderUser = {} //non-singleton

tinderUser.id = "123abc"
tinderUser.name = "Sunny"
tinderUser.isLoggedIn = false
console.log(tinderUser);

const regularUser = {
    email: "som@google.com",
    fullname: {
        firstname: "Sunny",
        midllename: "Kumar",
        lastname: "Sahu"
    }
}//nested object
//?. - optional chaining


console.log(regularUser.fullname.midllename)


const obj1 = {1: "a", 2: "b",3: "c"} //target
const obj2 = {4: "d", 5: "e"} //source

// const obj3 = {obj1, obj2}
// const obj3 = Object.assign({}, obj1, obj2)//a static method copies enumerable own properties from one or more source object s to a target object
//returns modified target object

const obj3 = {...obj1, ...obj2}

console.log(obj3);

const users = [
    {
        id: 1,
        email: "h@gmail.com"
    },
    {

    }
]

users[1].email
console.log(tinderUser);

console.log(Object.keys(tinderUser));//array of keys returned
console.log(tinderUser.length);//undefined
console.log(Object.entries(tinderUser)) //list of list of key, value

console.log(tinderUser.hasOwnProperty("age"));//false

const course = {
    coursename: "js basics",
    price: "999",
    courseInstructor: "hitesh"
}

// course.courseInstructor

const {courseInstructor: instructor} = course //destructuring of object
console.log(instructor);



 