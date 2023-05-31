export {}

// 1. Print Shopping List (forEach)
// You have a shopping list represented as an array of strings. Use the forEach function to print each item on the shopping list.

// function printShoppingList(shoppingList: string[]): void {
//     shoppingList.forEach(item => console.log(item));
//   }
  
//   // Example usage
//   const shoppingList = ["dress", "skirt", "shoes", "t-shirt"];
//   printShoppingList(shoppingList);


// 2. Grocery Health Filter (filter): 
// You have an array of grocery items. Some of them are healthy and some are not. Use the filter function to create a new array without 'cake' and 'candy' if they're exists.

function filterGroceryItems(groceryItems: string[]): string[] {
    const unhealthyItems = ['cake', 'candy'];
    return groceryItems.filter(item => !unhealthyItems.includes(item));
  }
  
//   // Example usage
const groceryItems = ['apple', 'cake', 'banana', 'candy', 'carrot'];
console.log(groceryItems)
const filteredItems = filterGroceryItems(groceryItems);
console.log(filteredItems);


// 3. Arr Temperature Conversion (map)
// You have an array of temperatures in Fahrenheit. Use the map function to convert each temperature to Celsius and save the results in a new array.
// for example from 

// function convertToFahrenheit(temperaturesFahrenheit: number[]): number[] {
//     return temperaturesFahrenheit.map(temperature => (temperature - 32) * (5 / 9));
//   }
  
//   // Example usage
//   const temperaturesFahrenheit = [32, 68, 86, 104];
//   const temperaturesCelsius = convertToFahrenheit(temperaturesFahrenheit);
//   console.log(temperaturesCelsius);

// 4. Get Array Types (map)
// a. Create a function that takes an array of different types of data (numbers, strings, arrays, objects, booleans)
// b. This function should use the map function to return a new array that indicates the type of each element in the input array.
// for example from [1, "", [], true] it'll return ['number', 'string', 'array', 'boolean']

// function getArrayTypes(arr: any[]): string[] {
//     return arr.map(item => typeof item);
//   }
  
//   // Example usage
//   const data = [1, "", [], true];
//   const types = getArrayTypes(data);
//   console.log(types);