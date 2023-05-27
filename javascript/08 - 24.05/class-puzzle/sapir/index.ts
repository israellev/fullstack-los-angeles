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

const groceryFilter = ["apple", "orange", "milk", "potatos", "bamba", "candy"];

groceryFilter.filter(() => {
    if (groceryFilter.includes('cake') || groceryFilter.includes('candy')){
        return groceryFilter.filter((item) => {
            if (item !== 'cake' && item !== 'candy'){
                return item;
        })
    }

    
})

//4. Temperature Conversion (map)
//You have an array of temperatures in Fahrenheit. Use the map function to convert each temperature to Celsius and save the results in a new array.


//home puzzle:

//1. Using Filter and Map Together:
//Given an array of numbers, use the filter and map functions to create a new array containing only the squares of the even numbers from the original array.

//2. Implementing ForEach:
//Implement a function myForEach that takes an array and a callback function and behaves like the forEach method. It should apply the callback function to each element in the array.

//Bonus:
//1. Creating Custom Filter Function:
//Implement your own filter function named myFilter. It should take an array and a callback function that returns a boolean. myFilter should return a new array containing only the elements of the original array for which the callback function returns true.

//2. Creating Custom Filter Function:
//Implement your own filter function named myFilter. It should take an array and a callback function that returns a boolean. myFilter should return a new array containing only the elements of the original array for which the callback function returns true.
