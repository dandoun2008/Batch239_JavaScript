/*
String Manipulations:

Ask user to enter a name: and print "Name"
Make sure only the initial character is in uppercase and the rest is in lowercase
Eg:
var name = dana; => Dana
var name = dAna: => Dana
var name = DANA => Dana
*/

console.clear();


let name = prompt("Enter your name");

//name.slice(0,1).toUpperCase() => getting the initial character and converting it to upperCase
//name.slice(1).toLowerCase() => getting the remaining chararcters and converting them to lowercase
var properName = name.slice(0,1).toUpperCase() + name.slice(1).toLowerCase();
console.log(properName);

/*
String Manipulations:
*/

console.clear();

let str1 = 'I love javascript';

//length
let length = str1.length;
console.log(length);

//indexOf
//find index of "love"
let indexOfLove = str1.indexOf('love');
console.log(indexOfLove);

//slice(start, end(optional))
//substring(start, end(optional))
//start is inclusive, end is exclusive
//Note: if there is no end index, then end index will be the last index
//Note: slice(-5) => it returns the LAST 5 characters
//Note: substring(-5) => it returns all characters
//Note: slice(5,1) => it returns empty string
//Note: substring(5,1) = substring(1,5)
console.log(str1.slice(3)); //"ove javascript"
console.log(str1.slice(-3)); //"ipt"
console.log(str1.slice(5,1)); //""

//substring
console.log(str1.substring(3)); //"ove javascript"
console.log(str1.substring(-3));
console.log(str1.sunstring(5,1)); //" lov"