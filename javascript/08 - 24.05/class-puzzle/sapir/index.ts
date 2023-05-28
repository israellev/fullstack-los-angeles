export {}
//1. Type Detector:
//Write a function detectType that takes 
//an argument and prints out whether it's a string, number, boolean, function, or an array.

function TypeDetector (type: any){
    const userInput= prompt("please enter any argumant:");
    if (typeof userInput==='string'){
    console.log("you enterd an argumant from type string");
}  else if (!isNaN(Number(userInput))){
    console.log("you enterd an argumant from type number");
}   else if (userInput === 'true' || userInput === 'false'){
    console.log("you enterd an argumant from type boolean");
}   else if (typeof userInput=== 'function'){
    console.log("you enterd an argumant from type function");
}   else if (Array.isArray(userInput)){
    console.log("you enterd an argumant from type array");
}   else {
    console.log('The type of the argument could not be determined.');
}  
 }

 
// 2. Print Shopping List (forEach)
// You have a shopping list represented as an array of strings. 
//Use the forEach function to print each item on the shopping list.

const shoppingList = ["apple", "orange", "milk", "potatos", "bamba"];

shoppingList.forEach((item) => {
    console.log(item);

});

//3. Grocery Filter (filter): 
//You have an array of grocery items. Some of them are healthy and some are not.
// Use the filter function to create a new array without 'cake' and 'candy' if they're exists.

const groceries= ["apple", "orange", "milk", "potatos", "cake", "candy"];

const filterGrocery = groceries.filter (item => item !=='cake' && item !=='candy' );

console.log(filterGrocery);


//4. Temperature Conversion (map)
//You have an array of temperatures in Fahrenheit.
// Use the map function to convert each temperature to Celsius and save the results in a new array.

const temperatureFahrenheit =[45, 75, 67, 38];

const convertFerToCel = temperatureFahrenheit.map((temperature)=> {
    const Celsius=(temperature-32) * (5/9);
    return Celsius;
});
 console.log (convertFerToCel);

