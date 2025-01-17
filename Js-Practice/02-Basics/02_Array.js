const marvel = ['thor', 'ironman', "spiderman"]
const dc = ['superman', 'flash', 'batman']

// marvel.push(dc)
// console.log(marvel);//dc array is pushed as an element [1, 2, []]
// console.log(marvel[3][1]);

const all = marvel.concat(dc) //merges two array and returns a new array
console.log(all);

const all2 = [...marvel, ...dc]//'...' spread operator
console.log(all2)

const anotherarray = [1, 2, 3, [4, 5, 6, [7, 8, 9,[10, 11]]]]
const real_another_array = anotherarray.flat(Infinity)
console.log(real_another_array);

console.log(Array.isArray("Hitesh")) //checks if the parameter passed is an array
console.log(Array.from("Hitesh"));//creates an array from the parameter
console.log(Array.from({name: "hitesh"})) //returns empty array //need to mention make keys as array or value as array

let score1 = 100
let score2 = 200
let score3 =  300

console.log(Array.of(score1, score2, score3)); //returns a new array from given set of elements



