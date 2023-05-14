export {}

//puzzle 2
let totalAmount= 0 
for (let hour = 6; hour <= 18; hour++ ) {
   let energyAmount = Math.floor(Math.random()*10) +1
    totalAmount+= energyAmount
}
 alert ("the total energy is " + totalAmount)