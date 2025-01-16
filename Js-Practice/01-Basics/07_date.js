// Dates

let myDate = new Date()
console.log(typeof myDate);
console.log(myDate.toString());
console.log(myDate.toLocaleString());
console.log(myDate.toDateString());
console.log(myDate.toLocaleDateString());
 
let myCreatedDate = new Date(2023, 0, 23); //months start from 0 as it is an array
console.log(myCreatedDate.toString());

let myCreatedDate2 = new Date("2023-01-14")
console.log(myCreatedDate2);

let myCreatedDate3 = new Date("01-14-2023")
console.log(myCreatedDate3);

let myTimeStamp = Date.now()
console.log(myTimeStamp)
console.log(myCreatedDate.getTime());//return sthe stored time in ms since midnight jan 1, 1970 UTC
console.log(Date.now());//gives in milisec

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth());
console.log(newDate.getDay());
    
// `${newDate.getDay()} and the time is ....

newDate.toLocaleString('default', {
    weekday:"narrow",
    localeMatcher:"best fit",
    timeZoneName:"short"
})