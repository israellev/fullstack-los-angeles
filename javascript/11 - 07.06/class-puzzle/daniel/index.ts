export {}


// 1. Sort the books by publication year
// Use the sort function to create a new array that contains the books sorted by their publication year.
// tip - read in GPT about 'sort' function (we didn't leaned that in the class).
// a. fromAtoZ
// b. fromZtoA



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
// sort =  משמשת למיון מערך בפונקציה הזאת ממיין את השנים מהקטן לגדול
 const libararyAtoZ =[...library].sort(function(a,b){
    return a.year- b.year; 
});

console.log(libararyAtoZ);

const libararyZtoA =[...library].sort(function(a,b){
    return b.year- a.year; 
});

console.log(libararyZtoA);
//------------------------------------------------------------------

// 2. Find Book by Title
// Create a function that accepts a book title as input and returns the full book object.
// (libraries: Book[], searchInput): Book[] | undefined

const bookTitle = "To Kill a Mockingbird" //פתחתי משתנה בשם בוק טייטל ואת הכותרת מהספר שאני רוצה לחפש
function getBookByTitle(library: any[], searchInput) { // פתחתי פונקציה בשם + פרמטר של המערך ספרים ועוד פרמטר שהוא שווה ל משתנה בוק סטייל פשוט בשם אחר 
    let bookResult = library.find((library) => library.title === searchInput) //פתחתי משתנה בשם = המערך ספרים ופקודת פיינד מחפשת את הכותרת מהספר 
    return bookResult;  // מבקש שיחזיר לי את המשתנה החדש לאחר כל התרגיל חיפוש 
}
console.log(getBookByTitle(library,bookTitle)) // מדפיס את הפונקציה ואת המערך ספרים ואת התרגיל חיפוש 