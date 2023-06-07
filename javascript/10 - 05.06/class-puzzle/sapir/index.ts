export {}
// 1. Object Creation
// Create an object representing a book, which has properties like title, author, yearPublished and pages. Then, print each property using dot notation.

const book1:  any = {
    title: "The Hitchhiker's Guide to the Galaxy",
    author: "sapir",
    yearPublished: 2023,
    pages: 450,

}
console.log(book1.title)
console.log(book1.author)
console.log(book1.yearPublished)
console.log(book1.pages)


// 2. Object Methods
// Continuing from the previous exercise, add a method getSummary to the book object, which when called, returns a summary of the book as a string: "title, written by author in yearPublished, contains pages pages".

const book2:  any = {
    title: "The Hitchhiker's Guide to the Galaxy",
    author: "sapir",
    yearPublished: 2023,
    pages: 450,
    getSummery:function (){
        return `${this.title}, written by ${this.author} in ${this.yearPublished}, contains ${this.pages} pages`
    },
}
console.log(book2.getSummary());

// 3. Modifying Object Properties
// Add a property isRead to your book object (set to false initially).
// Then add a method readBook to the book object which changes the value of isRead to true.

const book3:  any = {
    title: "The Hitchhiker's Guide to the Galaxy",
    author: "sapir",
    yearPublished: 2023,
    pages: 450,
    getSummery:function(){
        return `${this.title}, written by ${this.author} in ${this.yearPublished}, contains ${this.pages} pages`
    },
    isRead: false, 
    readBook:function(){
        this.isRead=true
        return this
    },
}
console.log(book3.getSummary());


//class puzzle

// 1. Object Key-Value Printing
// Create a function that accepts an object and prints out each key-value pair in the format: key: value.


// 2. Object Array Manipulation
// Define an array of objects, each representing a person with properties "name" and "age".
// Use forEach to print each person's name and age, map to create an array of their ages,
// and filter to create a new array that only contains people older than 20.

const people = [
    {
        name: "sapir",
        age: 31,
    }, {
        name:"tamar",
        age: 35,
    },{
        name:"liat",
        age:40,
    }
]

function printNameAge(nameAndAge){
    nameAndAge.forEach(item =>{
        const {name, age} = item
        console.log(`Name: ${name}, Age: ${age}`)
    })
}
console.log(people)
printNameAge(people)

const age = people.map((person) => person.age);
console.log(age);

const olderThenTwenty = people.filter((person)=> person.age > 20);
console.log(olderThenTwenty);