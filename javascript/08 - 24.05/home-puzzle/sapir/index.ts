export {}
//home puzzle:

// Type Detector:
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

 
// 1. Print Shopping List (forEach)
// You have a shopping list represented as an array of strings. 
//Use the forEach function to print each item on the shopping list.

const shoppingList = ["apple", "orange", "milk", "potatos", "bamba"];//משתנה אשר מקבל מערך עם מוצרים

shoppingList.forEach((item) => {//פונקצית פור איץ' תעבור על כל המוצרים 
    console.log(item);//ותדפיס אותם

});

//2. Grocery Filter (filter): 
//You have an array of grocery items. Some of them are healthy and some are not.
// Use the filter function to create a new array without 'cake' and 'candy' if they're exists.

const groceries= ["apple", "orange", "milk", "potatos", "cake", "candy"];//משתנה אשר מקבל מערך של מוצרים 

const filterGrocery = groceries.filter (item => item !=='cake' && item !=='candy' );//משתנה חדש אשר יקבל את המערך החדש ללא עוגה וממתק. 
            //וזאת באמצעות קבלת המערך הקןדם שעליו מופעלת פונקצית פילטר 
            //על כל אייטם  תופעל הפונקציה ומה שאינו עוגה וגם מה שאינו ממתק יודפס לתוך המשתנה החדש 
console.log(filterGrocery);//הדפסת המערך במשתנה החדש ללא עוגה וממתק 


//3. Temperature Conversion (map)
//You have an array of temperatures in Fahrenheit.
// Use the map function to convert each temperature to Celsius and save the results in a new array.

const temperatureFahrenheit =[45, 75, 67, 38];//משתנה אשר מקבל מערך של טמפטורות פרנהייט

const convertFerToCel = temperatureFahrenheit.map((temperature)=> {//יצרנו משתנה חדש אשר יקבל את הטמפרטורות מומרות לסלציוס . 
    const Celsius=(temperature-32) * (5/9);// וזאת באמצעות פונקצית מאפ אשר תעבור על כל טמפרטורה במערך הראשןןעליו תופעל לוגיקת המרה ולאחר מכן נקבל מערך חדש של טמפ' מומרות
    return Celsius;
});
 console.log (convertFerToCel);//הדפסה

 //4. Get Array Types (map)
 //a. Create a function that takes an array of different types of data (numbers, strings, arrays, objects, booleans)
 //b. This function should use the map function to return a new array that indicates the type of each element in the input array.
 //for example from [1, "", [], true] it'll return ['number', 'string', 'array', 'boolean']

 function typeofData (arr:any[]):any[]{
    const newArr = arr.map(itemType => {
        if(Array.isArray(itemType))//חובה לתת למערך דגש משלו מאחר והברירת מחדל של פונקצית טייפאוף לזהות מערך כאובייקט ועל מנת להימנע מזה נוסיף את השורה הזאת.
           return 'array';
           return typeof itemType 
 })
           return newArr
 }
 const array = [1, "sapir", true,[],{}];
 const types = typeofData(array);
 console.log(types);//['number', 'string', 'boolean','array','object']
//-------------------------------------------------------------------------------------------------------------------------

//1. Using Filter and Map Together:
//Given an array of numbers, use the filter and map functions to create,
// a new array containing only the squares of the even numbers from the original array.

const numbers = [5, 8, 25, 17, 85, 40, 36, 12, ];

const square = numbers.filter((num)=> num % 2 === 0).map((num)=> num * num);

console.log(square);


//2. Implementing ForEach:
//Implement a function myForEach that takes an array and a callback function and behaves like the forEach method. 
//It should apply the callback function to each element in the array.




//Bonus:
//1. Creating Custom Filter Function:
//Implement your own filter function named myFilter. 
//It should take an array and a callback function that returns a boolean. 
//myFilter should return a new array containing only the elements of the original array for which the callback function returns true.



