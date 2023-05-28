export {}
// home puzzle:

// 1. Sum the array
// Write a function that receive array of numbers (only) as a parameter, 
// and return the result of all numbers together.
// for example from [1, 2, 3] it returns 6

// 2. max number in Array 
// Write a function that recive an array of numbers and returns the bigget number index.
// for example from [1, 2, 3] it returns 2 (the index of 3).

// 3. avg number in array
// Write a function that recive an array of numbers and returns the average number.
// for example from [1, 2, 3] it returns 2.

function Averagers(arr: number[]): number {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
      sum = sum + arr[i];
      
    }
    console.log(sum);
    const average = sum / arr.length;
    return average;
    
  }
  
  const numbers = [1, 2, 3];
  const result = Averagers(numbers);
  
  console.log(result); // Output: 8


// 4. check if array contains the item
// Write a function that recive an array and value, return true if the value exists in the array, and false if not.
// for example from ([1, 2, 3], 4) it returns false.

