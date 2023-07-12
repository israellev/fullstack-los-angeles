export {}

const book = {
    title: "הביצה שהתחפשה",
    author: "דן פגיס",
    yearPublished: 1973,
    pages: 24,
    getSummary: function () {
        console.log(this.title+
             " written by " + this.author + " in " 
             + this.yearPublished + ", contains " + 
             this.pages + " pages.")
    },
    isRead: false,
    readBook: function () {
        this.isRead = true
        
    }
}  

console.log(book.title);
console.log(book.author);
console.log(book.yearPublished);
console.log(book.pages);
book.getSummary()



