export{}
 
///follow up


// 1. Object Creation
// Create an object representing a book, which has properties like title, author, yearPublished and pages. Then, print each property using dot notation.
  

// const book:any = {
  
//   name:`ahron dawit`,

//   page : 400 ,
//   yearPublished: 2005,
// };
 
// console.log (book.name);
// console.log(book.page);



// 2. Object Methods
// Continuing from the previous exercise, add a method getSummary to the book object, which when called, returns a summary of the book as a string: "title, written by author in yearPublished, contains pages pages".
 
 const book : any = {

title :`full stack`,
author :`ahron dawit`,
yearPublished : 2023, 
page : 200,

getSummary:function(){
return `${this.title},written by ${this.author}in,${this.yearPublished}contains,${this.page}pages`   
},
}
