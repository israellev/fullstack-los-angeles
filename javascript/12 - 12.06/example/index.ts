export {}



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


