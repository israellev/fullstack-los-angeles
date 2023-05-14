export {}

//class-puzzle 1 from last lesson
const AviadSpaceship = Number(prompt("Enter the speed of your space-ship"))
const spaceshipB = Number(prompt("Enter the speed of the other space-ship"))

 if (AviadSpaceship > spaceshipB) {
        alert("You won!")
    } else if (AviadSpaceship < spaceshipB) {
        alert("You have to speed up!")  
    } else {
        alert("It's a tie!") 
    } 

//puzzle 2
const sollarPanel = Number(prompt("Enter the amount of electricity a solar panel generated in a day (in kWh)"))

if (sollarPanel % 2 ==0) {
    alert("It's an even number")
}
else {
    alert("It's an odd number")
}


