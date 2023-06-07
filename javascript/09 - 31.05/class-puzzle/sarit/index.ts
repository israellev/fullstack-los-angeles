export {}

// 1. Filter out non-string types and trim whitespace (map)

// Write a function that accepts an array of different types of data. It should first use the filter function to keep only the elements that are of type string, and then use map to return a new array where each string has been trimmed of whitespace using the trim() function.
// for example from [" banana", 1, "apple "] it return ["banana", "apple"]

function filterStrins(arr:any[]): string[] {
    const stringOnly= arr.filter((element) => typeof element === "string");

    const trimmedArr = stringOnly.map((element) => element.trim());
    return trimmedArr;

}

const arr= ["I", "you", "they", 40, 50,"we"];
const result = filterStrins(arr);
console.log(result);
