export {}

//class-puzzle 1 from last lesson
const IQ = Number(prompt("what is your IQ level ? (put a number between 1 to 20)"))
const gender = prompt("Are you a man or a woman?")

if (gender === "man") {
    if (IQ < 10) {
        alert("אתה אהבל !")
    } else {
        alert("אתה גאון")
    }
} else if (gender === "woman") {
    if (IQ < 10) {
        alert("את אהבלה !")
    } else {
        alert("את גאונה!")
    }
} else {
    alert("You are not currct!")
}

