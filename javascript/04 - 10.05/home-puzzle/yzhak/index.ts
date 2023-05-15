export {};
////Aviad Kaduri

const aviad = Number(prompt("הכנס את המהריות של אביעד"));
const Israel = Number(prompt(" הכנס מהירות של ישראל"));

if (aviad > Israel) {
  alert("אביעד ניצח");
} else if (Israel > aviad) {
  alert("ישראל ניצח");
} else {
  console.log("תיקו");
}

// פאנל סולארי----------------------------------
const Elect = Number(prompt("הזן את כמות החשמל שיוצר הפנאל הסולארית?"));

if (Elect % 2 == 0) {
  alert(" זוגי");
} else {
  alert("אי זוגי");
}

///Sahar Kalaifish --------------------------------------------

for (let i = 1; i <= 10; i++) {
  console.log(`${"floor"} ${[i]}  ${"confirm"}`);
}

////Yitzhak------------------------------------------------
for (let hour = 1; hour <= 12; hour++) {
  if (hour >= 8 === hour <= 16) {
    console.log(`The hour now is ${hour}:00, Yitzhak is watching!`);
  } else {
    console.log(`The hour now is ${hour}:00, Yitzhak is not on his shift.`);
  }
}

////Sharit Zvika--------------------------------------------

let correct = 0;

for (let day = 1; day <= 10; day++) {
  const SpelledCorrect = Math.random() <= 0.7;

  if (SpelledCorrect) {
    correct++;
  }
}

console.log(
  `The student spelled the word correctly ${correct} times in ten days.`
);

////Avi Berhanu--------------------------------------------

let Energy = 0;

for (let hour = 6; hour <= 18; hour++) {
  const energyProduced = Math.floor(Math.random() * 10) + 1;
  Energy += energyProduced;
}

console.log(
  `The total energy produced by the solar panel in a day is ${Energy} kilowatts.`
);
