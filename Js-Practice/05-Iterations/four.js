const myObject = {
    js: 'Javascript',
    cpp: 'C ++',
    rb: "ruby",
    swift: "swift by apple"
}

for (const key in myObject) {
    console.log(myObject[key]);
}
const programming = ['js', 'rb', 'py', 'java', 'cpp']

for (const key in programming) {
    console.log(programming[key]);  //arrays have keys and those are the indexes of the elements
}

//In maps we cannot use forin loop

// const map = new Map()
// map.set('IN', "India")
// map.set('USA', "United states of america")
// map.set("FR", "France")

// for (const key in map) {
//     console.log(key)
// }// Map is not Iteratable

// Object: forin
// Array: forof(can also use other type of loops)

