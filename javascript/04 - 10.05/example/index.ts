export {}

//class-puzzle 1 from last lesson
// const gender = prompt("Are you a man or a woman?")
// const IQ = Number(prompt("what is your IQ level ? (put a number between 1 to 20)"))

// if (gender === "man") {
//     if (IQ < 10) {
//         alert("אתה אהבל !")
//     } else {
//         alert("אתה גאון")
//     }
// } else if (gender === "woman") {
//     if (IQ < 10) {
//         alert("את אהבלה !")
//     } else {
//         alert("את גאונה!")
//     }
// } else {
//     alert("You are not currct!")
// }


// switch (gender) {
//     case "man":
//         console.log("man")
//         // if (IQ < 10) {
//         //     alert("אתה אהבל !")
//         // } else {
//         //     alert("אתה גאון")
//         // }
//         break;
//     case "woman":
//         console.log("woman")
//         break;
//     default:
//         console.log("a binary")
// }


// console.log(Math.abs(-5)); // output: 5
// console.log(Math.ceil(4.2)); // output: 5
// console.log(Math.floor(4.8)); // output: 4
// console.log(Math.round(4.5)); // output: 5
// console.log(Math.max(1, 3, 2, 10, 59)); // output: 59
// console.log(Math.min(1, 3, 2)); // output: 1

// /*  random */
// console.log(Math.random()); // output: between 0.000000000 to 1.0

// /* get random int number between 0 to 10 */
// console.log(Number(Math.random().toFixed(1)) * 10)

// /* get random int number between 1 to 6 */
// console.log(((Number(Math.random().toFixed(1)) * 10) % 6) + 1)

// /* check if number is even */
// /* (6) % 2 === 0 */

let result = 0
for (let index = 0; index < 10; index++) {
    result += index
    // result = result + index
}
console.log(result)
