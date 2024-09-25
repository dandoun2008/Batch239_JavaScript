/*
FUNCTIONS:
perform an action
calculate a value
*/
console.clear();

//creating
function sum(){
  var num1 = 5;
  var num2 = 4;
  var total = num1 + num2
  return total;
}

//calling the function
console.log(sum()); //9
      // OR
const result = sum() + 10;
console.log(result);

//Creating a function
function square(s){
  return s*s;
}

//calling the function
console.log(square(8)); //64
//What is we leave the parameter empty?
console.log(square()); //NaN
//What if we put more than one parameter?
console.log(square(3,4)); //s = 3 and the answer is 9

const result1 = square(8) - 1
console.log(result1); //63

//We can assign DEFAULT values in the function parameter
function addNumbers(num1=2,num2=3,num3=4){
    return num1+num2+num3;
  }
  
  console.log(addNumbers()); //Using default values that were defined in the function parameter 2+3+4=9
  console.log(addNumbers(5,6,7)); //Overwriting num1=5, num2=6, num3=7 ==> 18
  
/*
FUNCTIONS:
We can use a function then declare the function
*/
console.clear();

//calling the function
add(2,5); //7

//declaring the function
function add(x,y){
  console.log(x + y)
}

//function = keyword, add = name of the function
//anonymous function: function WITHOUT a name ==> this is a commen practice recently
//we can declare anonymous function and put it in a variable
var sum = function(x,y){
  console.log(x+y)
}

//calling the function
sum(); //NaN
sum(7,8); //15
sum(7,8,9); //15

//create anonymous function with 3 parameters
//then put the result in a variable named total
//call the function to print the result
//argumnets 6, 7, 8 => 21

let total = function(a,b,c){
    console.log(a+b+c)
  }
  total(6,7,8,); //21
    
