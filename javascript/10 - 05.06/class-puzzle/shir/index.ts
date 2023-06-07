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

//home puzzle1:

const bookslist1= library.filter(book=>  book.year < 1950 );

console.log(bookslist1);


//home puzzle 2:

const allauthors= library.map (book=> book.author);
const newarrayauthors= Array.from(new Set(allauthors))
console.log(allauthors);
console.log(newarrayauthors);

//home puzzle 3:

const booksgenre= {};

library.forEach(book=> {
    const {genre}= book;

})



//home puzzle 4:  למה בעצם זה מחזיר לי מערך אם לא כתבתי בשם מקום שזה מערך?

const titels= library.map(book=> book.title);
console.log (titels); 

// home puzzle 5:  מתי אני משתמשת בפונקציה ומתי בקונסט כדי להתחיל את התשובה?

function earliestyear(num: number): number {

library.forEach(book=> book.year < )

}



// home puzzle 6:
const publicationyear= library.sort()