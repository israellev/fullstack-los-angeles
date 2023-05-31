export { }


/* functions ways - all are the same*/

function giveOne() {
    return 1
}

const giveOne2 = () => {
    return 1
}

const giveOne3 = () => 1

const arr = [2, 4, 6]

/*  all are the same!!!! */
console.log(arr.map(giveOne)) // [1, 1, 1]
console.log(arr.map(giveOne2)) // [1, 1, 1]
console.log(arr.map(giveOne3)) // [1, 1, 1]
console.log(arr.map(function giveOne() {
    return 1
})) // [1, 1, 1]
console.log(arr.map(() => {
    return 1
})) // [1, 1, 1]
console.log(arr.map(() => 1)) // [1, 1, 1]


/* Just to know - These are the Fathers objects of those types  */
Number()
String()
Array()
Object()
Boolean()

