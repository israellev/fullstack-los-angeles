export{}

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

// // 1. Find all books published before 1950
// // Use the 'filter' function to create a new array that only contains books from the library array 
// // that were published before 1950.

// const publishedyear = library.filter((book) => book.year < 1950);
// console.log(`The books that were published before 1950 are `, publishedyear);

// // 2. Create a list of all authors
// // Use the map function to create a new array that consists of the author of each book in the library.
// // Then use 'new Set' and 'Array.from()' to remove the duplicates.
// // the result will be like:
// // ["F. Scott Fitzgerald", "Richard Dawkins", "Harper Lee"] etc.

// const authorArray = [];
// let authors = library.map((book) => book.author);
// authorArray.push(...authors)
// const result = Array.from(new Set(authorArray));//הסט מוריד את הכפילויות מהמערך ומכניס אותו לסוגריים } והאריי-פורם מכניס אותו בחזרה למערך - סוגריים מרובעות
// console.log(result);

// // 3. Count books by genre
// // Use the forEach function to create an object where each key is a genre and each value 
// // is the number of books in that genre.
// // the result will be:
// // {
// //     Fiction: 3
// //     Science: 2,
// //     Story: 1,
// // }

// const genreCount = {};

// library.forEach((book) => {
//     const { genre } = book; //"fiction">forEach starts to interate through the genre of the the books
//     if (genreCount[book.genre]) //if it excist in the genreCount it added as a number to the object genreCount
//         genreCount[book.genre]++; //if it doesn't excist it goes to "else" and restart the counting as number 1 = first time it shows
//     else
//         genreCount[book.genre] = 1 
// });
// console.log(genreCount)

// // 4. Create an array of book titles
// // Use the map function to create a new array that contains the title of each book.
// const newTitleArray = [];
// library.map((book) => newTitleArray.push(book.title));
// console.log(newTitleArray); //איך מכניסים את הערכים של הכותרות לתוך *מערך* חדש?

// // 5. Find the book with the earliest publication year
// // Use the 'forEach' function to find the book with the earliest publication year.

// let earliestBook = library[0]; 

// library.forEach(book => {
//   if (book.year < earliestBook.year) {
//     earliestBook = book; 
//   }
// });
// console.log(earliestBook);

// 6. Sort the books by publication year
// Use the sort function to create a new array that contains the books sorted by their publication year.
// tip - read in GPT about 'sort' function (we didn't leaned that in the class). fromAtoZ
//fromZtoA

//years sort:
const yearsArray = [...library].sort((a,b) => a.year-b.year)
console.log(yearsArray)

// 2. Find Book by Title
// Create a function that accepts a book title as input and returns the full book object.
// (libraries: Book[], searchInput): Book[] | undefined

const bookTitle = "To Kill a Mockingbird"
function getBookByTitle(library: any[], searchInput) {
    let bookResult = library.find((library) => library.title === searchInput)
    return bookResult;  
}
console.log(getBookByTitle(library,bookTitle))



