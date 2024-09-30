/*
REDUCE:
- syntax: array.reduce(function parameter): it takes 2 parameters as follows:
    array.reduce(accumulator, eachItem) => {
        body
        }
- REDUCE is used to hold onto the accumulated value
- we cn hold onto each number from the array
- reduce iterates (loops through the array) and accumulates array values
*/

console.clear();
var numbers = [8, 1, 4, 12, 66, 3]
/*
eachItem:       8,       1,        4,         12,        66,        3
accumulator:    8,  (8+1)9,  (9+4)13,  (13+12)25, (25+66)91, (91+3)94
*/

const result = numbers.reduce(
    function(accumulator, eachNumber){
        return accumulator + eachNumber
    }
)
console.log(result); //94

//Using ARROW FUNCTION
const result1 = numbers.reduce(
    (accumulator, eachNumber) => accumulator + eachNumber
)
console.log(result1); //94