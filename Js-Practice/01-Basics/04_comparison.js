// console.log(2 > 1);
// console.log(2 >= 1);
// console.log(2 < 1);
// console.log(2 == 1);
// console.log(2 != 1);

console.log("2" > 1);//true
console.log("02" > 1);//true

console.log(null > 0);//false
console.log(null == 0);//false
console.log(null >=0);//true

//these operations do not give the desired results
//that's why we use typescript with restricted datatype usage
//in JS >= and == and === check are different when it comes to comparison between different datatypes
//strict check => '==='  (Also checks the datatypes)
console.log("2" === 2); //false

//above comparisons should be avoided to maintain clean coding

