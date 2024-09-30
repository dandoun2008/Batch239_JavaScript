/*
MAP:
- takes a function as parameter
- returns a new array by using each item from the original array
*/

console.clear();

var numbers = [3, 56, 2, 48, 5]

//1. function to calculate items * 2
function double(x){
    return x*2;
}

const testArray = [5, 6, 7, 8].map(double);
console.log(testArray); [10, 12, 14, 16]

//With map, we get each number from numbers array and use inside the double function. Then the results are put in a new array called newNumbers1 array

const newNumbers1 = numbers.map(double);
console.log(newNumbers1); //[6, 112, 4, 96, 10]

//We can pass a function directly inside the map
const newNumbers2 = numbers.map(
    function double(x){
        return x*10
    }
)
console.log(newNumbers2); [30, 560, 20, 480, 50]

/*Arrow function with map function:
- get each item from numbers array
- multiply by 3
- store in newNumbers3 array
*/
const newNumbers3 = numbers.map(x => x*3);
console.log(newNumbers3); //[9, 168, 6, 144, 15]

//Without map function: we can get the same thing with foreach loop (more work)
const newNumbers4 = []; //created an empty array to store the results

numbers.forEach(
    x => newNumbers4.push(x*3)
)
console.log(newNumbers4); [9, 168, 6, 144, 15]


