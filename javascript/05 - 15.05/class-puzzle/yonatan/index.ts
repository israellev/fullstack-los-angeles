export {}
// class puzzle:

// // 1. The Birthday Celebrator (use 'while')
// // Background: Aviad Kadouri is a former officer and enjoys celebrating birthdays. 
// He wants a program that will print out a birthday message for each year up to his current age.
// // Exercise: Use a while loop to print out a birthday message for each year up to Aviad's current age. 
// Aviad is 23 years old.


// let birthday = 1;
// while (birthday <= 23) {

//     // alert("Happy" + birthday + "birthday Aviad")
//     console.log("Happy " + birthday + " birthday Aviad")
//     birthday++
    
// }

// 2. The Gardener's Plant Watering Schedule (use 'do while')
// Background: Daniel Michael Peretz works in gardening and needs to keep track of when to 
//water the plants. Each plant needs to be watered every 2 days.
// Exercise: Use a do while loop to create a schedule that tells Daniel which 
//day he needs to water the plants over a 10 day period.

let days = 1 //assuming Daniel watered the plant in the first day,

do {
    if ( days%2 === 0) {
        console.log(`Daniel ${[days]} days passed, you need to water the plants`)          
        alert(`Daniel its ${[days]} water the plants`)
    }
    days++    
} while (days <= 10)


// home puzzle:

