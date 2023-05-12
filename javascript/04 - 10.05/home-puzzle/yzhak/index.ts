export {};
////Aviad Kaduri

const Generat = Number(prompt("כמות החשמל שיוצר הפנאל הסולארי ביום (in kWh):"));

if (Generat % 2 === 0) {
  console.log("כמות החשמל המופקת שווה.");
} else {
  console.log("כמות החשמל המופקת לא תקינה.");
}
/////Sahar Kalaifish

for (let floor = 1; floor <= 10; floor++) {
  console.log(`מספר קומה ${floor} אושר!`);
}
//////Yitzhak
for (let hour = 1; hour <= 12; hour++) {
  if (hour >= 8 && hour <= 16) {
    console.log(`The hour now is ${hour}:00, Yitzhak is watching!`);
  } else {
    console.log(`The hour now is ${hour}:00, Yitzhak is not on his shift.`);
  }
}
//////Sharit Zvika

let correctCount = 0;

for (let day = 1; day <= 10; day++) {
  const isSpelledCorrectly = Math.random() <= 0.7;

  if (isSpelledCorrectly) {
    correctCount++;
  }
}

console.log(
  `The student spelled the word correctly ${correctCount} times in ten days.`
);

//////Avi Berhanu
let totalEnergy = 0;

for (let hour = 6; hour <= 18; hour++) {
  const energyProduced = Math.floor(Math.random() * 10) + 1;
  totalEnergy += energyProduced;
}

console.log(
  `The total energy produced by the solar panel in a day is ${totalEnergy} kilowatts.`
);
