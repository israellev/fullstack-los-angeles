export { }
// 1. Object Creation
// Create an object representing a book, which has properties like title, author, yearPublished and pages. Then, print each property using dot notation.
let book: any = {
    title: "Hero Academy",
    author: "Avraham",
    yearPublished: 2018,
    pages: 345,
}
for (let property in book) {
    console.log(book[property])
}

// 2. Object Methods
// Continuing from the previous exercise, add a method getSummary to the book object, which when called, returns a summary of the book as a string: "title, written by author in yearPublished, contains pages pages". +
let book1: any = {
    title: "Hero Academy",
    author: "Avraham",
    yearPublished: 2018,
    pages: 345,
    getSummary: function () {

        return (`${this.title} write by ${this.author} in year ${this.yearPublished} number of pages ${this.pages}`)
    }
};
console.log(book1.getSummary());
// 3. Modifying Object Properties
// Add a property isRead to your book object (set to false initially). Then add a method readBook to the book object which changes the value of isRead to true.

let book2 = {
    title: "Hero Academy",
    author: "Avraham",
    yearPublished: 2018,
    pages: 345,
    isread: false,

    itsRead: function () {

        this.isread = true
        return this
    },
    getSummary: function () {

        return (`${this.title} write by ${this.author} in year ${this.yearPublished} number of pages ${this.pages}`)
    }
};
console.log(book2.getSummary());
console.log("The book is read :", book2.isread);
console.log(book2.getSummary());
console.log("The book is read :",book2.itsRead().isread);




