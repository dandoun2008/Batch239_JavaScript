/*
Switch:
*/

var color = 'blue';
switch(color){
  case 'red':
    console.log('color is red');
    break; // ==> Exit switch statement
  case 'blue':
    console.log('color is blue');
    break; // ==> Exit switch statement
  default: // ==> If there is no match then this line runs
    console.log('color is neither red nor blue');
    break; // ==> Exit switch statement 
}