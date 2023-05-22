export {};

// home puzzle:

// 1. Function and Loop - Multiplication Table:
// Write a function named multiplicationTable that takes a parameter num. The function should print the multiplication table for that number from 1 up to 10 using a for loop. if the num is 5 it'll print for example '5 * 1 = 5', than '5 * 2 = 10', etc up to 10.

function multiplicationTable(parameter: number) {
  console.log("home - puzzle 1");
  for (let i = 0; i <= 10; i++) {
    let result = i * parameter;
    console.log(`${i} ${"*"} ${parameter} ${"="} ${result} `);
  }
}
const parameter = parseInt(prompt("Enter number between 1-100"));
multiplicationTable(parameter);
// 2. Countdown Timer:
// Write a function that asks the user for a number and then counts down from that number to zero, printing each number on a new line. Use a for loop to accomplish this.
// If the user enter something not number - throw error.

function countDownFromNumber() {
  let userIn = Number(prompt("Enter a number:"));

  // Check if userInput is a valid number
  if (isNaN(userIn)) {
    throw new Error("Invalid input. Please enter a number.");
  }

  var number = userIn;

  for (var i = number; i >= 0; i--) {
    console.log(i);
  }
}

try {
  countDownFromNumber();
} catch (error) {
  console.log(error.message);
}

// 3. Bonus - Palindrome Checker:
// Create a function that asks the user for a string and checks whether the string is a palindrome or not. A palindrome is a word, phrase, number, or other sequence of characters that reads the same backward or forward. Note: This challenge must be accomplished without using array methods.
// Help tools:
// in string, each word has index, if you do:
// "ab"[0] // you'll recieved - "a"
// "ab"[1] // you'll recieved - "b"
// "ab"[2] //  you'll recieved - undefined

// 4. Bonus - Sum of Digits:
// Create a function that asks the user to enter a number and calculates the sum of its digits.
// Note: the function needs to convert the number to a string and iterate over the digits using a loop.
// Help tools:
// a. you can convert number 1 to string '1' by doing:
// String(1)
// b. you can get the string length by soing:
// '1'.length // 1
// '11'.length // 2
