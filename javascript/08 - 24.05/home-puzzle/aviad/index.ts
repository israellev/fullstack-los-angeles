//home puzzle:

//1. Print Shopping List (forEach)
//You have a shopping list represented as an array of strings. Use the forEach function to print each item on the shopping list.

//const shoppingList = ["watch", "iphone", "milk", "airpods", "ipad"];

//shoppingList.forEach((item) => {
   // console.log(item);

//});

//2. Grocery Health Filter (filter): 
//You have an array of grocery items. Some of them are healthy and some are not. Use the filter function to create a new array without 'cake' and 'candy' if they're exists.
//for example from ['cake', 'orange', 'apple'] it'll return ['orange', 'apple'] 


//const groceries= ["cake", "orange", "candy", "potatos", "apple", "milk"];

//const filterGrocery = groceries.filter (item => item !=='cake' && item !=='candy' );

//console.log(filterGrocery);


//3. Arr Temperature Conversion (map)
//You have an array of temperatures in Fahrenheit. Use the map function to convert each temperature to Celsius and save the results in a new array.
//for example from 

//const temperatureFahrenheit =[70, 62, 67, 43];//משתנה אשר מקבל מערך של טמפטורות פרנהייט

//const convertFerToCel = temperatureFahrenheit.map((temperature)=> {
    //const Celsius=(temperature-32) * (5/9);
    //return Celsius;
//});
 //console.log (convertFerToCel);


//4. Get Array Types (map)
//a. Create a function that takes an array of different types of data (numbers, strings, arrays, objects, booleans)
//b. This function should use the map function to return a new array that indicates the type of each element in the input array.
//for example from [1, "", [], true] it'll return ['number', 'string', 'array', 'boolean']

function typeofData (arr:any[]):any[]{
  const newArr = arr.map(itemType => {
      if(Array.isArray(itemType))
         return 'array';
         return typeof itemType 
})
         return newArr
}
const array = [1, "aviad", true,[],{}];
const types = typeofData(array);
console.log(types);