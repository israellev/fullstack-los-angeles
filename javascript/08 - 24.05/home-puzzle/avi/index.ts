export {}
// class puzzle:
// 1. Type Detector:
// Write a function detectType that takes an argument and prints out whether it's a string, number, boolean, function, or an array.
function typDetector (argu){
    const type = typeof argu
    if (type === "string"){
        return `string`
    }else if(type === "number"){
        return `number`
    }
    else if(type === "boolean"){
        return `boolean`
    }
    else if(type === "function"){
        return `function`
    }
    else if( Array.isArray(argu)){
        return `Array`
    }
    
}
const argu = [5]
const result1 = typDetector(argu)
console.log(`the type of the argument is ${result1}`)

// 2. Print Shopping List (forEach)
// You have a shopping list represented as an array of strings. Use the forEach function to print each item on the shopping list.
const shoppingList = ["milk" , "eggs", "watter"]

shoppingList.forEach((element, index, array)=>{
    console.log(`the element is : ${element} in the array : [${array}]`)
})

// 3. Grocery Filter (filter): 
// You have an array of grocery items. Some of them are healthy and some are not. Use the filter function to create a new array without 'cake' and 'candy' if they're exists.

function filterFruitsByFirstLetter(arr) {
    const filterAFruits = arr.filter(itemA =>!itemA.charAt(0).includes("c"))
  
    return filterAFruits;
  }
 
  const itemA = ["fruit", "miclk", "candy", "kiwi", "cake"];
  
  const newItem = filterFruitsByFirstLetter(itemA);
  
  console.log("Original Array:", itemA);
  console.log("Filtered Array:", newItem);
// 4. Temperature Conversion (map)
// You have an array of temperatures in Fahrenheit. Use the map function to convert each temperature to Celsius and save the results in a new array.
console.log(`clas puzzle 4`)
function tempConverMap(ferTemp:number []):number[]{
  let cel = ferTemp.map((x) => ((x - 32) * 5 / 9).toFixed(0));
  return cel.map(parseFloat);
}

let ferTemp = [270 ,200 ,180 ,400]
let celTemp = tempConverMap(ferTemp)
console.log(`the Fahrenheit temperature array is : [${ferTemp}]`)
console.log(`the convert from Fahrenheit to Celsius is : [${celTemp}]`)

// home puzzle:

// 1. Using Filter and Map Together:
// Given an array of numbers, use the filter and map functions to create a new array containing only the squares of the even numbers from the original array.
console.log(`Home puzzle 1`)
function filterAndMap(array:number[]):number[] {
    
    const even = array.filter(num => num % 2 === 0);
    
    const multi = even.map(num => num ** 2);
    
    return multi;
  }
  
  const arr = [1, 2, 3, 4, 5];
  const result = filterAndMap(arr);
  
  console.log(result); 
// 2. Implementing ForEach:
// Implement a function myForEach that takes an array and a callback function and behaves like the forEach method. It should apply the callback function to each element in the array.
console.log(`Home puzzle 2`)
function myForEach(array, callback) {
    for (let i = 0; i < array.length; i++) {
      callback(array[i], i, array);
      
    }
    
  }
  
  const numbers = ['hallo',2,'avi',7];
  
 const result2 =  myForEach(numbers, (el, ind, arr) => {
    console.log(`Element at index ${ind} in this array [${arr}] is: ${el}`);
    console.log("---------");
  });
  console.log(result2)
 

  
// // Bonus:
// 1. Creating Custom Filter Function:
// Implement your own filter function named myFilter. It should take an array and a callback function that returns a boolean. myFilter should return a new array containing only the elements of the original array for which the callback function returns true.
console.log(`Home puzzle 3`)
function myFilter(arr5 , callback){
  let filterodd =[]
  for(let i = 0 ; i<arr5.length ; i++)
  {
    if(callback(arr5[i])){
      filterodd.push(arr5[i])
    } 
  }
  return filterodd
}
const arr5 = [1,2,3,4,5];
const filterodd = myFilter(arr5,((x) => x % 2 !== 0));
console.log(filterodd);

// Write a function called getDuplicates that takes an array of numbers as input and returns a new array containing only the numbers that occur more than once.
// Example:
// Input: [1, 2, 3, 2, 4, 3, 5, 1, 6, 6]
// Output: [2, 3, 1, 6]
// ----------------------------------------------------------------------------------------------------------------------
console.log(`Home puzzle from Chetgpt 3`)
function getDuplicat(array) {
  const duplicates = []; // מערך לאיחסון המספרים החוזרים פעמיים ויותר

  for (let i = 0; i < array.length; i++) { // לולאה חיצונית לעבירה על כל איבר במערך

    const element = array[i]; // איבר נוכחי בלולאה

    console.log(`the firs loop = ${ element}=${array[i]}`)

    let isDuplicate = false; // משתנה לצורך סימון האם האיבר הוא חוזר פעמיים

    for (let j = i + 1; j < array.length; j++) {// לולאה פנימית לבדיקה של כל האיברים מאחרי האיבר הנוכחי

      console.log(`the second loop = ${ element}=${array[j]}`)

      if (array[j] === element) {

        console.log(`the condition second loop = ${ element}=${array[j]}`)

        isDuplicate = array[j]; // אם איבר זהה נמצא, סמן את האיבר כחוזר פעמיים

        break; // יציאה מהלולאה הפנימית, אין צורך לבדוק עוד איברים
      }
    }

    if (isDuplicate === element) {
      
      console.log(`${ isDuplicate}`)
     
      duplicates.push(element); // אם האיבר הוא חוזר פעמיים, הוסף אותו למערך המספרים החוזרים פעמיים

      console.log(`tAdd the number to a new array = ${ duplicates}`)

    }
  }

  return duplicates; // החזר את המערך של המספרים שחוזרים פעמיים 
}

const array = [1, 2, 3, 2, 4, 3, 5,1, 6, 6];
const duplicateNumbers = getDuplicat(array);
console.log(duplicateNumbers);

// --------------------------------------------------------------------------------------------
// console.log(`Home puzzle - 5`)



