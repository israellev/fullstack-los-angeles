export {};

// let Aviad = 1;

// while (Aviad < 23) {
//   console.log(Aviad);
//   Aviad++;
// }

// // ////////////////////////

// let day = 1;
// let plant = 0;

// do {
//   if (day % 2 === 0) {
//     plant++;
//     console.log(`${"day"} ${day} ${"watr"}`);
//   }

//   day++;
// // } while (day <= 10);

// // console.log("Total plants watered: " + plant);

// //3 ways to loop:
// for (let i = 1; i <= 23; i++) {
//   console.log(`"happy birthday aviad your" ${[i]} "yers old"`);
// }

//home puzzle: תרגיל 1

function greet() {
  console.log("hello");
}
greet();

// // /////// תרגיל 2

// ///א////
function square(num) {
  console.log(num * num);
}

const number = 10;
square(number);

////////ב/////

// function square(num: number) {
//   console.log(num * num);
// }

////////  תרגיל מס 2......

function convertToFahrenheit(num: number) {
  console.log(`${[(num * 9) / 5 + 32]} ${"F"}`);
}
convertToFahrenheit(30);
