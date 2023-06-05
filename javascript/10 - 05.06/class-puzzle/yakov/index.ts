export {};

// Objects follow-up:

// 1. Object Creation
// Create an object representing a book, which has properties like title, author, yearPublished and pages. Then, print each property using dot notation.

const book: any = {
  title: "Rich Dad Poor Dad",
  author: "Robert T.Kiyosaki",
  yearPublished: "April 1 ,2000",
  pages: "336",
  getSummary: function () {},
};
console.log(book.title);
console.log(book.author);
console.log(book.yearPublished);
console.log(book.pages);

// 2. Object Methods
// // Continuing from the previous exercise, add a method getSummary to the book object,
//  which when called, returns a summary of the book as a string: "title, written by author in yearPublished,
// contains pages pages".
const books: any = {
  title: "Rich Dad Poor Dad",
  author: "Robert T.Kiyosaki",
  yearPublished: "April 1 ,2000",
  pages: "336",
  getSummary: function () {
    return (
      this.title +
      " , written by" +
      this.author +
      " in" +
      this.yearPublished +
      " ,contains" +
      this.pages +
      " ,pages"
    );
  },
};
console.log(books.title);
console.log(books.author);
console.log(books.yearPublished);
console.log(books.pages);
console.log(books.getSummary());
