export {}
// home puzzle:

// 1. Greeting Function:
// Write a function called greet that takes one parameter name. When called, the function should print a message saying "Hello, [name]!"
const userName = prompt("Enter your name");
function greeting(userName){
    console.log(`${"hallo"} ${userName}`);
}
greeting(userName);


// 2. Square Function:
// Write a function called square that takes one parameter num and returns the square of that number (num * num).
// use that function and print the result.
const userNum = Number(prompt("Enter number"));
function square(userNum){
    const result = Math.pow(userNum,2);
    return result;
}
const sum = square(userNum);
console.log(`${"the result is : "} ${result}`);

// 3. Temperature Conversion Function:
// Write a function called convertToFahrenheit that takes a Celsius temperature as a parameter and returns the equivalent Fahrenheit temperature. The formula to convert Celsius to Fahrenheit is (celsius * 9/5) + 32.
function cToF(celsius){
    let celToFehr = (celsius * 9/5)+35;
    console.log(`${"celsius to farhenit result is : "} ${celToFehr}`);
}
cToF(Number(prompt("Enter calsius temparture")));