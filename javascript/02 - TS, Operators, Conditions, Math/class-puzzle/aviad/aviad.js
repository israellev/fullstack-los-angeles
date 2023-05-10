// שאלה 1 

var iqLevel = Number(prompt("בבקשה הכנס/י את רמת האיי קיו שלך במספרים שבין 1-20"));
var gender =(prompt("בבקשה הכנס/י את המין שלך "));

if (iqLevel < 10 ){
  if (gender === "גבר"){
    console.log(" אתה אהבל חביבי");
  }
    else if (gender === "אישה"){
    console.log("את אהבלה חביבתי");
  }
}
    else {
      if (gender === "גבר"){
      console.log("אתה גאון");
  }
       else if (gender === "אישה"){
      console.log("את גאונה");
  }
}

// שאלה 2 

var number = parseInt(prompt("please enter a number:"));

if (number % 2 === 0 ){
    alert(number + "is an Even number");
} else{
    alert(number + "is an Odd number");
}


// שאלה 3 

var number1 = parseFloat(prompt("please enter the first number:"));
var number2 = parseFloat(prompt("please enter the second number:"));
var number3 = parseFloat(prompt("please enter the third number:"));

var largerNumber;

if (number1 >= number2 && number1 >= number3){
    largerNumber = number1;
}else if (number2 >= number1 && number2 >= number3){
    largerNumber = number2;
}else {
    largerNumber = number3;
}

//שאלת בונוס 

var number1 = parseFloat(prompt("please enter the first number:"));
var number2 = parseFloat(prompt("please enter the second number:"));

var operator = prompt("pleas enter one of the following operators:(+, -, *, /, %, **)");
var result;

if(operator === "+"){
    result=number1 + number2;
}else if (operator === "-"){
    result=number1 - number2;
}else if (operator === "*"){
    result=number1 * number2;
}else if(operator === "/"){
    result=number1 / number2;
}else if (operator === "%"){
    result=number1 % number2;
}else if (operator === "**");{
    result= Math.pow(number1, number2);
}

alert("the result is:" + result);