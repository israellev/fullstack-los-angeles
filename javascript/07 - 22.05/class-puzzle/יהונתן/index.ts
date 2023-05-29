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
// Write a function that recive an array of numbers and returns 
//the average number.
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
  
  const numbers = [1, 2, 3, 9, 10];
  const result = Averagers(numbers);
  
  console.log(result); // Output: total average


// 4. check if array contains the item
// Write a function that recive an array and value, 
//return true if the value exists in the array, and false if not.
// for example from ([1, 2, 3], 4) it returns false.

function Checker(arr, value: number[]): boolean {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === value)
    return true;
  }
  return false;
}

const arr[] = prompt("enter a list of numbers") 

console.log(result); // Output: total average

this is how chatGPT gets an array from the user using prompt, and than user inserts a IDBCursorWithValue
and we check
function checkValueInArray() {
  // Get user input for the array
  var arrInput = prompt("Enter numbers separated by commas:");

  // Convert the input string into an array
  var arr = arrInput.split(",").map(Number);

  // Get user input for the value to check
  var value = Number(prompt("Enter a number to check:"));

  // Check if the value exists in the array
  var result = arr.includes(value);

  // Output the result
  if (result) {
    alert("The value exists in the array!");
  } else {
    alert("The value does not exist in the array.");
  }
}

// Call the function to start the process
checkValueInArray();
