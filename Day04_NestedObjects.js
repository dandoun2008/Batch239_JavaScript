/*
NESTED OBJECTS:
*/

console.clear();

/*
Create an object
Name of object = personInfo
fName = Jim ==> string
lName = Carrey ==> string
age = 50 ==> number
address = {street = 6th Ave., city = NYC, state = NY} ==> this is an object inside 
hobbies = soccer, fishing, hunting ==> an array
salary = function that return '100k yearly'
*/

var personInfo = {
    fName: 'Jim',
    lName: 'Carrey',
    age: 50,
    address: {
        street: '6th Ave.',
        city: 'NYC',
        state: 'NY'
    },
    hobbies: ['soccer', 'fishing', 'hunting'],
    salary: function(){
        return '100K yearly'
    }
}

console.log(personInfo);

//Gettingg fName from personInfo object
console.log(personInfo.fName); //"Jim"

//Getting address
console.log(personInfo.address); // { street: '6th Ave.', city: 'NYC', state: 'NY' }

//Getting street
console.log(personInfo.address.street); // "6th Ave."

//Getting state
const state = personInfo.address.state;
console.log(state);

//Getting 'soccer'
console.log(personInfo.hobbies[0]); // "soccer"

//Getting 'hunting"
console.log(personInfo.hobbies[2]);
console.log(personInfo.hobbies[3]); // Undefined since there is no assigned hobby at index 3



