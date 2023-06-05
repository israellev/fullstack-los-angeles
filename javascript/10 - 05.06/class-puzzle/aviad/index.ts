
//Objects follow-up:

//1. Object Creation
//Create an object representing a book, which has properties like title, author, yearPublished and pages. Then, print each property using dot notation.

const book: any = {
    title: "aviad",
    author: "aviad",
    yearPublished: 2000,
    pages: 23,
}

console.log(book.title)
console.log(book.author)
console.log(book.yearPublished)
console.log(book.pages)


//2. Object Methods
//Continuing from the previous exercise, add a method getSummary to the book object, which when called, returns a summary of the book as a string: "title, written by author in yearPublished, contains pages pages".

const book2: any= {

    title: "aviad",
    author: "aviad",
    yearPublished: 2000,
    pages: 23,
    getSummery:function (){
        return `${book2.title}, "written by" ${book2.author} in ${book2.yearPublished}, contains ${book2.pages} pages`
    },
    
}  
console.log(book2.getSummary())

//3. Modifying Object Properties
//Add a property isRead to your book object (set to false initially). Then add a method readBook to the book object which changes the value of isRead to true.
