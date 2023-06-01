export {}

//1. Filter out non-string types and trim whitespace (map & filter)

//Write a function that accepts an array of different types of data.
// It should first use the filter function to keep only the elements that are of type string, and then use map to return a new array where each string has been trimmed of whitespace using the trim() function.
//for example from [" banana", 1, "apple "] it return ["banana", "apple"]   

function nonString (arr:any[]):any{
    const newArr = arr.filter((item)=> typeof item === "string").map(item => item.trim());
    return newArr;

}
const arr1= [1, "10  ", "  hello"];
const result1 = nonString(arr1);
console.log(result1);

//2. function ReplaceItemInArray (map)
//Write a function reaplaceItem that:
//a. find the 'itemToReplace' in the array, and replace it with 'replaceWith',
//b. return the new array.
//(arr: sting[], itemToReplace: string, replaceWith: string): string[]
//for example from itemToReplace(["shir", "yakov"], "yakov", "sapir")
//it will return ["shir", "sapir"].

// function replaceItemInArray (arr:string[], itemToReplace: string, replaceWith:string ): string[]{//מצהירים על פונקציה שמקבלת 3 פרמטרים , המערך שמתקבל + הערך מתוך המערך שיוחלף+ הערך שיתקבל במקום הערך שיוחלף
//     const newArr= arr.map((item)=> item === itemToReplace ? replaceWith: item);//יוצרים משתנה חדש אשר יקבל את המערך החדש באמצעות פונקצית מאפ 
//     //הפונקציה שתופעל על המערך הקודם ותחזיר מערך חדש היא החלפה של איבר נוכחי באיבר חדש 
//     //ראשית הפונקציה בודקת האם האיבר הנוכחי שווה לערך שיוחלף 
//     //אם הערך הנוכחי אכן שווה לערך שיוחלף אז הוא יוחלף 
//     // ואם לא אז יישאר כפי שהוא  
//     return newArr;
// }
// const arr2 =["sapir", "shir", "yakov"];
// const itemToReplace ="shir";
// const replaceWith = "sarit";

// const result2 = replaceItemInArray(arr2, itemToReplace, replaceWith);
// console.log(result2);

//3. function getFirstAndLast:
//from example from [1, 2, 3] it'll return [1, 3] (the first and last item only)
//than use extraction to save 1 and 2 to "first" and "last" variables.

// 1. Implementing ForEach:
// Implement a function myForEach that takes an array and a callback function and behaves like the forEach method.
// It should apply the callback function to each element in the array.

function myForEach(array, callback){
    for (let i =0; i < array.length; i++) {
        callback(array[i], i, array);   
    }
}

const arr3 = [1, 2, 3];
const result3 = myForEach(arr3,(el,i,arr3)=>{
    console.log(el, i, arr3);
 
});
console.log(result3);

// 2. Creating Custom Filter Function:
// Implement your own filter function named myFilter.
// It should take an array and a callback function that returns a boolean.
// myFilter should return a new array containing only the elements of the original array for which the callback function returns true.

function myFilter (array, callback){
    const itEven = [];
    for (let i =0; i < array.length; i++) {
        if (callback(array[i]))

}};
const arr4 = [1, 2, 3, 4, 5, 6, 7, 8, 9,10];
const itEven = ((x)=>x % 2 === 0);
const result4 = myFilter(arr4, itEven);
console.log(result4);



