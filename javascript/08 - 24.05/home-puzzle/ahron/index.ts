 export{}
//  1. Doubling an Array of Numbers
//  Create a function named squareNumbers that takes an array of numbers and returns a new array with the square of each number. Use the map function to achieve this.
//  example: from [1, 2, 3, 4, 5] it returns [2, 4, 6, 8, 10]function squareNumbers(numbers) {

function squareNumbers(arr:number[]):number[]{ 
  const newsquar=arr.map((num)=>num**2)
  return newsquar
};

const square = [1,2,3,4,5];
console.log(squareNumbers(square));
