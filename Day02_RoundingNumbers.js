/*
Rounding Numbers

Math.ceil(number) -> Rounds Up
Math.floor(number) -> Rounds Down
Math.round(number) -> Rounds to closest whole number
10.4 -> 10
10.6 -> 11

number.toFixed(numofdigit) -> Rounds to the number of digits after the point (.)
14.654852358.toFixed(2) -> 14.65
14.656665821.toFixed(3) -> 14.657

*/

console.clear();

let myFavNum = 15.4567
let ceiledNum = Math.ceil(myFavNum);
console.log(ceiledNum); //16

let flooredNum = Math.floor(myFavNum);
console.log(flooredNum); //15

let roundedNum = Math.round(myFavNum);
console.log(roundedNum); //15

let fixedNum = myFavNum.toFixed(2);
console.log(fixedNum); //15.46