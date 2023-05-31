export { }

/* functions ways - all are the same*/

/* 
function giveOne() {
    return 1
}
const giveOne2 = () => {
    return 1
}
const giveOne3 = () => 1

const arr = [2, 4, 6]

//  all are the same!!!! 
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
 */


/* Just to know - These are the Fathers objects of those types  */
Number()
String()
Array()
Object()
Boolean()

/*  'Set' (system class), item can't be twice and for that it works fast than array, and  */

const set = new Set([1, 2, 3, 3]) // (1, 2, 3)
set.has(5) // false
set.has(2) // true
set.add(4) // (1, 2, 3, 4)

/* convert set back to array */
Array.from(new Set([1, 2, 3, 3]))




/* 'forEach', 'map', 'filter' will give the callback function the parameters:
 1. item, 2.index, 3. array */

var arr = [2, 4, 6]

arr.forEach((__, _, source) => {
    console.log("item: ", __, "index: ", _, "all array: ", source)
});

