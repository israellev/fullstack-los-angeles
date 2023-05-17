export {};

// 1. The Birthday Celebrator (use 'while')
// Background: Aviad Kadouri is a former officer and enjoys celebrating birthdays. He wants a program that will print out a birthday message for each year up to his current age.
// Exercise: Use a while loop to print out a birthday message for each year up to Aviad's current age. Aviad is 23 years old.




const aviadBirhday = parseInt(prompt("Please enter Aviad's year of birth (between 2000-2023)"));

while (aviadBirhday <= 2023 && aviadBirhday >= 2000) {
    console.log("HAPPY BIRTHDAY AVIAD!");
    aviadBirhday++;
}

//------------------------------------------------------------------------------------------------------------------------

//The Gardener's Plant Watering Schedule (use 'for')
//Background: Daniel Michael Peretz works in gardening and needs to keep track of when to water the plants. Each plant needs to be watered every 2 days.
//Exercise: Use a do while loop to create a schedule that tells Daniel which day he needs to water the plants over a 10 day period.


let day = 1;

do {
    if(day %2 === 0){
    console.log("you need to water the plants");
      }  
    day++ ;  
   } while (day <= 10);