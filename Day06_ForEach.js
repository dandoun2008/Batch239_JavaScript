/*
FOR EACH LOOP:
- syntax: array.forEach (function parameter)
- Normal for loop doesn't take function parameter
- For Each loop: the entire data from the array without using an index (just like map)
- When we need to use index, use regular for loop
*/

console.clear();

const array1 = ['a', 'b', 'c']
const array2 = [1, 2, 3]

//print all items of array1
array1.forEach(
    function(eachItem){
        console.log(eachItem)
    }
)

//print all items of array1 using ARROW FUNCTION
array1.forEach(
    eachItem => console.log(eachItem)
)

//print all items of array2 using ARROW FUNCTION
array2.forEach(eachNumber => console.log(eachNumber))