export {}

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
//1. Sort the books by publication year
// Use the sort function to create a new array that contains the books sorted by their publication year.
// tip - read in GPT about 'sort' function (we didn't leaned that in the class).

//מהשנה המוקדת ביותר
const sortedBooks = library.sort((book1, book2) => {// פונקצית סורט משווה בין ערכים באמצעות הפחתה של ערך אחד מהשני אז נעשה משתנה חדש שיקבל את המערך הספריה ונשתמש בפונקצית סורט וניתן לה את הערכים להשוואה
    return book1.year - book2.year;//אנחנו נפחית את הערכים אחד מהשני ובמידה והתוצאה של ההפחתה שלילית אז זה אומר שהספר זה אומר שהשנה של הספר הראשון מוקדמת יותר ואם זה מספר חיובי אז השנה של הספר השני היא מוקדמת יותר
  });
  
  console.log("Sorted Books:", sortedBooks);

  //מהשנה המאוחרת ביותר
  const sortedBooks2 = library.sort((book1, book2) => {// פונקצית סורט משווה בין ערכים באמצעות הפחתה של ערך אחד מהשני אז נעשה משתנה חדש שיקבל את המערך הספריה ונשתמש בפונקצית סורט וניתן לה את הערכים להשוואה
    return book2.year - book1.year;
  });
  console.log("Sorted Books:", sortedBooks2);
  

  //  2. Find Book by Title
// Create a function that accepts a book title as input and returns the full book object.
// (libraries: Book[], searchInput): Book[] | undefined

function findBookByTitle(library, searchInput) {
    const  books = library.find(book => {
        return book.title.toLowerCase().includes(searchInput.toLowerCase().trim());
  })
  return books
  
}
console.log(findBookByTitle(library, "selfish"));