export {};

// class puzzle:

// if else:

// 1. The Space Race
// Background: Imagine Aviad Kaduri, a former officer, decided to become an astronaut. He's in a spaceship racing against another spaceship to reach Mars. However, the speed of the spaceships can change!
// Exercise: Ask the user to enter two different numbers, representing the speeds of two spaceships (Aviad's spaceship and the competitor's spaceship) in km/h. Compare the speeds. If Aviad's spaceship is going faster than the competitor's spaceship, print out a message stating that Aviad is winning the race. If it's slower, print a different message saying that Aviad needs to speed up. If they're going at the same speed (use the === operator for comparison), inform the user that it's a tie.
// let AviadSpeed = Number(prompt("pleas enter the speed of Aviad"));
// let competitorSpeed = Number(
//   prompt("pleas enter the speed of competitorSpeed")
// );
// if (AviadSpeed > competitorSpeed) {
//   alert("Aviad is winning the race in " + AviadSpeed + "Km/h");
// } else if (AviadSpeed < competitorSpeed) {
//   alert("Aviad need to speed");
// } else if (AviadSpeed === competitorSpeed) {
//   alert("ther is tia");
// }

// 2. The Solar Panel Electricity Detector
// Exercise: Prompt the user to enter a number representing the amount of electricity a solar panel generated in a day (in kWh). Then, determine whether this amount is odd or even and display an appropriate message. An even number is divisible by 2 with no remainder. Therefore, if the number modulo 2 equals 0, the number is even; otherwise, it's odd.
let amountofSolaePanel = Number(
  prompt(
    "pleas enter the amount of electricity a solar panel generated in a day "
  )
);
if (amountofSolaePanel % 2 === 0) {
  alert("the amount is even" + amountofSolaePanel + " " + "Kwh");
} else {
  alert("the amount is odd");
}
