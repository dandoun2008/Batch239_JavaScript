console.clear();

console.clear();
//**** find(): returns the first item that matches the condition 
var nums = [5, 3, 7, 13, -6, 11, 16, 2, 90]
var myNum = nums.find(eachNum => eachNum >10);
console.log(myNum); //13


//**** findIndex():returns the index of the the first item that matches the condition
myNum = nums.findIndex(eachNum => eachNum >10);
console.log(myNum); //3