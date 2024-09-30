console.clear();

/*
SPREAD OPERATOR:
- used to spread out the data from arrays, objects or functions
- ... used in front of the arrays, objects or functions
- we can use spread operator with:
    1. functions calls
    2. arrays calls
    3. objects literals
*/


//1. FUNCTIONS:
var minNum = Math.min(45, 32, 19, 100, 25);
console.log(minNum); //19 (because data is spread out == 5 different items)

const temperatures = [45, 32, 19, 100, 25];
minNum = Math.min(temperatures);
console.log(minNum); //NaN (because the numbers in the temperatures array are seen as a single argument)

//Using spread operator
minNum = Math.min(...temperatures); //(now the numbers in the array are separated == spread out)
console.log(minNum); //19

//Another example: we can use spread operator with strings as well
const favActors = ['Jim', 'Angelina', 'Jack']
console.log(favActors); // ['Jim', 'Angelina', 'Jack']
console.log(...favActors); //'Jim', 'Angelina', 'Jack'

const myFavNumber = '145389';
console.log(Math.min(myFavNumber)); // 145389
console.log(Math.min(...myFavNumber)); // 1
//We can pass strings directly in functions with spread operator 
console.log(Math.max(...'586647852')); // 8