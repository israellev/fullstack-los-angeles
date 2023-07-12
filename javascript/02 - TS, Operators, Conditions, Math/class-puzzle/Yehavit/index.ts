export {} 

// const userIQ = +prompt("Please enter your IQ")
// const userGender = prompt("are you male or female?")
// if (userIQ<10){
//         if(userGender==="female"){
//             alert("את אהבלה")}
//         else{
//             alert("אתה אהבל")}
//         }
// else{
//     if(userGender==="male"){
//         alert("אתה גאון")}
//     else{
//         alert("את גאונה")
//     }
//     }
    
    

// const userInput = +prompt("Please enter a number")
// if(userInput%2===0){
//     alert("Your number is even")}
// else{
//     alert("Your number is odd")
// }
    

// const num1 = +prompt("Please enter a number")
// const num2 = +prompt("Please enter a number")
// const num3 = +prompt("Please enter a number")

// if(num1>=num2){
//     if(num1>=num3){
//         alert(num1+" is the biggest")}
//     else{
//         alert(num3+" is the biggest")}
//     }
// else{
//     if(num2>=num3){
//         alert(num2+" is the biggest")}
//     else{
//         alert(num3+" is the biggest")}
//  }       

//Bonus
    
// Ask the user for the first number
var number1 = +prompt("Enter the first number:");

// Ask the user for the second number
var number2 = +prompt("Enter the second number:");

// Ask the user for the operator
var operator = prompt("Enter the operator (+, -, *, /, %, **):");

var result;

if (operator === "+") {
  result = number1 + number2;
} else if (operator === "-") {
  result = number1 - number2;
} else if (operator === "*") {
  result = number1 * number2;
} else if (operator === "/") {
  result = number1 / number2;
} else if (operator === "%") {
  result = number1 % number2;
} else if (operator === "**") {
  result = Math.pow(number1, number2);
} else {
  // Handle invalid operator
  alert("Invalid operator!");
}

// Display the result using an alert
if (result !== undefined) {
  alert("The result is: " + result);
}