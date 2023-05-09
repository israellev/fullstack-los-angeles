export {}
//puzzle 1
alert ("Welcome to our pizza party!")
var invites = Number(prompt("How many guests are in the party?"))
var pizaSlices = Number(prompt("How many piza slices would you eat?"))
var totalSlices = Math.ceil(invites*pizaSlices/8) 
alert ("You need to buy " + totalSlices + " pizzas for the party")

//puzzle 2
alert ("Yitzhak has to save money for a new computer") 
var computerPrice = Number(prompt("How much money does a new computer cost (in ILS)?"))
var moneySaving = Number(prompt("How much money does Yitzhak earns in a whole week (in ILS)?"))
var weeksAmount = Math.ceil(computerPrice/moneySaving) 
alert ("Sorry bro, you must work " + weeksAmount + " more weeks to afford this computer" )
