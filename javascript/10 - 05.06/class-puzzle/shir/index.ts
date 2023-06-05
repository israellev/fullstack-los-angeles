export { }
// שאלה מספר 1
const book: any = {

    titel: "shir",
    author: "shir malka",
    year: 1989,
    pages: 33,


}

console.log(book.titel);
console.log(book.author);
console.log(book.year);
console.log(book.pages);


// שאלה מספר 2

const book: any = {

    titel: "shir",
    author: "shir malka",
    year: 1989,
    pages: 33,
    getSummary: function () {
        return `${this.titel} ${this.author} ${this.year} ${this.pages}`
    }

}

console.log(book.getSummary())
// שאלה 3

const book: any = {

    titel: "shir",
    author: "shir malka",
    year: 1989,
    pages: 33,
    isRead: false,

    readBook: function () {
        book.isRead = true
    },

}


console.log(book.isRead)
book.readBook();
console.log(book.isRead)



