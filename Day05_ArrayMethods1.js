console.clear();

//Declaring array:
var friendList = ['Sam', 'Tom', 'Tim', 'John', 'Bob']

//1. push(): add element at the end of the array
friendList.push('Jack');
console.log(friendList); //['Sam', 'Tom', 'Tim', 'John', 'Bob', 'Jack']

//2. unshift(): add element at the beginning of the array
friendList.unshift(true); //added anything (not necessarily a string because arrays can hold any type of data)
console.log(friendList); //[true, 'Sam', 'Tom', 'Tim', 'John', 'Bob', 'Jack']

//3. pop(): remove the last element of the array
friendList.pop();
console.log(friendList); //[true, 'Sam', 'Tom', 'Tim', 'John', 'Bob']

//4. shift(): remove the first element of the array
friendList.shift();
console.log(friendList); //['Sam', 'Tom', 'Tim', 'John', 'Bob']