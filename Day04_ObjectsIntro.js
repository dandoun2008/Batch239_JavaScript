/*
OBJECTS:

In JS, the reference types are:
Function
Object
Array

{} is used to create an object
: is used to create key:value pair
, is used to add multiple key:value pairs
*/
console.clear();

var fName = 'Dana'
var lName = 'Krayem'
var age = 18

console.log(`${fName} ${lName} ${age}`)

//Creating person object with 3 data
var person = {
  fName: 'Dana',
  lName: 'Krayem',
  age: 18,
  isEmployed: true
}

//Calling single data from person object
//We can call data using . notation (more common) or [] notation

console.log(person); //getting entire person object

//Calling fName from person using . notation
console.log(person.fName); //"Dana"
//Getting the data type of person.fName
console.log(typeof(person.fName)); //"string"
//Calling lName from person using . notation
console.log(person.lName); //"Krayem"
//Calling age from person using . notation
console.log(person.age); //18
//Calling isEmployed from person using . notation
console.log(person.isEmployed); //true
//Getting the data type of person.isEmployed
console.log(typeof(person.isEmployed)); //"boolean"

//Calling single data from person object using [] notation
console.log(person['fName']); //"Dana"
console.log(typeof(person['fName'])); //"string"

//We can EDIT values using . or [] notation
//changing fName and isEmployed with . notation:
person.fName = 'Sam';
console.log(person.fName); //"Sam"

person.isEmployed = false;
console.log(person.isEmployed); //false

//Changing lName and age with [] notation
console.log(person.lName); //'Krayem'
person['lName'] = 'Blair'
console.log(person.lName);
person['age'] = 29;
console.log(person.age); //29

//Editting fName (editting KEY not VALUE)
//Outcome before edition
console.log(person); // [object Object] { fName: 'Sam', lName: 'Blair', age: 29, isEmployed: false }

var newName = 'fName';
person[newName] = 'Firas'
console.log(person.newName)

//Outcome after editting
console.log(person); // [object Object] { fName: 'Firas', lName: 'Blair', age: 29, isEmployed: false }
