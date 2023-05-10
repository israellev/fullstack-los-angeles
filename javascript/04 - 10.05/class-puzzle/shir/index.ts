export {}


const aviad = Number (prompt ( "הכנס את המהירות של החללית של אביעד"))
const shir= Number (prompt ("הכנס את המהירות של החללית של שיר"))

if ( aviad>shir) {
    prompt ("אביעד ניצח במירוץ!")
}

else if (aviad===shir) {
    prompt ( "התוצאה היא תיקו")
}

else ( aviad<shir) {
    prompt ( "אביעד צריך להאיץ!")
}
