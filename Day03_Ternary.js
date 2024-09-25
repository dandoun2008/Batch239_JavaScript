/*
Ternary
*/
console.clear();
const x =5, y = 6;

x>y ? console.log('Logic 1') : console.log('Logic 2');

const isExpensive = x>4 ? 'Expensive' : 'Cheap';
console.log(isExpensive); // "Expensive"

const result = x > 4 ? (y < 4 ? 'Logic 1' : 'Logic 2') 
                                          : 'Logic 3';
console.log(result); // "Logic 2"