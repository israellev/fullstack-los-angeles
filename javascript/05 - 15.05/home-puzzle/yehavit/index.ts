export {}

let name = prompt("אנא הכנס את שמך:");

function greet (name: string){
    console.log("Hello " + name);
}

greet(name);

function square(num:number):number {
    return(num * num)
}

console.log(square(3))

function convertToFahrenheit(celsius:number):number {
    return (celsius * 9/5) + 32
}
let celsius = 1;
let userInput = +prompt("אנא הכנס ערך:");
if (isNaN(userInput))
  console.log("הערך שהוזן אינו מספר.");
else {console.log(convertToFahrenheit (userInput))
};
