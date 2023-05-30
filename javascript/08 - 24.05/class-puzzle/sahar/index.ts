// 1. Doubling an Array of Numbers
// Create a function named squareNumbers that takes an array of numbers and 
// returns a new array with the square of each number. Use the map function to achieve this.
// example: from [1, 2, 3, 4, 5] it returns [2, 4, 6, 8, 10]

function squareNumbers(numbers: number[]): number[] {
    return numbers.map(num => num*num)
}
const array = [3,4,5]
console.log(squareNumbers(array))

// 2. Print Shopping List (forEach)
// You have a shopping list represented as an array of strings. 
// Use the forEach function to print each item on the shopping list.

const shoppingList = ["sugar","milk","bread","eggs"]

shoppingList.forEach((products) => {
    console.log(products)
})

// 3. Grocery Filter (filter): 
// You have an array of grocery items. Some of them are healthy 
// and some are not. Use the filter function to create a new array without 'cake' and 'candy' if they're exists.

const groceryItems = ["cheese", "carrots", "cake", "bread", "candy"].filter(pro => pro !== "cake" && "candy")
console.log(groceryItems);


// 4. Temperature Conversion (map)
// You have an array of temperatures in Fahrenheit. Use the map function to convert each temperature to Celsius 
// and save the results in a new array.

const fahrenheitTemperture = [20,30,50,44]

function convertTemperture (numbers: number[]): number[] {
    return numbers.map(a => (a-32)/1.8)
};

console.log(convertTemperture(fahrenheitTemperture))


