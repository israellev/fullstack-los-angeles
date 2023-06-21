export{}


// class puzzle:

// 1. Object Key-Value Printing
// Create a function that accepts an object and prints out each key-value pair in the format: key: value.

// 2. Object Array Manipulation
// Define an array of objects, each representing a person with properties "name" and "age". Use forEach to print each person's name and age, map to create an array of their ages, and filter to create a new array that only contains people older than 20.


// home puzzle:

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

const booksBefore1950 = library.filter(book => book.year < 1950);
 
console.log(booksBefore1950);


// 2. Create a list of all authors
// Use the map function to create a new array that consists of the author of each book in the library.
// Then use 'new Set' and 'Array.from()' to remove the duplicates.
// the result will be like:
// ["F. Scott Fitzgerald", "Richard Dawkins", "Harper Lee"] etc.

const authors = Array.from(new Set(library.map(book => book.author)));

console.log(authors);


// 3. Count books by genre
// Use the 'forEach' function to create an object where each key is a genre and each value is the number of books in that genre.
// the result will be:
// {
//     Fiction: 3
//     Science: 2,
//     Story: 1,
// }


const genresCount = {};

library.forEach(book => {
    const { genre } = book;
    if (genresCount[genre]) {
        genresCount[genre]++;
    } else {
        genresCount[genre] = 1;
    }
});

console.log(genresCount);

// 4. Create an array of book titles
// Use the map function to create a new array that contains the title of each book.

const bookTitles  = library.map(book => book.title);

console.log(bookTitles);

// 5. Find the book with the earliest publication year
// Use the 'forEach' function to find the book with the earliest publication year.

let earliestYear = Infinity ;
let earliestBook = null;

library.forEach(book => {
    if (book.year < earliestYear) {
earliestYear = book.year;
earliestBook = book ;
    }
});

console.log(earliestBook);

// 6. Sort the books by publication year
// Use the sort function to create a new array that contains the books sorted by their publication year.
// tip - read in GPT about 'sort' function (we didn't leaned that in the class).
// fromAtoZ
// fromZtoA

const sortedBooksstb = library.sort((a, b) => a.year - b.year);
 
const sortedBooksbts = library.sort((a, b) => b.year - a.year);



// Bonus:

// 1. Get average of list of objects
// Create a function getAverageScors that gets array of object with 'score' value, and return the average class score.
// (arrOfObj): number

