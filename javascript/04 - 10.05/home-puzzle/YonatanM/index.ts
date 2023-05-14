export {}

//class-puzzle 1 from last lesson
//const gender = prompt("Are you a man or a woman?")
// const IQ = Number(prompt("what is your IQ level ? (put a number between 1 to 20)"))

// if (gender === "man") {
//     if (IQ < 10) {
//         alert("אתה אהבל !")
//     } else {
//         alert("אתה גאון")
//     }
// } else if (gender === "woman") {
//     if (IQ < 10) {
//         alert("את אהבלה !")
//     } else {
//         alert("את גאונה!")
//     }
// } else {
//     alert("You are not currct!")
// }

///

// switch (gender) {
//     case "man":
//         console.log("man")
//         // if (IQ < 10) {
//         //     alert("אתה אהבל !")
//         // } else {
//         //     alert("אתה גאון")
//         // }
//         break;
//     case "woman":
//         console.log("woman")
//         break;
//     default:
//         console.log("a binary")
// }
// class puzzle:

// if else:

// 1. The Space Race
// Background: Imagine Aviad Kaduri, a former officer, decided to become an astronaut. 
//He's in a spaceship racing against another spaceship to reach Mars. 
//However, the speed of the spaceships can change!
// Exercise: Ask the user to enter two different numbers, 
//representing the speeds of two spaceships (Aviad's spaceship and the competitor's spaceship) in km/h. 
//Compare the speeds. If Aviad's spaceship is going faster than the competitor's spaceship, 
//print out a message stating that Aviad is winning the race. 
//If it's slower, print a different message saying that Aviad needs to speed up. 
//If they're going at the same speed (use the === operator for comparison), 
//inform the user that it's a tie.

let Aviad = Number( prompt("Enter Aviad's speed in km/h")) 
let competitor = Number(prompt("Enter competitor's speed in km/h"))

if (Aviad > competitor)
{
  alert("yey Aviad wone the race")
}

else if (Aviad < competitor)
{
    alert("Aviad lost :(")
}

else if (Aviad === competitor)
{
    alert("its a Teko!!!")
}

// 2. The Solar Panel Electricity Detector
// Exercise: Prompt the user to enter a number representing the amount of electricity a 
//solar panel generated in a day (in kWh). Then, determine whether this amount is odd 
//or even and display an appropriate message. An even number is divisible by 2 with no remainder. 
//Therefore, if the number modulo 2 equals 0, the number is even; otherwise, it's odd.
Let PanelPerDay = Number(prompt("Enter amount of Electric generated in 1 day"))
if (PanelPerDay%)

// loops:

// 1. The Architect's Building Floors
// Background: Sahar Kalaifish has studied architecture and currently works in a municipality approving building permits.
// Exercise: Write a for loop that simulates Sahar approving building permits for a 10-floor building. For each floor, print a message saying "Floor number [floor] approved!".

// 2. The Safety Guard Shifts
// Background: Yitzhak Zemach Sahalu has been working in the security field for 6 years. He works 8-hour shifts from 8 AM to 4 PM.
// Exercise: Write a for loop that prints every hour if Yitzhak was on his shift, starting from 1 AM up to 12 PM, print amessage saying "The hour now is [hour], Yitzhak is watching (or not)!".


// home puzzle:

// 1. The English Words Drill

// // Background: Sharit Zvika is an English teacher for at-risk girls. She wants to make sure that 
// her students are practicing their English vocabulary regularly.
// // Exercise: Write a loop that simulates Sharit asking a student to spell English words. 
// For each iteration (which represents a day), the program should randomly decide whether 
// the student spelled the word correctly or not (let's say there's a 70% chance they spell 
// it correctly). After ten days, the program should print out how many times the student 
// spelled the word correctly.
// // Hint: You can use Math.random() to simulate whether a word was spelled correctly.
let i =0;
for( i = 0; i < 10; i++)
{
  let Spell = prompt("Spell the word RandomText")
  if(Spell){
    alert("spelled correctly")

  }
  else if ()
  {

  }
}


// 2. The Solar Power Calculator
// Background: Avi Berhanu Bayne works as an engineering manager in a solar power company. Let's make a program that calculates how much energy a solar panel can produce in a day.
// Exercise: Write a loop that simulates the production of electricity by a solar panel from sunrise (6 AM) to sunset (6 PM). Each hour, the solar panel produces a random amount of energy between 1 and 10 kilowatts. At the end of the loop, print out the total energy produced for the day.
// Hint: You can use Math.random() to generate a random number and Math.floor() or Math.round() to round it to the nearest whole number.

