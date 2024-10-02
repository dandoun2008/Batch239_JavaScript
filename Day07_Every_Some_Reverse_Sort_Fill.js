console.clear();

//**** every(): this function returns boolean
//It returns true if condition is true for ALL items, otherwise returns false

var items = [5, 3, 7, 3, -6, 11, true, 'apple']
var nums = [5, 3, 7, 3, -6, 11]

//check if ALL numbers are less than 12
var isTrue = nums.every(eachNum => eachNum < 12);
console.log(isTrue); //true

//check if ALL numbers are less than 10
isTrue = nums.every(eachNum => eachNum <10);
console.log(isTrue); //false

//check if ALL items are less than 15
isTrue = items.every(eachItem => eachItem < 15)
console.log(isTrue); //false


//**** some(): this function also returns a boolean
//It returns true if condition is true for AT LEAST 1 element, otherwise returns false
//check if the nums array has any number that is less than 10
isTrue = nums.some(eachNum => eachNum < 10)
console.log(isTrue); //true

//check if the nums array has any number that is negative
isTrue = nums.some(eachNum => eachNum < 0)
console.log(isTrue); //true

//check if the items array has 'apple'
isTrue = items.some(eachItem => eachItem === 'apple')
console.log(isTrue); //true

//check if the items array has 'orange'
isTrue = items.some(eachItem => eachItem === 'orange')
console.log(isTrue); //false


//*** reverse(): reverses the array
var nums = [5, 3, 7, 3, -6, 11]
nums.reverse();
console.log(nums); // [11, -6, 3, 7, 3, 5]


//*** sort(): sorts the array in ascending order (smallest to greatest)
nums.sort();
console.log(nums); // [-6, 11, 3, 3, 5, 7]


//**** sort() + reverse()
nums.reverse();
console.log(nums); // [7, 5, 3, 3, 11, -6]


//**** fill(): changes all of the items in the array with the given value AND returns a new array
var nums = [5, 3, 7, 3, -6, 11]
var fillWith1 = nums.fill(1); //only one parameter (value) can be placed in the paranthesis
console.log(nums); // [1, 1, 1, 1, 1, 1]

//**** fill(item, startIndex(included), endIndex(excluded))
var fillWith10 = nums.fill(10, 2, 5);
console.log(nums); // [1, 1, 10, 10, 10, 1]


//TASK: Write a function that returns an array filled with incremented numbers
//Example:
// fillNumbers(3); [1, 2, 3]
// fillNumbers(6); [1, 2, 3, 4, 5, 6]
// fillNumbers(10); [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

function fillNumbers(len){
    return Array(len) //creating array with length of len
    .fill(0) //start with 0
    .map((input, index) => index + 1); //returns the index +1 in each loop so we can get 
}
console.log(fillNumbers(3)); [1, 2, 3]
console.log(fillNumbers(6)); [1, 2, 3, 4, 5, 6]
console.log(fillNumbers(10)); [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]


