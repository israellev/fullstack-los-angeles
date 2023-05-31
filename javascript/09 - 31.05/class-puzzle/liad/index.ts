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


  // 2. function ReplaceItemInArray (map)
// Write a function reaplaceItem that:
// a. find the 'itemToReplace' in the array, and replace it with 'replaceWith',
// b. return the new array.
// (arr: sting[], itemToReplace: string, replaceWith: string): string[]
// for example from itemToReplace(["shir", "yakov"], "yakov", "sapir")
// it will return ["shir", "sapir"].

