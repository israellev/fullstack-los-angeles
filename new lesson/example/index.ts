export {}

//class-puzzle 1 from last lesson
const gender = prompt("Are you a man or a woman?")
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

///

switch (gender) {
    case "man":
        console.log("man")
        // if (IQ < 10) {
        //     alert("אתה אהבל !")
        // } else {
        //     alert("אתה גאון")
        // }
        break;
    case "woman":
        console.log("woman")
        break;
    default:
        console.log("a binary")
}
