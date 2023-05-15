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
