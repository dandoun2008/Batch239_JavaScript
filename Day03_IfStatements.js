/*
if(true){
print if true
}else{
print if false
}
*/
console.clear();

const x=4,y="4",z=5;

if(x==y){ //true
  console.log('x and y equal');
}else{
  console.log('x and y NOT equal')
}

if(x===y){ //false
 console.log('x and y equal');
}else{
  console.log('x and y NOT equal');
}

if(x>=y && z>=y){
  console.log('true');
}else{
  console.log('false')
} //"true"


if(0){
 console.log('true');
}else{
  console.log('false');
} //"false"

if(10){
 console.log('true');
}else{
  console.log('false');
} //"true"

if(NaN){
 console.log('true');
}else{
  console.log('false');
} //"false"

if(null){
 console.log('true');
}else{
  console.log('false');
} //"false"

if(""){
  console.log('true');
}else{
  console.log('false')
} //"false"

if(undefined){
 console.log('true');
}else{ 
  console.log('false');
} //"false"

if("javascript"){
 console.log('true');
}else{
  console.log('false');
} //"true"

if(" "){
 console.log('true');
}else{ 
  console.log('false');
} //"true"

if("0"){
 console.log('true');
}else{
  console.log('false');
} //"true"

/*
IMPORTANT NOTE:
0, FALSE, null, undefined, "" (empty string), NaN (Not a Number) ==> considered as FALSE.
All other values are TRUE
*/