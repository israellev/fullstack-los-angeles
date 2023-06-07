export {}
// this is the data you got:

console.log(`home puzzle - 1`);
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

const expeniveBooks = library.filter(book => book.year < 1950)
console.log(expeniveBooks)


// 2. Create a list of all authors
// Use the map function to create a new array that consists of the author of each book in the library.
// Then use 'new Set' and 'Array.from()' to remove the duplicates.
// the result will be like:
// ["F. Scott Fitzgerald", "Richard Dawkins", "Harper Lee"] etc.

console.log(`home puzzle - 2`);
const uniqueAuthors = Array.from(new Set(library.map(book => book.author)));
console.log(uniqueAuthors);


// 3. Count books by genre
// Use the forEach function to create an object where each key is a genre and each value is the number of books in that genre.
// the result will be:
// {
//     Fiction: 3
//     Science: 2,
//     Story: 1,
// }

console.log(`home puzzle - 3`);

const genreCounts = {};
library.forEach((book) => {
  const {genre} = book;
  if (genreCounts[genre]) {

    genreCounts[genre] = genreCounts[genre]+1;
    
  } else {
    
    genreCounts[genre] = 1;
     
  }
});
  
  console.log(genreCounts);

// 4. Create an array of book titles
// Use the map function to create a new array that contains the title of each book.

console.log(`home puzzle - 4`);

let title = library.map(library => library.title);
console.log(title);

// 5. Find the book with the earliest publication year
// Use the 'forEach' function to find the book with the earliest publication year.

console.log(`home puzzle - 5`);

let earliestBook = library[0]; 

library.forEach(book => {
  if (book.year < earliestBook.year) {
    earliestBook = book; 
  }
});
console.log(earliestBook);
  
// 6. Sort the books by publication year
// Use the sort function to create a new array that contains the books sorted by their publication year.
// tip - read in GPT about 'sort' function (we didn't leaned that in the class).

console.log(`home puzzle - 6`);
let sortedLibrary = library.sort((year1,year2) => year1.year - year2.year);
console.log(sortedLibrary);

// Bonus:

// 1. Get average of list of objects
// Create a function getAverageScors that gets array of object with 'score' value, and return the average class score.
// (arrOfObj): number

console.log(`Bonus- 1`);

function getAverageScors(arrOfObj:any):number
{ 
  let sum = 0
  for (let i in arrOfObj){ 

      sum = sum +  arrOfObj[i].score
  }
  const totalAverage = sum/arrOfObj.length
   return totalAverage
}
let scores =
 [
  { score: 88 },
  { score: 90 },
  { score: 75 },
  { score: 95 },
  { score: 85 }
];

let average = getAverageScors(scores);
console.log("the average is : " + average);