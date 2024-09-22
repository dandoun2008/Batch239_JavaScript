/*
String Manipulations:
*/

console.log();


//Example 1
//Getting an input from user
let name = prompt('Enter your name');

//Using that input
console.log('My name is: '+name);

//Example 2
let myTweet = prompt('Write your tweet');
let tweetLength = myTweet.length;

let maxLength = 280;
console.log(`Sent: ${tweetLength}. Remaining: ${maxLength - tweetLength}`)
