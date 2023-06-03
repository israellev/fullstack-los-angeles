export { }
// 1. Object Creation
// Create an object representing a book, which has properties like title, author, yearPublished and pages. Then, print each property using dot notation.
let book = {
    title: "Hero Academy",
    author: "Avraham",
    yearPublished: 2018,
    pages: 345
}
for (let property in book) {
    console.log(book[property])
}

// 2. Object Methods
// Continuing from the previous exercise, add a method getSummary to the book object, which when called, returns a summary of the book as a string: "title, written by author in yearPublished, contains pages pages". +
 // 3. Modifying Object Properties
// Add a property isRead to your book object (set to false initially). Then add a method readBook to the book object which changes the value of isRead to true.

let book1 = {
    title: "Hero Academy",
    author: "Avraham",
    yearPublished: 2018,
    pages: 345,
    isread: false,

    itsRead() {
        let read = this.isread
        read = true
        if (read) {
            return `${read} and the number of read is 40`
        }
    },
    getSummary: function () {

        return (`${this.title} write by ${this.author} in year ${this.yearPublished} number of pages ${this.pages}`)
    }
};
console.log(book1.getSummary());
console.log("The book is read :", book1.isread);
console.log(book1.getSummary());
console.log("And now the book is read :", book1.itsRead());



// 3. Modifying Object Properties
// Add a property isRead to your book object (set to false initially). Then add a method readBook to the book object which changes the value of isRead to true.
