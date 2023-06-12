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

// 2. Find Book by Title
// Create a function that accepts a book title as input and returns the full book object.
// (libraries: Book[], searchInput): Book[] | undefined

const bookTitle = "To Kill a Mockingbird"
function findBookByTitle(library: any[], searchInput) {
    let bookResult = library.find((library) => library.title === searchInput)
    return bookResult;  
}
console.log(findBookByTitle(library,bookTitle));

function findBookByWord(library,textSearch) {
    const books = library.filter(book => {
        return book.title.toLowerCase().includes(textSearch.toLowerCase().trim())
    })
    return books
}

console.log(findBookByWord(library,"Gene "))



