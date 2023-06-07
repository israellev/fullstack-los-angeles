export { }
// שאלה מספר 1
// const book: any = {

//     titel: "shir",
//     author: "shir malka",
//     year: 1989,
//     pages: 33,


// }

// console.log(book.titel);
// console.log(book.author);
// console.log(book.year);
// console.log(book.pages);


// // שאלה מספר 2

// const book: any = {

//     titel: "shir",
//     author: "shir malka",
//     year: 1989,
//     pages: 33,
//     getSummary: function () {
//         return `${this.titel} ${this.author} ${this.year} ${this.pages}`
//     }

// }

// console.log(book.getSummary())
// // שאלה 3

// const book: any = {

//     titel: "shir",
//     author: "shir malka",
//     year: 1989,
//     pages: 33,
//     isRead: false,

//     readBook: function () {
//         book.isRead = true
//     },

// }


// console.log(book.isRead)
// book.readBook();
// console.log(book.isRead)



//home puzzle:
const state = {
    earliestYear: 1925,
    bookIndex: 2,
}
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

//home puzzle1:

const bookslist1= library.filter(book=>  book.year < 1950 );

console.log(bookslist1);


//home puzzle 2:

const allauthors= library.map (book=> book.author);
const newarrayauthors= Array.from(new Set(allauthors))
console.log(allauthors);
console.log(newarrayauthors);

//home puzzle 3:
/* {
    Fiction: 3,
    Science: 2,
    Story: 1,
}
 */
const booksgenre = {};
booksgenre["Finction"] // undefined

library.forEach(book=> {
    //const genre = book.genre;  // "Fiction"
    const {genre, year} = book;
    if (booksgenre[genre])
        booksgenre[genre] ++
    else
        booksgenre[genre] = 1
})
console.log(booksgenre)


//home puzzle 4:  למה בעצם זה מחזיר לי מערך אם לא כתבתי בשם מקום שזה מערך?

const titels= library.map((book)=> book.title);
console.log (titels); 

// home puzzle 5:  מתי אני משתמשת בפונקציה ומתי בקונסט כדי להתחיל את התשובה?

/* const years = library.map(book => book.year) // [1960, 1988, 1925, 1949, 1976, 1980]
Math.min(...years) // 1925
 */

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



// 
const years= library.year
const storebooks= library.sort( ())