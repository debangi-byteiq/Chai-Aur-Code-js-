 const user = {
    username: "hola",
    price: 199,
    welcomeMessage: function(){
        console.log(`${this.username}, welcome to website`);
        // console.log(this)//returns the value inside object itself
    }
 }

 user.welcomeMessage()
 user.username = "sam"
 user.welcomeMessage()
 console.log(this) //empty object as no global context defined

 function chai(){
    let username = "hitesh"
    console.log(this.username) //this.username cannot be used inside an function , canonly be used in ano= object
 }

 chai()

 const chai2 = function(){
    let username = "hitesh"
    console.log(this.username) //undefined
 }

 chai2()

 const chai3 = () =>{
    let username = "hitesh"
    console.log(this);//empty object
 }

 chai3()


 const addTwo = (num1, num2) =>{
    return num1 + num2
 }
//  const addTwo = (num1, num2) => num1 + num2
// const addTwo = (num1, num2) => (num1 + num2)  //implicit return

 console.log(addTwo(3, 5))


 const myArray = [2, 4, 6, 8, 9,3]
// myArray.forEach(() => ())
