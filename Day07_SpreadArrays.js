//2. ARRAYS (most common usage with spread operator)
// We can spread out one array into another array
const existingNum = [5, 234, 51, 61]
const newNum = [6, 1, 8]
var allNum = [existingNum, newNum]
console.log(allNum); [[5, 234, 51, 61], [6, 1, 8]]

//Spread operator is used to combine the arrays
//We are getting the new array that has all existing and new number list
allNum = [...existingNum, ...newNum]
console.log(allNum); // [5, 234, 51, 61, 6, 1, 8]

//ORDER MATTERS
allNum = [...newNum,...existingNum]
console.log(allNum); // [6, 1, 8, 5, 234, 51, 61]


//We can insert new items in the array
allNum = [...newNum, ...existingNum, 'apple']
console.log(allNum); // [6, 1, 8, 5, 234, 51, 61, "apple"]
//NOTE: we can insert new data anywhere with spread operator (not necessarily at the end)
allNum = [1000, ...newNum, true, ...existingNum, 'car']
console.log(allNum); // [1000, 6, 1, 8, true, 5, 234, 51, 61, "car"]

//We can do same thing with strings
const languages = ['java', 'javascript', 'python']
const duty = ['develop', 'test', 'deploy']
var skills = [...duty]
console.log(skills); // ["develop", "test", "deploy"] 
skills = [...languages, ...duty]
console.log(skills); // ["java", "javascript", "python", "develop", "test", "deploy"]
skills = ['c#', ...duty, 'clean']
console.log(skills); // ["c#", "develop", "test", "deploy", "clean"]

//We can use spread operator to get the copy of the original array
//getting the copy of languages array WITHOUT spread operator
var copyOfLanguages = languages;
console.log(copyOfLanguages); // ['java', 'javascript', 'python']
//NOTE: in the above code where we made a copy WITHOUT using spread operator, languages and copyOfLanguages are pointing to the same place in the memory ==>
//If I make an update to one of them, the other array will change as well

copyOfLanguages.push('ruby');
console.log(copyOfLanguages); // ["java", "javascript", "python", "ruby"]
console.log(languages); // ["java", "javascript", "python", "ruby"]

//getting the copy of languages array WITH spread operator
var copyWithSpread = [...languages];
console.log(copyWithSpread); // ['java', 'javascript', 'python', 'ruby']
//NOTE: in the above code where we made a copy WITH spread operator ==>
//If I make an update to the copy, the original array will NOT change!!!

copyWithSpread.push('Apex');
console.log(copyWithSpread); // ["java", "javascript", "python", "ruby", "Apex"]
console.log(languages); // ["java", "javascript", "python", "ruby"]
