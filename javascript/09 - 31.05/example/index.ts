export { }

/* functions ways - all are the same*/


function giveOne() {
    return 1
}
const giveOne2 = () => {
    return 1
}
const giveOne3 = () => 1

const arr = [2, 4, 6];

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

const arr = [2, 4, 6]

arr.forEach((__, _, source) => {
    console.log("item: ", __, "index: ", _, "all array: ", source)
});



/* Array Extractions */

const arr2 = ["Sapir", "Peretz", 31, "bla bla"]
console.log(arr2)
// Long way
const firstName = arr2[0]
const lastName = arr2[1]
const age = arr2[3]
// Short way
const [firstName2, lastName2, age2] = arr2

console.log("firstName2:", firstName2, "lastName2:", lastName2, "age2:", age2) 
// 'Sapir', 'Peretz', 31


// const studentList = [
//     ["Avi", "Brahanu", 32, "Student"],
//     ["Israel", "Lev", 34, "Lecturere"],
//     ["Daniel", "Levi", 22, "Student"],
// ]

// studentList.forEach(student => {
//     const [firstName, lastName, age, role, src] = student
    
//     const studentDiv = document.createElement("div");
//     studentDiv.innerHTML = `<strong>Name:</strong> ${firstName} ${lastName}<br>
//                             <strong>Age:</strong> ${age}<br>
//                             <strong>Role:</strong> ${role}`;
//     document.getElementById("container").appendChild(studentDiv);
// })



/* 'by reference' vs 'by value' */
/* by value - number, string, boolean, undefined, null, NaN:
= the value saved in the variable
*/
/* by reference - array, object
= the value saved in memory, the reference saved in the variable */
var num = 1;
var num2 = 1;
var arr3 = [] // sdagkjhsdaf;lkjhlksdhf
var arr4 = [] // asdlkjflkjwqlsdldkld


/* result 1: 2 array and 2 objects never equal */

console.log(num === num2) // true
console.log(arr3 === arr4) // false


/* result 2: if you save it to new variable - it's alwasy the same */

const arr5 = [] 
const arr6 = arr5
console.log(arr5 === arr6) // true
arr5.push(1)
console.log(arr5) // [1] 
console.log(arr6) // [1]

/* how to copy array by value ?? */
const arr7 = [...arr6]
console.log(arr7) // [1, 2, 3]
console.log(arr6 === arr7) // false




/*  class puzzle 1 & 2 */
/* const arr = [" banana", 1, "apple "]
const newArr = arr
    .filter(item => typeof item === 'string')  //  [" banana", "apple "]
    .map(item => item.trim()); //  ["banana", "apple"]
console.log(newArr) // ["banana", "apple"]

const itemToReplace = (arr: sting[], itemToReplace: string, replaceWith: string): string[] {
    return arr.map()
}


itemToReplace(["shir", "yakov"], "yakov", "sapir") // ["shir", "sapir"]
 */