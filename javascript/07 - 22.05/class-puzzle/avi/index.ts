export {}
// תרגיל 1: מציאת מספר מקסימום במערך
// כתוב פונקציה בשם findMax שמקבלת מערך של מספרים ומחזירה את המספר המקסימלי במערך.
// function findMax (num) {
//     let max = num[0]
//     for (let i = 0 ; i <num.length  ; i++){
//         if (num[i] > max){
//         max = num[i]
//         }
//         console.log(max[i])
//     }
//     return max 

// }
// let num = [1,2,13,15,2,14];
// findMax(num);
// console.log(`${"the maximum number in this array is :"} ${findMax(num)}`);
// תרגיל 2: חיבור מערכים
// כתוב פונקציה בשם concatArrays שמקבלת שני מערכים ומחזירה מערך המכיל את כל האיברים משני המערכים המקוריים.
function concatArrays (arr1 , arr2) {
    
    if(arr1.length > arr2.length){
        for (let i = 0; i < arr1.length; i++) {
            arr2.push(arr1[i])   
        }
        return console.log(`${arr2}`)
    }
    else{
        for (let i = 0; i < arr2.length; i++) {
            arr1.push(arr2[i])   
        }
        return console.log(`${arr1}`)
    }
    
}
let arr1 = [1,2,13,5,2,4];
let arr2 = [1,2,13,5];
concatArrays(arr1,arr2);

// תרגיל 3: סכום מספרים במערך
// כתוב פונקציה בשם sumArray שמקבלת מערך של מספרים ומחזירה את סכום המספרים במערך.



// 1. Write a function that calls 'printState' that get 'str' parameter and print the fisrt and last string.
console.log("class pzzle - 1")
function printState(arrStr){
    let leng = arrStr.length
    console.log(`${"the firs index is :"} ${arrStr[0]}`)

    console.log(`${"the lest index is :"} ${arrStr[(leng-1)]}`)
}
let arrStr = ["avraham" , "yakov" , "aharon" , "orna"] 
printState(arrStr)

// // 2. Create a function named stringManipulation that takes in a string, removes whitespace from both ends, converts it to lower case and then replaces all occurrences of the letter 'a' with 'x'. Make sure the function throws an error if something other than a string is input
console.log("class pzzle - 2")

function stringManipulation(inputString) {
    if (typeof inputString !== 'string') {
      throw false
    }
    let modifiedString = inputString.trim().toLowerCase().replace(/a/g, 'x').replace(/\s/g,"");
    return modifiedString;
  }
  try{
  let result = "Hallo Word Poeple"
  console.log(stringManipulation(result)); }
  catch(error){
    console.log('Input must be a string')}
   
  


// 3. create dynamic array 
// Creat a function that received a 'num' and return array of numbers 
// that start from 0 to the number of the 'num'. 
// for example user enter 3, the function return [0, 1, 2, 3], etc. 
console.log("class pzzle - 3")
function dynamicArray (num1 : number){
    let arra = []
    for (let i = 0 ; i<=num1 ; i++){
        arra.push(i)
    }
    return arra

}
let num1 = parseInt(prompt("Enter number"));
const arra=dynamicArray(num1);
console.log(arra)
// 1. 'printState', fisrt and last of string
// Write a function that calls 'printState' that get 'str' parameter and print the fisrt and last string.
// (str: string) => string

// 2. stringValidation
// Create a function that takes in a string, removes whitespace from both ends, converts it to lower case and then replaces all occurrences of the letter 'a' with 'b'. Make sure the function throws an error if something other than a string is input. 
// for example from " aaa " it will returs "bbb".
// hint: 'const isString = isNaN(Number(str))'
// (str: string) => string

// 3. create dynamicArray 
// Creat a function that received a 'num' and return array of numbers 
// that start from 0 to the number of the 'num'. 
// for example user enter 3, the function return [0, 1, 2, 3], etc. 
// (num: number) => number[]