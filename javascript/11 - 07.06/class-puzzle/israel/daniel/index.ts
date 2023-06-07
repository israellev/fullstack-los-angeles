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