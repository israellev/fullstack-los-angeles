export {};

// Doubling an Array of Numbers
// Create a function named squareNumbers that takes an array of numbers and returns a new array with the square of each number. Use the map function to achieve this.
// example: from [1, 2, 3, 4, 5] it returns [2, 4, 6, 8, 10]

// function squareNumbers(arr: number[]): number[] {
//   const squareNumbersNew = arr.map((number) => number * 2);
//   return squareNumbersNew;
// }

// const arr = [1, 2, 3, 4, 5];
// console.log(squareNumbers(arr));

//////------------
function capitalNames(names: string[]): string[] {
  return names.map((name) => name.charAt(0).toUpperCase() + name.slice(1));
}

const names: string[] = ["john", "smith"];
const capitalizedNames: string[] = capitalNames(names);
console.log(capitalizedNames);

/////////-------------------home puzzle:

// /// 1 Print Shopping List (forEach)
// You have a shopping list represented as an array of strings. Use the forEach function to print each item on the shopping list.

const shoppingList = ["apple", "banana", "orange", "milk"];

shoppingList.forEach((item) => {
  console.log(item);
});

///////////-------------2
const groceryItems = ["apple", "banana", "cake", "orange", "candy", "milk"];

const filteredItems = groceryItems.filter(
  (item) => item === "cake" || item === "candy"
);

console.log(filteredItems);
