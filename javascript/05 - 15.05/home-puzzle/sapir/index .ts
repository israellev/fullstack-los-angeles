export {}
//home puzzle:

//1. Greeting Function:
//Write a function called greet that takes one parameter name. When called, the function should print a message saying "Hello, [name]!"

function greet (name:string){
    console.log(`Hello ${name}!`);
}

//2. Square Function:
//Write a function called square that takes one parameter num and returns the square of that number (num * num).
//use that function and print the result.
let result = 0;
function square (num:number):number{
    return(result =num * num);
}
console.log(`the result is: ${result}` );

//3. Temperature Conversion Function:
//Write a function called convertToFahrenheit that takes a Celsius temperature as a parameter and returns the equivalent Fahrenheit temperature.
// The formula to convert Celsius to Fahrenheit is (celsius * 9/5) + 32.

let celsius=0;
function convertToFahrenheit (celsius:number):number{
    return(num = (celsius * 9/5) + 32);
}

//Calculate the Area of a Rectangle:
//Write a function called calculateRectangleArea that takes two parameters, width and height, and returns the area of the rectangle.

function calculateRectangleArea (width:number,height:number):number{
    return(width*height)
}

