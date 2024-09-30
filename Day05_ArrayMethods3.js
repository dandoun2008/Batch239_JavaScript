console.clear();

var fruits = ['apple', 'orange', 'banana', false, 10]

//7. splice: is used to delete or insert (add) items in any index in an array
//. splice(start): 
//. splice(start, deleteCount)
fruits.splice(2,1);
console.log(fruits); //['apple', 'orange', false, 10] 

//. splice(start, deleteCount, item1)

//. splice(start, deleteCount, item1, item2, itemN)
fruits.splice(1,0,'kiwi','peach');
console.log(fruits); //['apple', 'kiwi', 'peach', 'orange', false, 10]

fruits.splice(2,2,'cherry', 'strawberry', 'apricot');
console.log(fruits); //['apple', 'kiwi', 'cherry', 'strawberry', 'apricot', false, 10]

//NOTE: negative number (eg. -1 ) means starting from the last index (we start with -1 and not 0 when we go to the end of the array)
fruits.splice(-1,0,'tea', 'coffee');
console.log(fruits); //['apple', 'kiwi', 'cherry', 'strawberry', 'apricot', false, 'tea', 'coffee', 10]

fruits.splice(-2,2);
console.log(fruits); //['apple', 'kiwi', 'cherry', 'strawberry', 'apricot', false, 'tea']

fruits.splice(-1,1);
console.log(fruits); //['apple', 'kiwi', 'cherry', 'strawberry', 'apricot', false]

fruits.splice(-3,1);
console.log(fruits); //['apple', 'kiwi', 'cherry', 'apricot', false]

fruits.splice(-1,0,'water');
console.log(fruits); ////['apple', 'kiwi', 'cherry', 'apricot', 'water', false]