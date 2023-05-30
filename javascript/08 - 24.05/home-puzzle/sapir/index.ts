export {}
//home puzzle:

//1. Using Filter and Map Together:
//Given an array of numbers, use the filter and map functions to create,
// a new array containing only the squares of the even numbers from the original array.

const numbers = [5, 8, 25, 17, 85, 40, 36, 12, ];

const square = numbers.filter((num)=> num % 2 === 0).map((num)=> num * num);

console.log(square);


//2. Implementing ForEach:
//Implement a function myForEach that takes an array and a callback function and behaves like the forEach method. 
//It should apply the callback function to each element in the array.




//Bonus:
//1. Creating Custom Filter Function:
//Implement your own filter function named myFilter. 
//It should take an array and a callback function that returns a boolean. 
//myFilter should return a new array containing only the elements of the original array for which the callback function returns true.



