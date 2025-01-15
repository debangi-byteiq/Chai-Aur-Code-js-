const registeredId = 2101348040
let email = "debangi123@gmail.com"
var password = "12344"
accountNum = 20857437654
// registeredId = 22  cannot redeclare const values

console.log(accountNum)
console.table(registeredId, email, password)

/* Prefer not to use var because of issues in block scope and functional scope*/

let name;
// returns undefined when a variable is declared and not assigned any value.
