//Immediately Invoked Function Expression (IIFE)
//To restrict global scope variable pollution we can immediately invoke th efunction after declaration

(function chai(){
    //named IIFE
    console.log(`DB CONNECTED`);
})();  //semicolon used to break the execution of th eimmediately invoked function

( () => {
    //Unnamed IIFE
    console.log(`first`)
}) ();

((name) => {
    console.log("hola")
})

//*********************************Javascript Execution Context*********************************************


let val1 = 10
let val2 = 30
function addNums(num1, num2){
    let total =num1+num2
    return total
}

result1 = addNums(val1, val2)
result2 = addNums(2, 3)

//Global execution context 
//Function exceution context
//Eval execution context

//Memory creation phase: memory allocated for the valriables declared
//execution phase: operations executed

//Step 1: Global Execution --> this
//Step 2: Memory Phase --> val1, val2 -> undefined  
//                         function definitions(addNum)
//                         result1, result2 -> undefined
//Step 3: Execution Phase --> val1-> 10, val2 -> 30
//                            addNum -->  A new context is created everytime the function is called(new variable environment + new execution thread)
//                                                                  |
                                                            // again memory phase and execution phase for new variables and operations is created   
                                                            //memory phase: num1, num2 -> undefined, total -> undefined
                                                            //execution phase: val1, val2 -> 10, 30, total -> 40 
                                                                        // |
                                                                        // after execution completed the execution environment is deleted from the  memory
// The complete execution occurs in a stack based memory section in push and pop manner (LIFO manner)
//Mostly can be seen in nested functions or invoking multiple finction sone after othr in a same file