export {}

// 1. Object Creation
// Create an object representing a book, which has properties like title, author, 
// yearPublished and pages. Then, print each property using dot notation.

const book: any = {
    title: "My cook book",
    author: "ABC",
    yearOfPublish: 2000,
    pages: 500,
    Chapters: [1,2,3,4,5],
    index: {
        firstDishes: ["salads", "pies", "breads"],
        mainDishes: ["meat", "soups"],
        deserts: ["cakes", "cookies", "sweets"]
    }
} 

// 2. Object Methods
// Continuing from the previous exercise, add a method getSummary to the book object, 
// which when called, returns a summary of the book as a string: 
// "title, written by author in yearPublished, contains pages pages".


   book.getSummary = function(){
        return `${this.title} written by ${this.author} in ${this.yearOfPublish} contain ${this.pages} pages`
    }

console.log(book.getSummary())


// 3. Modifying Object Properties
// Add a property isRead to your book object (set to false initially). 
// Then add a method readBook to the book object which changes the value of isRead to true.

book.isRead = false
book.readBook = function(){
     book.isRead = true
     return book.isRead
}
console.log(`readBook property is ${book.readBook()}`)


// 1. Object Key-Value Printing
// Create a function that accepts an object and prints out each key-value pair in the format: key: value.
// const person: any = {
//     name1: "sam",
//     adress: "kiryat malachi",
//     age: 30
// }
// function printKeyValue(person: any) : (any) {
//     person.forEach(value => {
//         const {name1, adress, age} = value
//         console.log(`key: ${name1}`)
//     })
// }

// 2. Object Array Manipulation
// Define an array of objects, each representing a person with properties "name" and "age". 
// Use forEach to print each person's name and age, map to create an array of their ages, 
// and filter to create a new array that only contains people older than 20.

const persons : any = [
{
    name1 : "Dan",
    age : 30
}, {
    name1 : "David",
    age : 15,
}, {
    name1 : "Daniel",
    age : 25
}
]
console.log("Printing each person's name and age:");
persons.forEach((person) => {
  console.log(`Name: ${person.name1}, Age: ${person.age}`);
});

const arrayOfAges = persons.map((person) => person.age)

console.log(`array of ages ${arrayOfAges}`)

const olderThan = persons.filter((person) => person.age > 20); //לא הבנתי למה לא יוצא רק הגיל אלא כל הערכים של האוביקט
const agesOfOlderThan = olderThan.map((person) => person.age); //למה צריך להוסיף את השורה הזאת
console.log("Ages of people older than 20:", agesOfOlderThan);



   