export {}
// class puzzle:

// 1. The Birthday Celebrator (use 'while')
// Background: Aviad Kadouri is a former officer and enjoys celebrating birthdays. He wants a program that will print out a birthday message for each year up to his current age.
// Exercise: Use a while loop to print out a birthday message for each year up to Aviad's current age. Aviad is 23 years old.

const birthdayMessage = Number(prompt("Enter the Aviad year born"));

while(birthdayMessage == 23){
    alert(`${"happy birthday aviad"}`);
    break;
}

// 2. The Gardener's Plant Watering Schedule (use 'do while')
// Background: Daniel Michael Peretz works in gardening and needs to keep track of when to water the plants. Each plant needs to be watered every 2 days.
// Exercise: Use a do while loop to create a schedule that tells Daniel which day he needs to water the plants over a 10 day period.
let i = 1 
do{
    i++
    if (i%2 == 0){
        console.log(`${"have aleardy passed : " } ${[i]} ${"day - "} ${"you need to watered the plants"}`)
    }
 }while (i < 10)