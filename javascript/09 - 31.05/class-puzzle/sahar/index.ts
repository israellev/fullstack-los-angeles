export {}

// 1. Filter out non-string types and trim whitespace (map)

// Write a function that accepts an array of different types of data. 
// It should first use the filter function to keep only the elements that are of type string, 
// and then use map to return a new array where each string has been trimmed of whitespace 
// using the trim() function.
// for example from [" banana", 1, "apple "] it return ["banana", "apple"]

const array = [" banana", 1, "apple "];

function filterAndTrim() {
  const newArr = array
    .filter(item => typeof item === 'string')
    .map((item :string) => item.trim());
  return newArr;
}

console.log(filterAndTrim());

// 2. function ReplaceItemInArray (map)
// Write a function reaplaceItem that:
// a. find the 'itemToReplace' in the array, and replace it with 'replaceWith',
// b. return the new array.
// (arr: sting[], itemToReplace: string, replaceWith: string): string[]
// for example from itemToReplace(["shir", "yakov"], "yakov", "sapir")
// it will return ["shir", "sapir"].

function replaceItemInArray(arr: string[], itemToReplace : string, replaceWith: string) {
    return arr.map(item => {
      if (item === itemToReplace) {
        return replaceWith;
      } else {
        return item;
      }
    });
}
  
const array = ["shir", "yakov"];
const newItem = "sapir";
const replacedArray = replaceItemInArray(array, "yakov", newItem);

console.log(replacedArray);

// 3. function getFirstAndLast:
// from example from [1, 2, 3] it'll return [1, 3] (the first and last item only)
// than use extraction to save 1 and 2 to "first" and "last" variables.

function getFirstAndLast(arr) {
    const [first, ...rest] = arr;
    const last = rest.pop();
    return [first, last];
  }
  
  const array = [1, 2, 3];
  const [first, last] = getFirstAndLast(array);
  
  console.log(first); // Output: 1
  console.log(last); // Output: 3