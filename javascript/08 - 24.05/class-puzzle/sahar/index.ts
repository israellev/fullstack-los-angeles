// 1. Doubling an Array of Numbers
// Create a function named squareNumbers that takes an array of numbers and 
// returns a new array with the square of each number. Use the map function to achieve this.
// example: from [1, 2, 3, 4, 5] it returns [2, 4, 6, 8, 10]

function squareNumbers(numbers: number[]): number[] {
    return numbers.map(num => num*num)
}
const array = [3,4,5]
const mapFunction = (a) => (Math.pow(a,2));
console.log(squareNumbers(array))

// 2. Print Shopping List (forEach)
// You have a shopping list represented as an array of strings. 
// Use the forEach function to print each item on the shopping list.

const shoppingList = ["sugar","milk","bread","eggs"]

shoppingList.forEach((products) => {
    console.log(products)
})
