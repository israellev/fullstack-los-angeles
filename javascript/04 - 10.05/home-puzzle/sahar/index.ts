export {}
//puzzle 1

var numOfCorrectAnswers = 0;

for (let day = 1; day <= 10; day++) {
  var random = Math.random();

  if (random <= 0.7) {
    numOfCorrectAnswers++;
  }
}


//puzzle 2
let totalAmount= 0 
for (let hour = 6; hour <= 18; hour++ ) {
   let energyAmount = Math.floor(Math.random()*10) +1
    totalAmount+= energyAmount
}
 alert ("the total energy is " + totalAmount)