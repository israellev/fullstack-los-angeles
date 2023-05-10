console.log(Math.abs(-5)); // output: 5
console.log(Math.ceil(4.2)); // output: 5
console.log(Math.floor(4.8)); // output: 4
console.log(Math.max(1, 3, 2)); // output: 3
console.log(Math.min(1, 3, 2)); // output: 1
console.log(Math.round(4.5)); // output: 5
//////////////////

///home puzzle1111

const numAttendees = Number(
  prompt("Enter the number of people attending the party: ")
);
const slicesPerPerson = Number(
  prompt("Enter the number of pizza slices each person will eat: ")
);

const totalSlices = numAttendees * slicesPerPerson;
const pizzasNeeded = Math.ceil(totalSlices / 8);

alert("Total pizzas needed: " + pizzasNeeded);

//class-puzzle 1 from last lesson

const IQ = Number(
  prompt("what is your IQ level ? (put a number between 1 to 20)")
);
const gender = prompt("Are you a man or a woman?");

if (gender === "man") {
  if (IQ < 10) {
    alert(" טמבלל !");
  } else {
    alert("חנוןן");
  }
} else if (gender === "woman") {
  if (IQ < 10) {
    alert("אטומה!");
  } else {
    alert("את גאונה!");
  }
} else {
  alert("טיפול מיידי!");
}
