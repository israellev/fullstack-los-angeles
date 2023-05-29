export {};

/*  callback function */

const print = (value: any) => console.log(value);
print("Hey!!");

const runArray = (times: number, callback: (v: any) => void) => {
  for (let i = 0; i < times; i++) callback(i);
};

runArray(5, print);

// class puzzle:
// 1. Type Detector:
// Write a function detectType that takes an argument and prints out whether it's a string, number, boolean, function, or an array.
console.log("class puzzle: 1-------------------------");
function typeArg(input: any): any {
  return;
}
console.log(typeArg("yakov"));
// 2. Print Shopping List (forEach)
// You have a shopping list represented as an array of strings. Use the forEach function to print each item on the shopping list.

// 3. Grocery Filter (filter):
// You have an array of grocery items. Some of them are healthy and some are not. Use the filter function to create a new array without 'cake' and 'candy' if they're exists.

// 4. Temperature Conversion (map)
// You have an array of temperatures in Fahrenheit. Use the map function to convert each temperature to Celsius and save the results in a new array.
