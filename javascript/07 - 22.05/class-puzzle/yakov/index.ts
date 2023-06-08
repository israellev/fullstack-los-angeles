export {};

// const arr = ["apple", "orange", "strawberry", 1, 2, true];
// arr[0];
// arr[arr.length - 1];
// arr.indexOf("orange");
// console.log;

// class puzzle:
console.log("class puzzle: 1------------------");
// 1. Write a function that calls 'printState' that get 'str' parameter and print the fisrt and last string.
function printState(name: string) {
  console.log(name);
  console.log(name[0]);
  console.log(name[name.length - 1]);
}
printState("yakov");

console.log("class puzzle: 2------------------");
// // 2. Create a function named stringManipulation that takes in a string, removes whitespace from both ends,
//  converts it to lower case and then replaces all occurrences of the letter 'a' with 'b'.
//  Make sure the function throws an error if something other than a string is input

function stringManipulation(strr: string) {
  if (typeof strr !== "string") {
    throw new Error("נא הכניס מילה!");
  }
  let str1 = strr.trim();
  let str2 = strr.toLowerCase();
  let str3 = strr.replace(/a/g, "b");
  console.log(str3);
}
const input = prompt("בבקשה הכנס את שמך");
stringManipulation(input);
// 3. create dynamicArray
// Creat a function that received a 'num' and return array of numbers
// that start from 0 to the number of the 'num'.
// for example user enter 3, the function return [0, 1, 2, 3], etc.
// (num: number) => number[]

console.log("class puzzle: 3------------------");
function arrayofnumbers(num: number) {
  let newarr = [];
  for (let i = 0; i <= num; i++) {
    newarr.push(i);
  }
  return newarr;
}
let arrr = arrayofnumbers(15);
console.log(arrr);
