    export {}

/*  short way to aggin variable by if else */
const index = 0
/*  long way */
let name;
if (index === 0) {
    name = "shir"
} else {
    name = "sapir"
}
/* short way */
const name2 = index === 0 ? "shir" : "sapir"



/*  Object  */
const arr = [1,2,"" ,]

const person: any = {
    name: "sapir",
    age: 30,
    address: {
        country: "israel",
        city: "rechovot",
    },
    hobbies: ["fishing", "diving"],
    studies: {
        schoolName: "tichon"
    },
    celebrateBirthday: function(greeting) {
        this.age ++
        console.log(greeting)
    },
}

/* get values */
console.log(person.name) // "sapir"
console.log(person.age) // 30
console.log(person["name"]) // "sapir"
console.log(person["age"]) // 30
console.log(person.studies["schoolName"]) // "tichon"

/* add new values */
person.isMarried = false
person["isMarried"] = false
console.log(person.isMarried) // false

/* remove values */
delete person.isMarried
console.log(person.isMarried) // undefined

/* edit exising value */
person.name = "daniel"
console.log(person.name) // "daniel"

console.log(person.age) // 30
person.celebrateBirthday()
console.log(person.age) // 31



/* distracting object */

const person2 = person
person2.age // 31
person2.celebrateBirthday()
person2.age // 32
person.age // 32

// const age = Number(prompt("give me your age")) // 44

// const person3 = {
//     ...person, // extrating all
//     name: name,
//     age, // shortcut to 'age: age'
// }

// console.log(age) // 44
// console.log(person3.name) // "Boaz"
// console.log(person3.celebrateBirthday("Mazal Tov!!"))
// console.log(person3.age) // 45


/* use example:
const classList = [person, person, person3]
classList.forEach(student => {
    console.log(student.age)
}) */

/*   */
// instead of:  
// do:

const book = {
    title: "Afternoon stories",
    author: "Nick Bossi",
    price: 28,
}


const books = [
book, 
{
    title: "Night stories",
    author: "Nick Bossi",
    price: 33,
}, {
    title: "Morning stories",
    author: "Nick Bossi",
    price: 45,
}]

books[0].title // "Afternoon stories"
books[1].title // "Night stories"

function printTitleAndPrice(listBooks) {
    listBooks.forEach(booky => {
        const {title, price, noooooo} = booky
        console.log(`Title: ${title}, price: ${price}`)
    })   
}

console.log(books)
printTitleAndPrice(books)


function allBookPrice(books): number {
    let sumPrice = 0;
    books.forEach(book => {
        sumPrice += book.price
    })
    return sumPrice;
}

console.log(allBookPrice(books))

const prices = books.map(book => book.price)
console.log(prices)
const expeniveBooks = books.filter(book => book.price > 30)
console.log(expeniveBooks)


/* home-puzzle 4 */

const booksgenre = {};
library.forEach(book=> {
    //const genre = book.genre;  // "Fiction"
    //const year = book.year;  // "Fiction"
    const {genre, year} = book; // "Fiction"
    if (booksgenre[genre])
        booksgenre[genre] ++
    else
        booksgenre[book.genre] = 1
})
console.log(booksgenre)

