
// write a code to get random number between 0-9 (inclusive)

//step 1 : get a number between 0 - 0.9999999999999999 (16 decimal places)
var num = Math.random();
console.log(num)

//step 2 : mutliply by 10
num = num * 10;

//step 3 : Math.ceil to round the number to the nearest high number
num1 = Math.ceil(num);
console.log(num1);


//We can also mutliply by 10 and use Math.floor to get the nearest low number
num2 = Math.floor(num);
console.log(num2);

// random number 0 - 99

var num3 = Math.random();
num3 = num3 * 100;
console.log(num3);

/*
https://www.lovecalculator.com/

Get 2 names from user and store variables: name1, name2
Create a variable loveScore and store the random number
loveScore should be a random whole number between 1 - 100 (inclusive) precentage

Task 1: Print 'name1 and name2' s love scores is loveScore'
Try using if and ternary
Task 2 : Print 'You love each other' if loveScore is greater or equal to 80 %.
Task 3 : Pring 'Moderate relationship' if loveScore is between 50% and 80%.
Task 4 : Print 'Not a strong relationship' otherwise
*/

//Step 1.: getting namees from user
var name1 = prompt ('Enter your name')
var name2 = prompt ("Enter your Crush's name'")

//Step 2 : get random number
var loveScore = Math.random() * 100 ;
console.log(loveScore)

//Step 3: round the random number to a whole number
loveScore = Math.ceil(loveScore)

console.log(`${name1} and ${name2} love score is ${loveScore}`)

//Step 4 : complete the if statements
if (loveScore >= 80) {
    console.log('You love each other')
    } else if (loveScore >= 50 && loveScore < 80) {
        console.log('Moderate relationship')
    } else {
        console.log('Not a strong relationship')
    }
