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

