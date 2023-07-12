
export {} 
//exc 1

// let numberOfPepole = +prompt("how many people are attending the party?")
// let numberOfPizzaSlices = +prompt("how many pizza slices each person will eat?")
// let numberOfPizzas = Math.ceil((numberOfPepole*numberOfPizzaSlices)/8)
// alert("You need "+numberOfPizzas+" pizzas")

//Exc 2

// let computerCost = +prompt("Please enter the computer cost?")
// let weeklyMoneySaved = +prompt("Please enter the amount of money Yitzhak saves per week")
// let numberOfWeeks = Math.ceil(computerCost/weeklyMoneySaved)
// alert("Just more "+numberOfWeeks+" weeks to go!")

//Bonus

let numCodingTasks = +prompt("Please enter the number of coding tasks")
let esimatedCompleteTimeMin = +prompt("the estimated time (in minutes) to complete each task")
let percentageRandomFactor =(numCodingTasks*esimatedCompleteTimeMin)*((20-Math.floor(Math.random() * 41))/100)
let TotalTime = Math.ceil((numCodingTasks*esimatedCompleteTimeMin)+percentageRandomFactor)
alert("you need "+TotalTime+" miutes")