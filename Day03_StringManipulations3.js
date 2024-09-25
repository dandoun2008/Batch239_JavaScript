console.clear();

// concat(): used to concatanate the strings

let fName = 'John'
let lName = 'Walker'

console.log(fName+' '+lName); //"John Walker"
console.log(fName.concat(lName)); //"John Walker"

// trim(): used to remove the spaces at the start and end of the strings

let words = ' Today is Wednesday '
let trimmed = words.trim();
console.log(trimmed); //"Today is Wednesday"

// charAt('index'): returns the character at the specified inex. index starts at 0

let charAt = words.charAt(4)
console.log(charAt); //"a"

// split('character'): returns an array that is splitted from this character
let splitted = words.split(' '); //splits words from ' ' and returns as an array
console.log(splitted); //["", "Today", "is", "Wednesday", ""]

let trimSplitted = trimmed.split(' ');
console.log(trimSplitted); //["Today", "is", "Wednesday"]

let states = "AL, AK, AZ, AR, TX, NY, NH, FL";
let listOfStates = states.split(',');
console.log(listOfStates); //["AL" , "AK", "AZ", "AR", "TX", "NY", "NH", "FL"]