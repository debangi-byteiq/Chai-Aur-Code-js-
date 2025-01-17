function sayMyName (){
    console.log("Hii")
    console.log("Hello")
}

sayMyName; //Reference
sayMyName(); //Execution

// function addTwoNumbers(num1, num2){//num1, and num2 are parameters
//     console.log(num1 + num2);
// }


function addTwoNumbers(num1, num2){//num1, and num2 are parameters
   
    let result = num1+ num2;
    return result
    // console.log("Hitesh") //any code within the scope of a function will not be executed 
}


addTwoNumbers() //calling a function without arguments then it returns Nan
addTwoNumbers(2, 3);//5   //2 and 3 are arguments
addTwoNumbers(3, null)

const result = addTwoNumbers(4, 5)

console.log("Result" , result) //undefined when only we console the num1 = num2 but returns the value when it is declared and stores in a variable and is returned in the function

function loginUserMessage(username){
    if (username === undefined){ //if(!username)
        console.log("Please ener a username")
        return 
    }
    return `${username} just logged in` //will return but not print the values
}

loginUserMessage("Hitesh")

function calculateCartPrice(val1, val2, ...num1){ //rest operator in this case  //2 goes to val1, 200 to val2, rst array to num1
    return num1;
}

console.log(calculateCartPrice(2, 200, 400, 500))  //can take any number of arguments


const user = {
    username: "hermie",
    price: 199
}

function handleObject(anyonject){
    console.log(`Username is ${anyonject.username} and price is ${anyonject.price}`)
}

handleObject(user) //direct object can alo be pass as an argument by directly declaringit inside the function itself

function returnSecondValue(getArray){
    return getArray[2]
}

console.log(returnSecondValue([1, 2, 3, ,4 , 5]))
