// export {};

// // Write a function that calls 'printState' that get 'str' parameter and print the fisrt and last string.
// // const userInput = prompt("Enter a string:");

function printFirstAndLast(str) {
  printState(str[0], str[str.length - 1]);
}

function printState(first, last) {
  console.log(`First character: ${first}Last character: ${last}`);
}

const Inputuser = prompt("Enter a string:");
printFirstAndLast(Inputuser);

// // ----------------------------------------------------

function Str(str) {
  if (typeof str === "string") {
    throw new Error("Invalid input.Try again string.");
  }

  const trimmedStr = str.trim();
  const lowerCaseStr = trimmedStr.toLowerCase();
  const replacedStr = lowerCaseStr.replace(/a/g, "b");

  return replacedStr;
}

try {
  const userInput = prompt("Enter a string:");
  const trans = String(userInput);

  console.log(`Transformed string: ${trans}`);
} catch (error) {
  console.error(error.message);
}

// //   -----------------------------------------

function Arr(num) {
  const dynamicArray = [];

  for (let i = 0; i <= num; i++) {
    dynamicArray.push(i);
  }

  return dynamicArray;
}

const userInput = parseInt(prompt("Enter a number:"));
const resultArray = Array(userInput);

console.log(" Array:", resultArray);

// avg number in array
// Write a function that recive an array of numbers and returns the average number.
// for example from [0, 1, 2, 3] it returns 1.5.
// (arr: number[]) => number
