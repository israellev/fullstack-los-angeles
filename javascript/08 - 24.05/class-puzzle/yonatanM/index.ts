export {}

// class puzzle:

// 1. Doubling an Array of Numbers
// Create a function named squareNumbers that takes an array of numbers and returns a new array with the square 
//of each number. Use the map function to achieve this.
// example: from [1, 2, 3, 4, 5] it returns [2, 4, 6, 8, 10]

function squareNumbers(arr: ){
    const numbers = [1, 2, 3, 4, 5];
    const squaredNumbers = numbers.map(function(num) {
      return num * num;
    });
    
}
console.log(squaredNumbers);  // Output: [1, 4, 9, 16, 25]

a.map()

// 2. Convert list of names to capital letters
// Create a function named capitalNames that takes an array of strings and returns a new array with same string in capital first letter. Use the map function to achieve this.
// example: from ["john", "smith"] it returns ["John", "Smith"]

// 3. Type Detector:
// Write a function detectType that takes an argument and prints out whether it's a string, number, boolean, function, or an array.

// ----------

// 4. Print Shopping List (forEach)
// You have a shopping list represented as an array of strings. Use the forEach function to print each item on the shopping list.

// 5. Grocery Filter (filter): 
// You have an array of grocery items. Some of them are healthy and some are not. Use the filter function to create a new array without 'cake' and 'candy' if they're exists.

// 6. Temperature Conversion (map)
// You have an array of temperatures in Fahrenheit. Use the map function to convert each temperature to Celsius and save the results in a new array.
