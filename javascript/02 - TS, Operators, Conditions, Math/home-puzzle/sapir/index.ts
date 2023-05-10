//שאלה 1 

const numPeople = parseInt(prompt("how many people are attending the party?"));
const sliceOfPizza = parseInt(prompt("how many slices each person will eat?"));
const slicePerPizza = 8;
const totalSlicesNeeded = numPeople*sliceOfPizza;
const totalPizzasNeeded = Math.ceil (totalSlicesNeeded / slicePerPizza);

console.log("for" + numPeople + "people, with each person eating" + sliceOfPizza + "slices of pizza");
console.log("you will need" + totalPizzasNeeded + "pizzas");

//שאלה 2 

const priceOfComputer = parseFloat(prompt("please enter the price of the computer:"));
const amountYithakSave = parseFloat(prompt("how much money do you save per week?"));

const weeksNeedToSave = Math.ceil (priceOfComputer / amountYithakSave);

console.log("Dear Yitzhak you will need" + weeksNeedToSave + "weeks in order to be able to buy the computer :) ");
