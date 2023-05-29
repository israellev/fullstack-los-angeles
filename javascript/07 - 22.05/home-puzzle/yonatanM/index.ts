export {}

// class puzzle:
// 1. 'printState', fisrt and last of string
// Write a function that calls 'printState' that get 'str' parameter and print the fisrt and last string.
// (str: string) => string

// 2. stringValidation
// Create a function that takes in a string, removes whitespace from both ends, converts it to lower case and then replaces all occurrences of the letter 'a' with 'b'. Make sure the function throws an error if something other than a string is input. 
// for example from " aaa " it will returs "bbb".
// hint: 'const isString = isNaN(Number(str))'
// (str: string) => string

// 3. create dynamicArray 
// Creat a function that received a 'num' and return array of numbers 
// that start from 0 to the number of the 'num'. 
// for example user enter 3, the function return [0, 1, 2, 3], etc. 
// (num: number) => number[]


// home puzzle:

// 1. Sum the array
// Write a function that receive array of numbers (only) as a parameter, 
// and return the result of all numbers together.
// for example from [1, 2, 3] it returns 6

// 2. max number in Array 
// Write a function that recive an array of numbers and returns the bigget number index.
// for example from [1, 2, 3] it returns 2 (the index of 3).
// (arr: number[]) => number

// 3. avg number in array
// Write a function that recive an array of numbers and returns the average number.
// for example from [0, 1, 2, 3] it returns 1.5.
// (arr: number[]) => number

// 4. check if array contains the item
// Write a function that recive an array and value, return true if the value exists in the array, and false if not.
// for example from ([1, 2, 3], 4) it returns false.
// (arr: number[], num: number) => boolean

function Checker(arr, value: number[]): boolean {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === value)
      return true;
    }
    return false;
  }
  
  const arr[] = prompt("enter a list of numbers") 
  
  console.log(result); // Output: total average
  
//   this is how chatGPT gets an array from the user using prompt, and than user inserts a IDBCursorWithValue
//   and we check
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
  

// 5. First Letter
// Write a funtion that gets array of names and return array with first letter of those names in upper case.
// for example from ["liad", "sarit"] it returns ["S", "L"]

function capitalizeName(arr) {
    /*
    Function to capitalize the first letter of each name in an array.
  
    Parameters:
    arr (array): The input array containing names.
  
    Returns:
    array: An array of names with the first letter capitalized.
    */
    var capitalizedNames = arr.map(function(name) {
      return name.charAt(0).toUpperCase() + name.slice(1);
    });
  
    return capitalizedNames;
  }

var names = ["john", "emma", "peter"];

var capitalizedNames = capitalizeName(names);
console.log(capitalizedNames);  // Output: ["John", "Emma", "Peter"]

// 6. Capital Letters
// Write a funtion that gets array of names and return array with those names in capital letter.
// for example from ["liad", "sarit"] it returns ["Liad", "Sarit"]
// (I already showed)

// 7. Upside Down
// Write a funtion that gets array of names and return array with those names in upside order.
// for example from ["liad", "sarit"] it returns ["sarit", "liad"]


