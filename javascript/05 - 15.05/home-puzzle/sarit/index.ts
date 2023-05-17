export {}
// //  1) Greeting Function: Write a function called greet that takes one parameter name. When called, the function should print a message saying "Hello, [name]!"
function greet(thename) {
    let name = prompt("Enter your name:");
    console.log(`Hello, ${thename}!`);
}
greet("Queen sarit");

// 2. Square Function:
// Write a function called square that takes one parameter num and returns the square of that number (num * num).
// use that function and print the result.

const userNum = Number(prompt("Enter number"));

const square = (num) => {
    const result = Math.pow(num, num);
    console.log("The result is: " + result);
};

square(userNum);

// 3. Temperature Conversion Function:
// Write a function called convertToFahrenheit that takes a Celsius temperature as a parameter and returns the equivalent Fahrenheit temperature. The formula to convert Celsius to Fahrenheit is (celsius * 9/5) + 32.

function convertToFahrenheit(celsius) {
    const fahrenheit = (celsius * 9/5) + 32;
    return fahrenheit;
  }
  
  const celsiusTemp = 20; // Example Celsius temperature
  const fahrenheitTemp = convertToFahrenheit(celsiusTemp);
  console.log(`${celsiusTemp}°C is ${fahrenheitTemp}°F`);
