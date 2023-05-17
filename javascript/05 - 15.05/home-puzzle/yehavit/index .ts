export {}

function greet (name: string){
    console.log("Hello " + name + "!");
}
let name = prompt("אנא הכנס את שמך:");

function square(num:number):number {
    return(num * num)
}

console.log(square(3))

function convertToFahrenheit(celsius:number):number {
    return (celsius * 9/5) + 32
}
let celsius = 0
// let userInput = prompt("אנא הכנס ערך:");
// if (isNaN(userInput)) {
//   console.log("הערך שהוזן אינו מספר.");}
// else {
//     let celsius = userInput;}
convertToFahrenheit (celsius);
