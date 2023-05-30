export {}

//1. Doubling an Array of Numbers
//Create a function named squareNumbers that takes an array of numbers and returns a new array with the square of each number.
// Use the map function to achieve this.
//example: from [1, 2, 3, 4, 5] it returns [2, 4, 6, 8, 10]

function squareNumbers (arr:number[]):number[]{//פונקציה אשר מקבלת מערך מסוג מספר ומחזירה מערך מסוג מספר
    const newArr= arr.map((num)=> num * num);//משתנה חדש אשר יקבל מערך חדש מתוך המערך הקיים בעזרת פןנקצית מאפ , הפונקצית מאפ תבצע על כל הפריטים במערך את הלוגיקה של חזקה 
    return newArr;//מחזיר את המערך החדש

}

const numbers = [2,4,6,8,10];
const square = squareNumbers (numbers) 
console.log(square);
  

//2. Convert list of names to capital letters
//Create a function named capitalNames that takes an array of strings and returns a new array with same string in capital first letter.
// Use the map function to achieve this.
//example: from ["john", "smith"] it returns ["John", "Smith"]

function capitalNames (arr:string[]):string[]{//פונקציה אשר מקבלת מערך מסוג סטרינג ומחזירה מערך מסוג סטרינג
    const newArr = arr.map((name)=> name.charAt(0).toUpperCase()+ name.slice(1));
    //יצרנו משתנה חדש אשר יקבל את המערך הקודם ובעזרת פונקצית מאפ יקבל מערך חדש
    //על המערך החדש תתבצע לוגיקה שקודם כל תקבל את האות הראשונה של כל שם במערך באינדקס 0 
    //ואז תהפוך את האות שהתקבלה לאות גדולה 
    //ומוסיפה לזה + את שאר השם באמצעות סלייס
    return newArr
}
const name = ["sapir", "emmanuel", "shir", "sarit"];
const capitalLatter = capitalNames(name);
console.log(capitalLatter);



//3. Type Detector:
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

 
// 4. Print Shopping List (forEach)
// You have a shopping list represented as an array of strings. 
//Use the forEach function to print each item on the shopping list.

const shoppingList = ["apple", "orange", "milk", "potatos", "bamba"];

shoppingList.forEach((item) => {
    console.log(item);

});

//5. Grocery Filter (filter): 
//You have an array of grocery items. Some of them are healthy and some are not.
// Use the filter function to create a new array without 'cake' and 'candy' if they're exists.

const groceries= ["apple", "orange", "milk", "potatos", "cake", "candy"];

const filterGrocery = groceries.filter (item => item !=='cake' && item !=='candy' );

console.log(filterGrocery);


//6. Temperature Conversion (map)
//You have an array of temperatures in Fahrenheit.
// Use the map function to convert each temperature to Celsius and save the results in a new array.

const temperatureFahrenheit =[45, 75, 67, 38];

const convertFerToCel = temperatureFahrenheit.map((temperature)=> {
    const Celsius=(temperature-32) * (5/9);
    return Celsius;
});
 console.log (convertFerToCel);

