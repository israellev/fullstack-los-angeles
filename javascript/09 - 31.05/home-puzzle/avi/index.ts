export {}

// Class puzzle - Practice arrys:

// 1. Filter out non-string types and trim whitespace (map)

// Write a function that accepts an array of different types of data. It should first use the filter function to keep only the elements that are of type string, and then use map to return a new array where each string has been trimmed of whitespace using the trim() function.
// for example from [" banana", 1, "apple "] it return ["banana", "apple"]

// function filterAndTrimStrings(arr) {

//     const filterAndMapArray = arr.filter((arr) => typeof arr === 'string').map((filterArray) => filterArray.trim()) 

//     return filterAndMapArray;
//   }
//   const arr = [" candy", 1, "google ",1235, "      amazon"];
//   const result = filterAndTrimStrings(arr);
//   console.log(result); 
 
// 2. function replaceItemInArray (map)
// Write a function reaplaceItem that:
// a. find the 'itemToReplace' in the array, and replace it with 'replaceWith',
// b. return the new array.
// (arr: sting[], itemToReplace: string, replaceWith: string): string[]
// for example from itemToReplace(["shir", "yakov"], "yakov", "sapir")
// it will return ["shir", "sapir"].

//   opttion 1
console.log("option 1 ");

function replaceItemInArray(arr1, itemToReplace, replaceWith) {
    const newArr = arr1.map((item) => (item === itemToReplace ? replaceWith : item));
    return newArr;
  }
  
  const arr1 = ["shir", "yakov"];
  const itemToReplace = "yakov";
  const replaceWith = "sapir";
  const result1 = replaceItemInArray(arr1, itemToReplace, replaceWith);
  console.log(result1);



//   opttion 2
console.log("option 2 ");

function replaceItemInArray1(arr2, itemToReplace2, replaceWith2) {
    const newArr = arr2.map((item) => {
      console.log("Current item:", item);
      if (item === itemToReplace2) {
        console.log("Replacing item:", item);
        return replaceWith2;
      } else {
        console.log("Keeping item:", item);
        return item;
      }
    });
    console.log("New array:", newArr);
    return newArr;
  }
  
  const arr2= ["shir", "yakov"];
  const itemToReplace2= "yakov";
  const replaceWith2 = "sapir";
  const result2= replaceItemInArray1(arr2, itemToReplace2, replaceWith2);
  console.log("Final result:", result2);
  
// 3. function getFirstAndLast:
// from example from [1, 2, 3] it'll return [1, 3] (the first and last item only)
// than use extraction to save 1 and 2 to "first" and "last" variables.

function getFirstAndLast(arr3:number[]) : number[]{
        let first, last;
        
        arr3.map((item, index, array) => {
          if (index === 0) {
            first = item; 
          } else if (index === array.length - 1) {
            last = item; 
          }
        });
        
        return [first, last];
      }
      
      
      const arr3 = [1,2,3,4,5,6];
      const [first, last] = getFirstAndLast(arr3);
      console.log("First item:", first); // 1
      console.log("Last item:", last); // 3