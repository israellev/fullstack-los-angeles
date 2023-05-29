export { }
//  class puzzle 
// 1. Doubling an Array of Numbers
// Create a function named squareNumbers that takes an array of numbers and returns a new array with the square of each number. Use the map function to achieve this.
// example: from [1, 2, 3, 4, 5] it returns [2, 4, 6, 8, 10]

function squareNumbers(arr:number[]):number[] {
  return arr.map((n)=> n*n)
}

const arr =[1, 2, 3, 4, 5];
const daniel = squareNumbers(arr)
console.log(daniel)

