//3. OBJECTS
const fullName = {
    fName: 'James',
    lName: 'Bond'
}
const userInfo = {
    fullName,
    id:1,
    userName: '007'
}
console.log(userInfo); /* [object Object] {
                            fullName: [object Object] {
                                fName: "James",
                                lName: "Bond"
                            },
                            id: 1,
                            userName: "007"
                          }
                        */

userInfo = {...fullName,
    id:1,
    userName: '007'
}
console.log(userInfo); /* [object Object] {
                            fName: "James",
                            id: 1,
                            lName: "Bond",
                            userName: "007"
                            }
                            */