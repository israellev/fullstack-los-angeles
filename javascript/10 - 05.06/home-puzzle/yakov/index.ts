export {};

// home puzzle:

// this is the data you got:

let library = [
  {
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    genre: "Fiction",
    year: 1925,
  },
  {
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    genre: "Fiction",
    year: 1960,
  },
  {
    title: "A Brief History of Time",
    author: "Stephen Hawking",
    genre: "Science",
    year: 1988,
  },
  {
    title: "1984",
    author: "George Orwell",
    genre: "Fiction",
    year: 1949,
  },
  {
    title: "The Selfish Gene",
    author: "Richard Dawkins",
    genre: "Science",
    year: 1976,
  },
  {
    title: "The Fishing Lake",
    author: "Richard Dawkins",
    genre: "Story",
    year: 1980,
  },
];

// 1. Find all books published before 1950
// Use the 'filter' function to create a new array that only contains books from
// the library array that were published before 1950.
console.log("home puzzle 1 --------------");
const books1950 = library.filter(function (published) {
  return published.year < 1950;
});
console.log(books1950);

// 2. Create a list of all authors
// Use the map function to create a new array that consists of the author of
//  each book in the library.
// Then use 'new Set' and 'Array.from()' to remove the duplicates.
// the result will be like:
// ["F. Scott Fitzgerald", "Richard Dawkins", "Harper Lee"] etc.
console.log("home puzzle 2 --------------");
const newarrrr = [];
const listofallauthors = library.map((book) => book.author);
newarrrr.push(listofallauthors);
const result = Array.from(new Set(newarrrr));
console.log(result);

// 3. Count books by genre
// Use the 'forEach' function to create an object where each key is a genre and each value is the number of books in that genre.
// the result will be:
// {
//     Fiction: 3
//     Science: 2,
//     Story: 1,
// }

// 4. Create an array of book titles
// Use the map function to create a new array that contains the title of each book.

// 5. Find the book with the earliest publication year
// Use the 'forEach' function to find the book with the earliest publication year.

// 6. Sort the books by publication year
// Use the sort function to create a new array that contains the books sorted by their publication year.
// tip - read in GPT about 'sort' function (we didn't leaned that in the class).
// fromAtoZ
// fromZtoA

// Bonus:

// 1. Get average of list of objects
// Create a function getAverageScors that gets array of object with 'score' value, and return the average class score.
// (arrOfObj): number
