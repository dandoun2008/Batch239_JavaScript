/*Continued Array Methods*/

console.clear();

var ages = [10, 14, 34, 16, 10]
console.log(ages);
console.log(typeof(ages)); //object

//5. indexOf(item): returns the first index of the item
console.log(ages.indexOf(10)); //0

//. indexOf(item, startingIndex): returns the first index of the item starting 
console.log(ages.indexOf(10,1)); //4

//. lastIndexOf(item): returns last index of the item
console.log(ages.lastIndexOf(10)); //4

//NOTE: indexOf(item) returns -1 if there is no matching item in the array
console.log(ages.indexOf(100)); //-1 (becuase there is no 100 in our array)

//6. includes(item): returns true if the item exists in the array, and false if the item DOES NOt exist in the array
console.log(ages.includes(14)); //true

//. includes(item, startingIndex)
console.log(ages.includes(14,3)); //false despite there is 14 in the array because there is not 14 after index 3
console.log(ages.includes('apple')); //false

const isExist = ages.includes(50);
console.log(isExist); //false
