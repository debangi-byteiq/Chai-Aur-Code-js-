//array is an object
//js array is resizable
//js array elements cannot be accessed using arbitary string : not associative
//arrays are zero indexed
//arrays make shallow copies when copied: 
/* shallow copies: shallow copies of an object are those whose properties share the same 
   references(point to the same underlying values) as those of source object */
/*deep copies: deep copies of an object do not share same reference*/
const myArray = [1, 2, 3, 4, 5, 6]
const stringArray = ["hola", "hii", "namaste", "konichiwa"]

const myArr = new Array(1, 2, 3, 4)
console.log(myArr[1])//2

myArr.push(6)
myArr.push(7)
myArr.pop()//removes last element
myArr.unshift(0)//inserts in the start of array
myArr.shift()//removes first element
console.log(myArr);

console.log(myArr.includes(9));
console.log(myArr.indexOf(9));//-1 because 9 does not exist

const newArr = myArr.join()//binds the values and converts nito string datatype
console.log(myArr);
console.log(newArr);

//slice, splice

console.log("A ", myArr);

const myn1 = myArr.slice(1, 3) //includes start index but not last
console.log(myn1);//original array remains same
console.log("B ", myArr);

const myn2 = myArr.splice(1, 3) //the original array also changes  removing the spliced elements 
console.log(myn2);//includes last index element
console.log("B ", myArr)







