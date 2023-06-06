export {}


// Objects follow-up:

// 1. Object Creation
// Create an object representing a book, 
// which has properties like title, author, yearPublished and pages. 
// Then, print each property using dot notation.

// const book1:any = {

//     title : "New houses",
//     author : "israel lev",
//     yearPublished : 2002,
//     numOfPages : 101,

// }

// console.log(book1.title)
// console.log(book1.author)
// console.log(book1.yearPublished)
// console.log(book1.numOfPages)

// const book2: any = {

//     title : "old houses",
//     author : "ishay lev",
//     yearPublished : 2000,
//     numOfPages : 99,

// }

// 2. Object Methods
// Continuing from the previous exercise, 
// add a method getSummary to the book object, which when called, 
// returns a summary of the book as a string: "title, written by author in yearPublished, 
// contains pages pages".

const book1:any = {

    title : "New houses",
    author : "israel lev",
    yearPublished : 2002,
    numOfPages : 101,

};

console.log(book1.title)
console.log(book1.author)
console.log(book1.yearPublished)
console.log(book1.numOfPages)


function getSummary(book1) {
    const { title, author, yearPublished, numOfPages } = book1;
    return `${title}, written by ${author} in ${yearPublished}, contains ${numOfPages} pages.`;
  }
  

  
  const summary = getSummary(book1);
  console.log(summary); // Output: 
  

// 3. Modifying Object Properties
// Add a property isRead to your book object (set to false initially). Then add a method readBook to the book object which changes the value of isRead to true.
