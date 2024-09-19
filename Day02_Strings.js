/*
Strings: 
'' single quote
"" doublt quote
`` backtick (in ES6)
*/

console.clear();

let fName = 'Dana'
console.log(fName);

let lName = 'Krayem'
console.log(lName);

//Way1: My name is Dana (variable)
let sentence = 'My name is ' + fName;
console.log(sentence);

//Way2: My name is 'Dana'
//Use single quote '' inside double quote ""
let sentence1 = "My name is 'Dana'"
console.log(sentence1);

//Way3: My name is 'Dana'
let sentence3 = 'My name is \'Dana\''
console.log(sentence3);

//Way4: using Backtick
let firstName = 'Sam'
let lastName = 'Walton'
let age = 40
let location = 'Dallas'
//Print on the screen: First Name: Sam, Last Name: Walton, Age: 40, Location: Dallas

let info = `First Name: ${firstName}, Last Name: ${lastName}, Age: ${age}, Location: ${location}`
console.log(info);