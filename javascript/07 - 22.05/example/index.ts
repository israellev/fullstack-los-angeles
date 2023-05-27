export {};

// /* use function inside the  */
// /* function getUserAge(): number {
//     const age = prompt("What your age (in numbers)?") // "88", "bla bla"
//     const ageNumber = Number(age) // 88, NaN
//     const isNotNumber = isNaN(ageNumber) // false, true
//     if (isNotNumber) {
//         alert("You didn't put a number, please try again")
//         return getUserAge()
//     } else {
//         return ageNumber

// }

// const age = getUserAge()
// console.log("Your age is: ", age) */

// /* String methods */

// /* "abca".length // 4 - length of the string
// "abca"[0] // "a" - return the char in the index
// "abca".indexOf("a") // 0 - return the first index of the char (if didn't find is '-1')
// "abca".lastIndexOf("a") // 3 - return the first index of the char, from the end
// "abc".slice(0, 2) // "ab" // return from index to index (not include the last index)
// " abc abc ".trim() // "abc abc"
// "ABC".toLowerCase() // "abc"
// "abc".toUpperCase() // "ABC"
// "avi avi".replace("avi", "shir") // "shir avi"
// "avi avi".replace(/avi/g, "shir") // "shir shir"
//  */

// /* Array + array method: */
// // number, stinrg, Nan, undefined, null, function, array, object;
// const arr = ["apple", "orange", "strawberry"]
// arr[0] // "apple"
// arr[arr.length - 1] // "strawberry"
// arr.indexOf("orange") // 1

// /* Functions that change the array it self: */

// arr.push("banana")
// // it add the item to the end: ["apple", "orange", "strawberry", "banana"]

// arr.pop()
// // it remove item from the end: ["apple", "orange", "strawberry"]

// arr.unshift("banana")
// // it add the item to the start: ["banana", "apple", "orange", "strawberry"]

// arr.shift()
// // it add the item to the start: ["apple", "orange", "strawberry"]

/* 2. max number in Array 
Write a function that recive an array of numbers and returns the bigget number index.
for example from [1, 2, 3] it returns 2 (the index of 3).
(arr: number[]) => number
 */

/* 
1. function name, parameters and return types.
2. 
*/

/* function getMaxNumberIndex(arr: number[]): number {
    // arr = [6, 2, 3, 5]
    let maxNumber = 0;
    for (let index = 0; index < arr.length; index++) {
        const value = arr[index]
        if (value > maxNumber) {
            maxNumber = value
        }
    }
    return arr.indexOf(maxNumber)
}

const maxNumber = getMaxNumberIndex([2, 3, 11, 8, 22, 6, 5])
console.log(maxNumber)
 */

function getArrayCapitalLetters(arr: string[]): string[] {
  const newArr = [];
  for (let i = 0; i < arr.length; i++) {
    const name = arr[i];
    console.log(name);
    const firstLetter = name[0].toUpperCase(); // "S"
    console.log(firstLetter);
    const restName = name.slice(1, name.length); // "arit"
    console.log(restName);
    newArr.push(firstLetter + restName);
    console.log(newArr);
  }
  return newArr;
}
console.log(getArrayCapitalLetters(["liad", "sarit"]));
