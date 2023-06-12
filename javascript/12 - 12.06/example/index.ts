export {}
import {students} from "../../11 - 07.06/students"


// var arr = [2, 4, 6]
var arr = ["I", "Love", "Ice", "Cream"]
// arr.join(" ")

var result = arr.reduce((state, item, index) => {
    state += `${item} `
    return state
}, "")
console.log(result);

/* reduce is exactly like this: */
var state = ""
arr.forEach((item) => {
    state += `${item} `
})
console.log(state)


/*  solution for exercise number 2 */
// const result = students.reduce((state, student) => {
//     state += student.score
//     return state
// }, 0) / students.length


/* convert array to string */
var names = ["Sapir", "Yehonatan", "Avi"]
console.log(names.join(", ")) // "Sapir, Yehonatan, Avi"

/* convert string to array */
var names2 = "Sapir, Yehonatan, Avi"
names2.split(" ") // ["Sapir,", "Yehonatan,", "Avi"]
names2.split(", ") // ["Sapir", "Yehonatan", "Avi"]

console.log("------------------")


/* Object.keys() method */
var person = {
    name: "Yehavit",
    proffession: "Teacher",
    score: 55,
}

person.name
person["name"]
person["Yehavit"] // undefined

// Object.values(person) // ["Yehavit", "Teacher", 55]
var keys = Object.keys(person)
console.log(keys) // ["name", "proffession", "score"]

// "name", "Yehavit"
// "proffession", "Teacher"

keys.forEach(key => {
    console.log(`${key}: `, person[key])
})
