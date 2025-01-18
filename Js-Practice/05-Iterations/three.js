//for of

["", "", ""]
[{}, {}, {}]

//forof

const arr = [1, 2, 3, 4, 5]

for (const ele of arr) {
    console.log(ele);
}

const greetings = "Hello World!"

for (const greet of greetings) {
    console.log(`Each character is ${greet}`)
}

//Maps: A Map Object holds key value pairs and remembers the original insertion order of keys. 
//Any value (both object and primitive values) may be used as either key or value

const map = new Map()
map.set('IN', "India")
map.set('USA', "United states of america")
map.set("FR", "France")

console.log(map)  //Map(3) {
// 'IN' => 'India',
// 'USA' => 'United States Of America',
// 'FR' => 'France'}


for (const element of map) {
    console.log(element) //returns list of key, value
    
}

for (const [key, value] of map) {
    console.log(key, ':', value);   
}

const myObject = {
    'game1': 'NFS',
    'game2': 'Spiderman'
}

for (const [key, value] of myObject){
    console.log(key, value)
}//typeError: myObject is not iteratable

//forof loop is not applicable for objects 
//but we can usefor in here




