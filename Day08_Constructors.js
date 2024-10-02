/*
Constructors: It is another way of creating objects
*/

console.clear();
//Normal way of creating an object: camelCase (naming of the object)
function carInfo(brand, model, year) {
    return{
        brand, model, year
    }
};
//How to call it?
const carFunction = carInfo('Nissan', 'Rogue', 2019);
console.log(carFunction); /* [object Object] {
                                brand: "Nissan",
                                model: "Rogue",
                                year: 2019
                                }
                        */

console.log(carFunction.brand); //'Nissan'
console.log(carFunction.model); // 'Rogue'
console.log(carFunction.year); //2016

//With Constructor: PascalCase (uppercase for 1st letter of Object name)
//EXAMPLE 1
function CarInfo(brand, model, year) {
    //this keyword is used to refer to the object inside the constructor
    this.brand = brand;
    this.model = model;
    this.year = year;
};
//Calling the function created with Constructor
const carConstructor = new CarInfo('Tesla', 'Model X', 2021);
console.log(carConstructor); /* [object Object] {
                                    brand: "Tesla",
                                    model: "Model X",
                                    year: 2021
                                }
                            */

console.log(carConstructor.brand); // 'Tesla'
console.log(carConstructor.model); // 'Model X'
console.log(carConstructor.year); // 2021

//EXAMPLE 2
//Creating function without constructor
function areaOfCircle(r) {
    return {
        r,
        result(){
            console.log('Result: ')
        }
    }
}
const myCircleArea = areaOfCircle(7);

//With constructor
function AreaOfCircle(r) {
    this.r = r;
    this.result = function(){
        console.log('Result: ')
    }
}
const myCircleArea2 = new AreaOfCircle(10);

//NOTES
//1. new keyword creates an empty object, then returns the object from the constructor
//2. function of new keyword: it wraps the values given in function and returns it 