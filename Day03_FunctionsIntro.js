/*
FUNCTION INTRO:
*/

console.clear();

//1. Declaring function:
function greet(){
  console.log('Hi, How are you?')
}

//2. Calling the function
greet(); //"Hi, How are you?"

//3. Declaring function with 1 parameter
function greetPeople(person){
  console.log(`Hi ${person}`)
}

//4. Calling the function
greetPeople('Dana'); //"Hi Dana"
greetPeople(5); //"Hi 5"
greetPeople(true); //"Hi true"


//4. Declaring function with multiple parameters
function personInfo(fName, lName, age, location, isWorking){
  console.log(`${fName}, ${lName}, ${location}, ${isWorking}`);
}

//5. Calling the function
personInfo('Dana', 'Krayem', 40, 'PA', true); //"Dana, Krayem, PA, true"
personInfo('Dana', 'Krayem', 40);