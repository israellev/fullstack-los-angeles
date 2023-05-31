export{}

// 1. Print Shopping List (forEach)
// You have a shopping list represented as an array of strings. Use the forEach function to print each item on the shopping list.

const shoppingList = ["milk", "bread", "potato", "cheese"]

shoppingList.forEach(function(string){
    console.log(string)
});
    
    // 2. Grocery Health Filter (filter): 
    // You have an array of grocery items. Some of them are healthy and some are not. Use the filter function to create a new array without 'cake' and 'candy' if they're exists.

const groceryItems = ["תפוחים", "עוגה", "תפו''א", "מלח", "סוכריות"];
function isHealthy(item) {
    return item !== "עוגה" && item !== "סוכריות";
    }
    const filteredItems = groceryItems.filter(isHealthy);{
        console.log(filteredItems); 

    }
  
  
// 3. Arr Temperature Conversion (map)
// You have an array of temperatures in Fahrenheit. Use the map function to convert each temperature to Celsius and save the results in a new array.
// for example from 

// 4. Get Array Types (map)
// a. Create a function that takes an array of different types of data (numbers, strings, arrays, objects, booleans)
// b. This function should use the map function to return a new array that indicates the type of each element in the input array.
// for example from [1, "", [], true] it'll return ['number', 'string', 'array', 'boolean']
