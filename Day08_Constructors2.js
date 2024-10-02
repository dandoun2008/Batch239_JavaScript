console.clear();

//Create a Person as constructor with 4 parameters
//Params: name, age, hasLicense, languages
//name: Jim
//age: 20
//hasLicense: true
//languages: English, Spanish, German (ARRAY)

//Print all og the information one by one

function Person(name, age, hasLicense, languages) {
    this.name = name;
    this.age = age;
    this.hasLicense = hasLicense;
    this.languages = languages
}

const personJim = new Person('Jim', 20, true, ['English', 'Spanish', 'German']);
console.log(personJim); /*
                        Person {
                        name: 'Jim',
                        age: 20,
                        hasLicense: true,
                        languages: [ 'English', 'Spanish', 'German' ]
                        }
                        */

console.log(personJim.name); //'Jim'
console.log(personJim.age); //20
console.log(personJim.hasLicense); //true
console.log(personJim.languages); //[ 'English', 'Spanish', 'German' ]
//To get only 'Spanish
console.log(personJim.languages[1]); //'Spanish'

