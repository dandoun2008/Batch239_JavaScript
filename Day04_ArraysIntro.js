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
//Change 'John' as 'Marry'
friendList[3] = 'Marry';
console.log(friendList); //['Sam', 'Tom', 'Tim', 'Marry', 'Bob']

//Adding Data:
//Adding data in the index 5 as 'Alex
friendList[5]= 'Alex';
console.log(friendList); //['Sam', 'Tom', 'Tim', 'Marry', 'Bob' 'Alex']

//Adding Data in the index of 7
friendList[7] = 'Firas';
console.log(friendList); //["Sam", "Tom", "Tim", "Marry", "Bob", 'Alex', undefined, "Firas"]

//We did not define data in index 6 that is why it is udefined
//Note: When working arrays
//1.If there is alredady data in that index, then previous data will be overridden (Editing Data)
//2.If there is no data in that index, then the new data will be inserted in that index
//3.If there is a gap between last index and inserted index, then the gap indexes will be undefined]