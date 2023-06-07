export {}

// //   1. Object Creation
// // Create an object representing a book, which has properties like title, author, yearPublished and pages. Then, print each property using dot notation.

// const id = {

// Name : "liad" ,
// age : 24 ,
// Dateofbirth : "24/09/1999" ,
// Weight : 74 

// };

// console.log("name" + id.Name);
// console.log("age" + id.age);
// console.log("Dateofbirth" + id.Dateofbirth);
// console.log("Weight" + id.Weight);

// // 2. Object Methods
// // Continuing from the previous exercise, add a method getSummary to the book object, which when called, returns a summary of the book as a string: "title, written by author in yearPublished, contains pages pages".

// const id2 = {

//   Name : "liad" ,
//   age : 24 ,
//   Dateofbirth : "24/09/1999" ,
//   Weight : 74 ,
//   getSummary : function() {
//     return this.Name + this.age + this.Dateofbirth + this.Weight ;
//   }
//   };

//   console.log(id2.getSummary());

// // 3. Modifying Object Properties
// // Add a property isRead to your book object (set to false initially). Then add a method readBook to the book object which changes the value of isRead to true.

// const id3 = {

//   Name : "liad" ,
//   age : 24 ,
//   Dateofbirth : "24/09/1999" ,
//   Weight : 74 ,
//   height : 1.75 ,
//   newHeight: function () {
//     this.height = 1.80;
//     return this.height;
//     }
//   };

//   console.log(id3.newHeight());



  // const beg = {
  //   lastName : "liad" ,
  //   firstName : "beg" ,

  // }

  // const peretz = {
  //   lastName : "daniel" ,
  //   firstName : "peretz" ,
    
  // }

  // const benita = {
  //   lastName : "roi" ,
  //   firstName : "benita" ,
  //   toApperCase : function (arr) {
  //     return this.lastName[0].toUpperCase()
    
  //   }
  // }
 
 
  // const friends = [beg,peretz,benita]
  // const toApperCase = [arr]
  // console.log(toApperCase)

  // ---------------------------------------------------------------------------------------------------------------------------------


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

// const yearArray = [...library].sort((a,b) => a.year-b.year)
// console.log(yearArray)

function findBookByTitle(library, searchInput) {
  return library.find(function(book) {
    return book.title === searchInput;
  });
}

const searchInput = "1984";
const book = findBookByTitle(library, searchInput);

console.log(book);

