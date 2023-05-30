export {}

// 1. Doubling an Array of Numbers
// Create a function named squareNumbers that takes an array of numbers and returns a new array with the square of each number. Use the map function to achieve this.
// example: from [1, 2, 3, 4, 5] it returns [2, 4, 6, 8, 10]

  function squareNumbers (numbers) {
     return numbers.map((m) => m * m);
  }

const numbers = [1, 2, 3, 4, 5];
const squaredNumbers = squareNumbers(numbers);
console.log(squaredNumbers)

// 2. Convert list of names to capital letters
// Create a function named capitalNames that takes an array of strings and returns a new array with same string in capital first letter. Use the map function to achieve this.
// example: from ["john", "smith"] it returns ["John", "Smith"]

function capitalNames(names) {  
    return names.map(function(name) {
      return name.charAt(0).toUpperCase() + name.slice(1);
    });
  }
  
  const names = ["liad", "daniel"];
  const capitalizedName = capitalNames(names);
  console.log(capitalizedName);

// 4.Get Array Types (map)
// a. Create a function that takes an array of different types of data (numbers, strings, arrays, objects, booleans)
// b. This function should use the map function to return a new array that indicates the type of each element in the input array.
// for example from [1, "", [], true] it'll return ['number', 'string', 'array', 'boolean']
  
function getArrayTypes(arr) {
    return arr.map(function(item) {
      return typeof item;
    });
  }
  
  const data = [1, "", [], true];
  const types = getArrayTypes(data);
  console.log(types);
  

















