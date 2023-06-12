export {};
/////------------1
// Object Creation
// Create an object representing a book, which has properties like title, author, yearPublished and pages.
//  Then, print each property using dot notation.

const book: any = {
  name: "yzhak the hero",
  author: "avi beyene",
  yearPublished: 2015,
  pages: 200,
};
for (let item in book) {
  console.log(book[item]);
}
/////------------2
// Object Methods
// Continuing from the previous exercise, add a method getSummary to the book object,
//  which when called, returns a summary of the book as a string:
//  "title, written by author in yearPublished, contains pages pages".

const book1: any = {
  name: "yzhak the hero",
  author: "avi beyene",
  yearPublished: 2015,
  pages: 200,
  getSummary: function () {
    return `${this.title} write by ${this.author} in year ${this.yearPublished} number of pages ${this.pages}`;
  },
};
console.log(book.getSummary());

/////------------3
// Modifying Object Properties
// Add a property isRead to your book object (set to false initially).
// Then add a method readBook to the book object which changes the value of isRead to true.
