
var name: string = "Liad"
var age: number = 18
var isPsici: boolean = false


// console.log(Math.abs(-5)); // output: 5
// console.log(Math.ceil(4.2)); // output: 5
// console.log(Math.floor(4.8)); // output: 4
// console.log(Math.max(1, 3, 2)); // output: 3
// console.log(Math.min(1, 3, 2)); // output: 1
// console.log(Math.round(4.5)); // output: 5

/* var - can declare twice, can override */
var a = 1
var a = 2

/* can't declare twice, can override */
let c = 1
// can't - let c = 2
c = 2
c = 3

/* can't declare twice, can't override */
const b = 1
// can't - const b = 2
// can't - b = 2


/* allways use 'const' unles you have reason */

// const name = "Yosi"
// const age = 11
// alert(name + " " + age + " years old");
// alert(`${name} ${age} years old`);
// alert(`${"yossi"} ${11} years old`);

let num = 10
/* '++' - these are the same: */
// num = num + 1
num ++

/* '+=' - these are the same: */
// num = num + 2
// num += 2
console.log(num)


console.log(num === 10)
console.log(10 === 10)
 
let bool = true;
bool = false
// console.log("10" == 10)

/* if else */
// if (num === 10) {
//     console.log("eauql 10!")
// } else if (num === 11) {
//     console.log("equal 11!")
// } else {
//     console.log("Noooo!")
// }


