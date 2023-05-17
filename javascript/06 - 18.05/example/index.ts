export {}

/* variable scope:
if we delared new variale (let or const) in the external - it'will be available in the internal scope
but if we delated new variable in the internal - it'll not be available in the external
*/

/* 
let a1 = "a1"
let a2;
if (true) {
    console.log(a1);
    a1 = "a11"
    let a2 = "a2"
    console.log(a2)

    if (true) {
        console.log(a2)
        const a3 = "a3"
        console.log(a2)
    }
} 

console.log(a1)
console.log(a2)
console.log(a3)
 */



/* 2 ways for functions - regular, anonymous function  */

/* regular function */
function greeting1(name: string): void {
    console.log(`welcome  ${name}1!`)
}
// greeting1("Sarit")

/* anonimous function */
/* () => {
    console.log("welcom 2!")
}
true
"sadfk"
24345 */

const greeting2 = (name: string): void => {
    console.log(`welcom ${name} 2!`)
}

// greeting2("Yhonatan")


/* error handling - throw, try & catch, NaN  */

/* Example 1: the code is dead */
/* throw `shir hamalka!!`
console.log("It was error before")
 */

/* Example 2: the error is catched and code is continue */
/* try {
    throw "Error!!!"
} catch(error) {
    console.log(error)
}
console.log("Because of the catch the code is continue!")
 */


function getUserAge(): number {
    const age = prompt("What your age (in numbers)?") // "88", "bla bla"
    const ageNumber = Number(age) // 88, NaN
    const isNotNumber = isNaN(ageNumber) // false, true
    if (isNotNumber) {
        throw false
    } else {
        return ageNumber
    }
}

try {
    const age = getUserAge() // 88
    console.log("the user is age: ", age)
} catch(A) {
    alert(A)
}

console.log("The code is continue");