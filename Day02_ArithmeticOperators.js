/* Arithmatic operations
+, -, *, /, ++, --, %, **
% remainder / mod
x++ : post increment => use x first, then add 1
x-- : post decrement => use x first, then sunbtract 1
++x : pre increment => add 1 first, then use x
--x : pre decrement => subtract 1 first, then use x
*/

let x = 12;
let y = 3;
console.log(x++); //12 (x value was printed first, then 1 was added)
console.log(x); //13 (1 was added from above)
console.log(++x); //14 (1 was added, then value is calculated)

x++
console.log(x); //15

x+=5; // x = x + 5
console.log(x); //20

x*=2; // x = x* 2
console.log(x); //40

x/=3; // x = x/3
console.log(x); //13.333333333333334


console.log(y--); //3
console.log(y); //2
console.log(--y);//1

y+=9; // y = y+9
console.log(y); // 10

y%=4; // Remainder = 2
console.log(y); // 10/4 = 2 and remainder is 2

console.log(y**3); // 2^3 = 2*2*2 = 8