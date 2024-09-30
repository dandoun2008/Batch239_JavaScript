/*
Arrow Functions (or Fat Arrow Function): came after ES6
*/

//Traditional function
function sum(a) {
    return a+100
  }
  console.log(sum(9)); //109
  
  //anonymous function
  var sum1 = function(a) {
    return a+100
  }
  console.log(sum1(10)); //110
  
  // ---------- Arrow function => case1: one argument -------------
  //1. remove function keyword(function) and function name (sum)
  //2. use => Between the parameter and function body
  //3. use variable and store your arrow function
  var arrow = (a) => {
    return a+100
  }
  
  //calling the function
  console.log(arrow(15)); //115
  
  //4. Optional-delete remove curly braces and rturn keyword
  
  var arrow1 = (a) => a+100;
  console.log(arrow1(15)); //115
  
  //5.Note: We can remove the paranthesis around the parameter
  //if there is only one parameter
  var arrow2 = a => a+100;
  console.log(arrow2(32)); //132
  
  var squares = a => a*a;
  console.log(squares(5)); //25
  
  // ---------- Arrow function => case2: functions with more than one parameter -------------
  //traditional
  function sum2(a,b) {
    return a+b+100
  }
  console.log(sum2(5,3)); //108
  //anonymous function
  var sumResult2 = function(a,b) {
    return a+b+100;
  }
  console.log(sumResult2(20,10)); //130
  
  //With Arrow function
  //1. remove function keyword (function) and function name (sum2)
  //2. use => Between the parameter and function body
  //3. use variable and store your arrow function
  
  var arrow3 = (a,b) => {
   return a+b+100
  }
  console.log(arrow3(5,9)); //114
  
  //4.Optional : remove the {} and return
  var arrow4 = (a,b) => a+b+100
  console.log(arrow4(7,2)); //109
  //Note: I cannot remove the paranthesis around the a,b paremeters because there are more thna one parameter
  
  // ---------- Arrow function => case2: functions with no parameter -------------
  //traditional
  var x=14, y=24;
  function sum3() {
    return x+y+100
  }
  console.log(sum3()); //138
  //anonymous function
  var sumResult3= function() {
    return x+y+100
  }
  console.log(sumResult3()); //138
  
  //Arrow function
  var arrow5 = () => {
    return x+y+100
  }
  console.log(arrow5()); //138
  
  //Optional:
  var arrow6 = () => x+y+100;
  console.log(arrow6()); //138

  function arrow6(){
    return x+y+100;
  }