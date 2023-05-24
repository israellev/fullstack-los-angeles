export {};

// Write a function that calls 'printState' that get 'str' parameter and print the fisrt and last string.
// const userInput = prompt("Enter a string:");

// function printState(params:string) {
//     const

// }

// function printFirstAndLast(str) {
//   printState(str[0], str[str.length - 1]);
// }

// function printState(first, last) {
//   console.log(`First character: ${first}Last character: ${last}`);
// }

// const userInput = prompt("Enter a string:");
// printFirstAndLast(userInput);

// ----------------------------------------------------

function String(str) {
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
  const transformedString = String(userInput);

  console.log(`Transformed string: ${transformedString}`);
} catch (error) {
  console.error(error.message);
}

//   -----------------------------------------

// function Array(num) {
//   const dynamicArray = [];

//   for (let i = 0; i <= num; i++) {
//     dynamicArray.push(i);
//   }

//   return dynamicArray;
// }

// // Example usage:
// const userInput = parseInt(prompt("Enter a number:"));
// const resultArray = Array(userInput);

// console.log(" Array:", resultArray);
