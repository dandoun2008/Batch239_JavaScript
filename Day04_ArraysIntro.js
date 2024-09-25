/*
ARRAYS:
Arrays are special type of objects.
We use index to get the values in array
We use [] to create arrays
*/

console.clear();

//Declaring array:
var friendList = ['Sam', 'Tom', 'Tim', 'John', 'Bob']

console.log(friendList);
console.log(typeof(friendList)); //"object"
var myFriendList = new Array('Sam', 'Tom', 'Tim', 'John', 'Bob')
console.log(myFriendList)

//Getting the values from the array
console.log(friendList[3]); //"John"

//When index is out of bound
console.log(friendList[5]); //undefined

//Editting array