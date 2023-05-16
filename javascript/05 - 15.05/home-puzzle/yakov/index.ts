export {};
// // 1. Greeting Function:
// Write a function called greet that takes one parameter name. When called, the function should print a message saying "Hello, [name]!"
const yourname = prompt("enter your name");
function greet(yourname) {
  console.log(`${"helow"} ${yourname}`);
}
greet(yourname);

// 2. Square Function:
// Write a function called square that takes one parameter num and returns the square of that number (num * num).
// use that function and print the result.

function square(num: number): void {
  console.log(num * num);
}

// 3. Temperature Conversion Function:
// Write a function called convertToFahrenheit that takes a Celsius temperature as a parameter and returns the equivalent Fahrenheit temperature. The formula to convert Celsius to Fahrenheit is (celsius * 9/5) + 32.

function convertToFahrenheit(num: number) {
  console.log(`${[(num * 9) / 5 + 32]} ${"F"}`);
}
