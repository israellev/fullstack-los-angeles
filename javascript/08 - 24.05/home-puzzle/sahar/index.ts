export{}

// 1. Using Filter and Map Together:
// Given an array of numbers, use the filter and map functions to create a new array 
// containing only the squares of the even numbers from the original array. 

const array = [1,2,3,4,5,6,7,8,9];
const squarsNumbers = array.filter((num) => num % 2 == 0);
const evenNumbers = squarsNumbers.map((num) => num * num );
console.log(evenNumbers);

// 2. Implementing ForEach:
// Implement a function myForEach that takes an array and a callback function 
// and behaves like the forEach method. It should apply the callback function to each element in the array.

