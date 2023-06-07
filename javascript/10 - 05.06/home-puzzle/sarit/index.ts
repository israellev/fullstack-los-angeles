export {}

// this is the data you got:

let library = [
    {
        title: "The Great Gatsby",
        author: "F. Scott Fitzgerald",
        genre: "Fiction",
        year: 1925
    },
    {
        title: "To Kill a Mockingbird",
        author: "Harper Lee",
        genre: "Fiction",
        year: 1960
    },
    {
        title: "A Brief History of Time",
        author: "Stephen Hawking",
        genre: "Science",
        year: 1988
    },
    {
        title: "1984",
        author: "George Orwell",
        genre: "Fiction",
        year: 1949
    },
    {
        title: "The Selfish Gene",
        author: "Richard Dawkins",
        genre: "Science",
        year: 1976
    },
    {
        title: "The Fishing Lake",
        author: "Richard Dawkins",
        genre: "Story",
        year: 1980
    }
]

// 1. Find all books published before 1950
// Use the 'filter' function to create a new array that only contains books from the library array that were published before 1950.

let underFiftys = library.filter(book => book.year < 1950);

console.log(underFiftys);

// 2. Create a list of all authors
// Use the map function to create a new array that consists of the author of each book in the library.
// Then use 'new Set' and 'Array.from()' to remove the duplicates.
// the result will be like:
// ["F. Scott Fitzgerald", "Richard Dawkins", "Harper Lee"] etc.

let authorsList = library.map(book => book.author);
let uniqueAuthorsSet = new Set(authorsList);
let oneNameEach = Array.from(uniqueAuthorsSet);

console.log(oneNameEach);