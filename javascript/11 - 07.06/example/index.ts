export {}

let library = [
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
        title: "The Great Gatsby",
        author: "F. Scott Fitzgerald",
        genre: "Fiction",
        year: 1925
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


/* distract array to function parameters  */

/* const years = library.map(book => book.year) // [1925, 1960, 1988, 1949, 1976, 1980]
// instead of Math.min(1925, 1960, 1988, 1949, 1976, 1980) we can use:
Math.min(...years) // 1925
 */

/* Solution for home-puzzle number 5 */

const state = {
    earliestYear: 1925,
    bookIndex: 2,
}

library.forEach((book, index) => {
    if (!state.earliestYear || book.year < state.earliestYear) {
        state.earliestYear = book.year;
        state.bookIndex = index
    }
})
const chosenBook = library[state.bookIndex]
