
Objects follow-up:

1. Object Creation
Create an object representing a book, which has properties like title, author, yearPublished and pages. Then, print each property using dot notation.

2. Object Methods
Continuing from the previous exercise, add a method getSummary to the book object, which when called, returns a summary of the book as a string: "title, written by author in yearPublished, contains pages pages".

3. Modifying Object Properties
Add a property isRead to your book object (set to false initially). Then add a method readBook to the book object which changes the value of isRead to true.



class puzzle:

1. Object Key-Value Printing
Create a function that accepts an object and prints out each key-value pair in the format: key: value.

2. Object Array Manipulation
Define an array of objects, each representing a person with properties "name" and "age". Use forEach to print each person's name and age, map to create an array of their ages, and filter to create a new array that only contains people older than 20.


home puzzle:

this is the data you got:

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

1. Find all books published before 1950
Use the 'filter' function to create a new array that only contains books from the library array that were published before 1950.

2. Create a list of all authors
Use the map function to create a new array that consists of the author of each book in the library.
Then use 'new Set' and 'Array.from()' to remove the duplicates.
the result will be like:
["F. Scott Fitzgerald", "Richard Dawkins", "Harper Lee"] etc.

3. Count books by genre
Use the forEach function to create an object where each key is a genre and each value is the number of books in that genre.
the result will be:
{
    Fiction: 3
    Science: 2,
    Story: 1,
}

4. Create an array of book titles
Use the map function to create a new array that contains the title of each book.

5. Find the book with the earliest publication year
Use the 'forEach' function to find the book with the earliest publication year.

6. Sort the books by publication year
Use the sort function to create a new array that contains the books sorted by their publication year.
tip - read in GPT about 'sort' function (we didn't leaned that in the class).


Bonus:

1. Get average of list of objects
Create a function getAverageScors that gets array of object with 'score' value, and return the average class score.
(arrOfObj): number

