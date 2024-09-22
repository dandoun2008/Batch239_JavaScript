console.clear();
const s1 = 5;

// Type of s1 = number, type of "5" = string
// == compares values only
// === compares values and data types

console.log(s1 == "5"); // true
console.log(s1 == 5); // true
console.log(s1 === "5"); // false
console.log(s1 !== 5); // false
console.log(s1 != "5"); // false
console.log(s1 !== "5"); // true

console.log(s1 > 5); // false
console.log(s1 > "4"); // true
console.log(s1 >= 5); // true
console.log(s1 > "6"); // false

let s2 = true;
let s3 = true;

console.log(s2 && true); // true
console.log(s2 && s3); // true
console.log(s2 && s3 && false); //false

s3 = false;
console.log(s2 || s3 || false); // true

s3 = null;
console.log(s2 && s3); // null
console.log(s2 || s3); // true

console.log(!s2); // false
console.log(s3); // null
console.log(!s3); // true