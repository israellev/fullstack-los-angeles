export {}


const aviad = Number (prompt ( "הכנס את המהירות של החללית של אביעד"))
const shir= Number (prompt ("הכנס את המהירות של החללית של שיר"))

if ( aviad>shir) {
    alert ("אביעד ניצח במירוץ!")
}

else if (aviad===shir) {
    alert ( "התוצאה היא תיקו")
}

else {
    alert ( "אביעד צריך להאיץ!")
}
