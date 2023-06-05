export {}

// Class puzzle - Practice arrys:

// 1. Filter out non-string types and trim whitespace 
//(map & filter)

// Write a function that accepts an array of different 
// types of data. It should first use the filter function 
// to keep only the elements that are of type string, and
//  then use map to return a new array where each string 
//  has been trimmed of whitespace using the trim() 
//  function. for example from [" banana", 1, "apple "] 
//  it returns ["banana", "apple"]                                             
//" abc ".trim() // "abc"
function rawData(arr: any[]):any{
    const filteredArr = arr.filter((item)=> typeof item === "string").map(item => item.trim());
    return filteredArr;
}

const arr1 = [1, "10 ", " hello"];
const result1 = rawData(arr1);
console.log(result1);


// function filterAndTrimStrings(arr) {
    /*
    Function to filter out non-string elements and trim 
    whitespace from strings in an array.
    Parameters:
    arr (array): The input array containing different data types.
    Returns:
    array: A new array with only string elements trimmed of 
//     whitespace. */
//     var filteredStrings = arr.filter(function(element) {
//       return typeof element === 'string';
//     });
  
//     var trimmedStrings = filteredStrings.map(function(element) {
//       return element.trim();
//     });
  
//     return trimmedStrings;
//   }

//   var data = [1, '  John  ', 'Emma ', true, ' Peter  ', 5.6];

// var filteredAndTrimmed = filterAndTrimStrings(data);
// console.log(filteredAndTrimmed);
// // Output: ["John", "Emma", "Peter"]

// 2. function ReplaceItemInArray (map)
// Write a function reaplaceItem that:
// a. find the 'itemToReplace' in the array, and replace it with 'replaceWith',
// b. return the new array.
// (arr: sting[], itemToReplace: string, replaceWith: string): string[]
// for example from itemToReplace(["shir", "yakov"], "yakov", "sapir")
// it will return ["shir", "sapir"].


function replaceItemInArray (arr:string[], itemToReplace: string, replaceWith:string ): string[]{
  // assign function that gets 3 params, array + value within array that is replaced + value that is inserted instead of the original.

    const newArr= arr.map((item)=> item === itemToReplace ? replaceWith: item);
// here we created a new constant that will get the new array, via map func
// the func applied on the orig array, will return a new array that is a replace of the orig one
// func checkes if the current value equals to the value that will replace,
// if they are equal there will be a swap, if not, the value will remain as is.

     return newArr;
}
 const arr2 =["sapir", "shir", "yakov"];
 const itemToReplace ="shir";
 const replaceWith = "sarit";

 const result2 = replaceItemInArray(arr2, itemToReplace, replaceWith);
 console.log(result2);


// 3. function getFirstAndLast:/
// from example from [1, 2, 3] it'll return [1, 3] (the first and last item only)
// than use extraction to save 1 and 2 to "first" and "last" variables.



// home puzzle:



// Bonuses - arrays:

// 1. Implementing ForEach:
// Implement a function myForEach that takes an array 
//and a callback function and behaves like the forEach method. It should apply the callback function to each element in the array.

// 2. Creating Custom Filter Function:
// Implement your own filter function named myFilter. It should take an array and a callback function that returns a boolean. myFilter should return a new array containing only the elements of the original array for which the callback function returns true.

// 3. Creating Custom Filter Function:
// Implement your own filter function named myFilter. It should take an array and a callback function that returns a boolean. myFilter should return a new array containing only the elements of the original array for which the callback function returns true.
