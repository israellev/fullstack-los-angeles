export {}


/* use function inside the  */
// function getUserAge(): number {
//     const age = prompt("What your age (in numbers)?") // "88", "bla bla"
//     const ageNumber = Number(age) // 88, NaN
//     const isNotNumber = isNaN(ageNumber) // false, true
//     if (isNotNumber) {
//         alert("You didn't put a number, please try again")
//         return getUserAge()
//     } else {
//         return ageNumber
//     }
// }

// const age = getUserAge()
// console.log("Your age is: ", age)

let str =prompt("Please enter a string")
if (str===null)
    str =prompt("Please enter a string"); 
console.log(str.length)
console.log(str[0])
console.log(str[str.length-1])