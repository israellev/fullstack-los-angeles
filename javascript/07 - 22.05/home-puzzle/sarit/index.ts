export{}

// 1. Sum the array Write a function that receive array of numbers (only) as a parameter, 
//  and return the result of all numbers together. 
//  for example from [1, 2, 3] it returns 6

// function sumArray(numbers: number[]): number {
//     let sum = 0;
//     for (const num of numbers) {
//       sum += num;
//     }
//     return sum;
//   }

//   2. max number in Array 
// Write a function that recive an array of numbers and returns the bigget number index.
// for example from [1, 2, 3] it returns 2 (the index of 3).

// function findMaxIndex(numbers: number[]): number {
//     let maxNumber = numbers[0];
//     let maxIndex = 0;
    
//     for (let i = 1; i < numbers.length; i++) {
//       if (numbers[i] > maxNumber) {
//         maxNumber = numbers[i];
//         maxIndex = i;
//       }
//     }
    
//     return maxIndex;
//   }

//   3. avg number in array
// Write a function that recive an array of numbers and returns the average number.
// for example from [1, 2, 3] it returns 2.

function calculateAverage(numbers: number[]): number {
    
    const sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
    const average = sum / numbers.length;
    return average;
  }
  
  const numbers = [5, 10, 15, 30, 50];
  console.log(calculateAverage(numbers)); // Output: 22

//   4. check if array contains the item
//   Write a function that recive an array and value, return true if the value exists in the array, and false if not.
//   for example from ([1, 2, 3], 4) it returns false.

//   function containsValue(array: any[], value: any): boolean {
//     for (const item of array) {
//       if (item === value) {
//         return true;
//       }
//     }
//     return false;
//   }