/*
FILTER:
- syntax: array.filter(function parameter)
- when we want to use a condition, then we can use filter function
- it returns the data that meets specific condition
*/

console.clear();

var numbers = [8, 1, 4, 12, 66]

//store the numbers that is only greater than 10

const filteredArray = numbers.filter(
function (eachNumber){
  return eachNumber > 10
}
)
console.log(filteredArray); //[12, 66]

//Using Arrow Function
const newArray = numbers.filter(eachNumber => eachNumber > 10);
console.log(newArray); //[12, 66]

//With forEach
const newArray1 = [];
numbers.forEach(
    eachNumber => eachNumber > 10 ? newArray1.push(eachNumber) : newArray1.push()
)
console.log(newArray1); //[12, 66]

