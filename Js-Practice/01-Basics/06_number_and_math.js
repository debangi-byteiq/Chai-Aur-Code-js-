const score = 400
console.log(score);

const balance = new Number(100)
console.log(balance);

console.log(balance.toString().length); //3 
// balance.toString() typeOf is string

console.log(balance.toFixed(2)); //100.00

const otherNumber = 23.8966

console.log(otherNumber.toPrecision(3)); //use carefully, depends on number of digits before decimal then rounds off the number

const hundreds = 10000000
console.log(hundreds.toLocaleString('en-IN'))

// ****************** MATHS ****************************
console.log(Math); // Object [Math] {}
console.log(Math.abs(-4)) //Negative value convert to positive
console.log(Math.round(4.345));
console.log(Math.ceil(4.3))//highest value
console.log(Math.floor(5.7))//tales the lowest value
console.log(Math.pow(2, 3));
console.log(Math.min(4, 3, 6, 8));
console.log(Math.max(3, 54, 6, 8));

console.log(Math.random()); //random values between 0 and 1
console.log((Math.random()*10) + 1);
console.log(Math.floor(Math.random()*10) + 1);

const min = 10
const max = 20

console.log(Math.floor((Math.random() * (max-min + 1) + min)))





