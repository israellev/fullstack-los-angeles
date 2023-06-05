export {}
// שאלה מספר 1
const book: any= {

titel: "shir",
author: "shir malka",
year: 1989,
pages: 33,


}

console.log( book.titel);
console.log( book.author);
console.log( book.year);
console.log( book.pages);


// שאלה מספר 2

const book: any= {

    titel: "shir",
    author: "shir malka",
    year: 1989,
    pages: 33,
    getSummary:function(){
        this.titel.author.year.pages
    }
    
    }
    book.getSummary()
    console.log(book.this.titel.author.year.pages)
    
