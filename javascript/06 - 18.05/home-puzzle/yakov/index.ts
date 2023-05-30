export {};

// // home puzzle:

// // 1. Function and Loop - Multiplication Table:
// // Write a function named multiplicationTable that takes a parameter num.
//  The function should print the multiplication table for that number from 1 up to 10 using a for loop.
// if the num is 5 it'll print for example '5 * 1 = 5', than '5 * 2 = 10', etc up to 10.
// console.log("home - puzzle 1");
// function multiplicationTable(parameter: number) {
//   for (let i = 0; i <= 10; i++) {
//     let result = i * parameter;
//     console.log(`${i} ${"*"} ${parameter} ${"="} ${result} `);
//   }
// }
// const parameter = parseInt(prompt("Enter number between 1-100"));
// multiplicationTable(parameter);

// // 2. Countdown Timer:
// // Write a function that asks the user for a number and then counts down from that number to zero, printing each number on a new line. Use a for loop to accomplish this.
// // If the user enter something not number - throw error.

// function countDownFromNumber() {
//   let userIn = Number(prompt("Enter a number:"));

//   // Check if userInput is a valid number
//   if (isNaN(userIn)) {
//     throw new Error("Invalid input. Please enter a number.");
//   }

//   var number = userIn;

//   for (var i = number; i >= 0; i--) {
//     console.log(i);
//   }
// }

// try {
//   countDownFromNumber();
// } catch (error) {
//   console.log(error.message);
// }

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
// 1. Sum the array numbers
// Write a function that receive array of numbers (only) as a parameter,
// and return the result of all numbers together.

console.log("Home pzzle - 1");
function sumArray(numbers) {
  let sum = 0;
  for (var i = 0; i < numbers.length; i++) {
    if (isNaN(numbers[i])) {
      continue;
    }
    sum = sum + parseInt(numbers[i]);
  }
  return sum;
}

let array = [1, "door", 3, "4", "five"];
let result = sumArray(array);
console.log(result);

// 2. max number in Array
// Write a function that recive an array of numbers and returns the bigget number index.
// for example from [1, 2, 3] it returns 2 (the index of 3).

console.log("Home pzzle - 2");
function findMax(num: number[]): number {
  let max = 0;
  let count = 0;
  for (let i = 0; i < num.length; i++) {
    if (max < num[i]) {
      max = num[i];
      count = i;
    }
  }
  return count;
}
let num = [1, 2, 13, 15, 25, 2, 14];
let count = findMax(num);
console.log(`${"the index of maximum number in this array is :"} ${count}`);

// 3. avg number in array
// Write a function that recive an array of numbers and returns the average number.
// for example from [1, 2, 3] it returns 2.

console.log("Home pzzle - 3");
function avgArray(numArray: number[]): number {
  let sumArray = 0;
  for (let i = 0; i < numArray.length; i++) {
    sumArray = sumArray + numArray[i];
  }

  return Math.ceil(sumArray / numArray.length);
}
let numArray = [1, 2, 13, 15, 2, 14];
let resultAvg = avgArray(numArray);
console.log(`${"the average in this array is :"} ${resultAvg}`);

// 4. check if array contains the item
// Write a function that recive an array and value, return true if the value exists in the array, and false if not.
// for example from ([1, 2, 3], 4) it returns false.

console.log("Home pzzle - 4---------------------");
function containsValue(arr: number[], value: number): string {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === value) {
      return `${value} ${"="} ${arr[i]}`;
    }
  }
  return `the value its not exsits in the array`;
}

let arra = [1, 2, 3, 400, 50, 42, 15];
let value = 15;
let resultCheck = containsValue(arra, value);
console.log(resultCheck);

//  bonus--------------------------------------

console.log("Home pzzle from CHET-GPT - 5");
function concatArrays(arr1: number[], arr2: number[]): number[] {
  if (arr1.length > arr2.length) {
    for (let i = 0; i < arr1.length; i++) {
      arr2.push(arr1[i]);
    }
    return console.log(`${arr2}`);
  } else {
    for (let i = 0; i < arr2.length; i++) {
      arr1.push(arr2[i]);
    }
    return console.log(`${arr1}`);
  }
}
let arr1 = [1, 2, 13, 5, 2, 4];
let arr2 = [1, 2, 13, 5];
concatArrays(arr1, arr2);

console.log(`------------------------------`);
console.log(`Avraham You Are The BEST!!!!!`);
