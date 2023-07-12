export {}

function greet (name: string){
    console.log('Hello ${name} !');
}
let name = prompt("אנא הכנס את שמך:");

function square(num:number):number {
    return(num * num)
}

console.log(square(3))

function convertToFahrenheit(celsius:number):number {
    return (celsius * 9/5) + 32
}
let celsius = 1;
let userInput = prompt("אנא הכנס ערך:");
let userInputCheck = Number(userInput);
if (isNaN(userInputCheck))
  console.log("הערך שהוזן אינו מספר.");
else {
    let celsius = userInputCheck;}
convertToFahrenheit (celsius);
