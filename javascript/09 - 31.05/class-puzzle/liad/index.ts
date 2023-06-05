export {}

// class-puzzle :

// 1.Filter out non-string types and trim whitespace (map)

// Write a function that accepts an array of different types of data. It should first use the filter function to keep only the elements that are of type string, and then use map to return a new array where each string has been trimmed of whitespace using the trim() function.
// for example from [" banana", 1, "apple "] it return ["banana", "apple"]


  
  function filterAndTrimStrings (arr) {

    return arr
    .filter(item => typeof item === 'string')
    .map (item => item.trim())

  }

  const data = [" banana" ,1 , "apple "] ;
  const result = filterAndTrimStrings(data)
  console.log(result)

  

// 3. function getFirstAndLast:
// from example from [1, 2, 3] it'll return [1, 3] (the first and last item only)
// than use extraction to save 1 and 2 to "first" and "last" variables.

function getFirstAndLast(arr) { 
    return [arr[0], arr[arr.length - 1]];
  }
  
 
  const originalArray = [1, 2, 3];
  const newArray = getFirstAndLast(originalArray);
  
  console.log(newArray); 
 
  
//   home puzzle:

// Bonuses - arrays:



