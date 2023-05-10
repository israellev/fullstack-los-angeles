export {}

//class-puzzle 1 from last lesson
const AviadSpaceship = Number(prompt("Enter the speed of your space-ship"))
const spaceshipB = Number(prompt("Enter the speed of the other space-ship"))

 if (AviadSpaceship > spaceshipB) {
        alert("You won!")
    } else if (AviadSpaceship < spaceshipB) {
        alert("You have to speed up!")  
    } else if (AviadSpaceship === spaceshipB) {
        alert("It's a tie!") 
    } 

