export {}
//puzzle 1
for (let day = 1; day <= 10; day++ ) {
    let correctAnswer= Math.floor(Math.random()*10) *0.7
}
console.log (`The student spelled the words correctly ${correctAnswer} times`)

//puzzle 2
let totalAmount= 0 
for (let hour = 6; hour <= 18; hour++ ) {
   let energyAmount = Math.floor(Math.random()*10) +1
    totalAmount+= energyAmount
}
 alert ("the total energy is " + totalAmount)