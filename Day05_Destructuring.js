/*
Destructuring
1.Object destructuring
2.Function destructuring
3.Array destructuring
*/

//1.Object destructuring
var user = {
    myfName : 'Sam',
    mylocation : 'Dallas',
    myemail : 'sam@fakemail.com'
  }
  
  console.log(user.myfName); //"Sam"
  console.log(user.mylocation); //"Dallas"
  console.log(user.myemail); //"sam@fakemail.com"
  
  //Or i can use container
  var name1 = user.myfName
  var location1 = user.mylocation
  var email1 = user.myemail
  console.log(name1); //"Sam"
  console.log(location1); //"Dallas"
  console.log(email1); //"sam@fakemail.com"
  
  //Destructuring the user objects
  //benefit is we can access the data directly without . or [] notation
  //Note: key names must match the original objects
  //if key name doesn't match, then data will be undefined
  //for example:
  //var {fName,mylocation,myemail} = user;
  //console.log(fName); //undefined because the is no fName key in the original user object
  
  var{myfName,mylocation,myemail} = user;
  console.log(myfName); //"Sam"
  console.log(mylocation); //"Dallas"
  console.log(myemail); //"sam@fakemail.com"

  //2.function destructuring
    function getUser(){
    return {
      name2:'Sam',
      location2:'NYC',
      email2:'sam@gmail.com'
    } 
   }
   
   //destructuring the function
   var {name2,location2,email2} = getUser()
   console.log(name2); //"Sam"
   console.log(location2); //"NYC"
   console.log(email2); //"sam@gmail.comn"
   
   //3.Array destructuring
   var user1 = ['tim', 'LA', 'tim@yahoo.com']
   //without destructuring
   var username = user1[0]
   var timLocation = user1[1]
   var timEmail = user1[2]
   console.log(username); //"tim"
   console.log(timLocation); //"LA"
   console.log(timEmail); //"tim@yahoo.com"
   
   //with destructuring
   //. ['tim', 'LA', 'tim@yahoo.com]
   var [userName,userLocation,userEmail] = user1
   console.log(userName); //"tim"
   console.log(userLocation); //"LA"
   console.log(userEmail); //"tim@yahoo.com"
   //Note: during array destructuring, we can give any name we want.