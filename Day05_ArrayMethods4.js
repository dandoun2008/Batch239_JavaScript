console.clear();

//8. concat(): combines arrays 
var drinks = ['water', 'coke', 'fanta', 'tea'];
var snacks = ['sunchips', 'gold fish', 'nuts', 'popcorn']
const favFoods = drinks.concat(snacks);
console.log(favFoods); //["water", "coke", "fanta", "tea", "sunchips", "gold fish", "nuts", "popcorn"]

nums1 = [1,2,3];
nums2 = [4,5,6];
console.log(nums1.concat(nums2)) //[1, 2, 3, 4, 5, 6]

//9. slice(startIndex(included), endIndex(excluded)) => cuts the array (similar to substirng)
const myFood = favFoods.slice(1,5);
console.log(myFood); //["coke", "fanta", "tea", "sunchips"]

const favSnacks = snacks.slice(2); //start from index 2 till the end
console.log(favSnacks); //["nuts", "popcorn"]

const slicedDrinks = drinks.slice(-1); //start from lastIndex till the end
console.log(slicedDrinks); //["tea"]

//10. join => returns a string. we can combine the itmes of the array using join
//water - coke - fanta - tea
//drink array : ['water', 'coke', 'fanta', 'tea']
const joinedItems = drinks.join ( ' - ');
console.log(typeof(joinedItems));
console.log(joinedItems); //"water - coke - fanta - tea"

const joinedItems1 = drinks.join(',');
console.log(joinedItems1); //"water,coke,fanta,tea"

const joinedItems2 = drinks.join('');
console.log(joinedItems2); //watercokefantatea"