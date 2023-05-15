export {}
let numOfCorrectSpelling =0;// משתנה אשר יעקוב אחרי מספר איותים נכונים

for(let days = 1; days<=10; days++){  //מאתחלת לולאת FOR שתרוץ 10 פעמים 
    const random = Math.random(); //בתוך הלולאה ישנו משתנה בשם רנדום אשר משתמש בפונקצית רנדום  ומייצג את מספר ההזדמנויות שיש לתלמיד לאיית מילה 
    if(random <= 0.7) //משפט if  (70% שהוא יאיית נכון) אשר מתנה שאם המספר הוא קטן או שווה ל0.7 אז התלמיד איית את המילה נכון 
    numOfCorrectSpelling++;// במידה והתלמיד איית את המילה נכון המשתנה יעלה ב1

}
// אחרי שהלולאה נגמרת נדפיס כמה פעמים התלמיד הצליח לאיית נכון 
console.log(`the student was able to spell the word correctly ${numOfCorrectSpelling} times`);

//-----------------------------------------------------------------------------------------------------------------

let totalEnergy =0;// משתנה אשר יקבל בסוף ערך של סך האנרגיה המופקת
for(let hour=1; hour<=12; hour++){ // לולאה אשר רצה 12 פעמים 
    const amountOfEnergy = Math.round(Math.random() *10 ) + 1;// פונקציה רנדום שמעוגלת באמצכות פונקצית ראונד , הפונקציה רנדום מציגה מספרים רנדומלים מ1-10 המייצגים כמות אנרגיה 
    totalEnergy+=amountOfEnergy;// סכימה של כמות אנרגיה מופקת 
}
console.log(`the total energy produced by the solar panel is : ${totalEnergy}`);// הדפסה כמה כמות אנרגיה הלוח הסולרי הפיק 

//-----------------------------------------------------------------------------------------------------------------------------


//extra practicing 

//Exercise 1: Grade Calculator
//Write a program that accepts a student's score as input and outputs their corresponding grade based on the following grading scale:

//A: 90-100
//B: 80-89
//C: 70-79
//D: 60-69
//F: 0-59 


var score = parseInt(prompt("please enter the student score:"));

if (score >=90 && score <= 100){
     console.log("Grade : A");
}else if (score >=80 && score <=89){
    console.log("Grade : B");
}else if(score >=70 && score <=79){
    console.log("Grade : C");
}else if (score >=60 && score >=69 ){
    console.log("Grade : D");
}else if (score >=0 && score <=59){
    console.log("Grade : F");
}

//Exercise 2: Time of Day Greeting
//Write a program that takes the current hour as input and displays a greeting message based on the time of day:

//0-11: Good morning
//12-17: Good afternoon
//18-23: Good evening

var currentHour = new Date().getDate();

if (currentHour >=0 && currentHour <=11){
    console.log("Good Morning");
}else if(currentHour >=12 && currentHour >=17){
    console.log("Good Afternoon");
}else if (currentHour >=18 && currentHour >=23){
    console.log("Good Evening");
}

//Exercise 3: Day of the Week
//Write a program that prompts the user to enter a number from 1 to 7 representing a day of the week. Display the corresponding day name using a switch-case statement:

//1: Sunday
//2: Monday
//3: Tuesday
//4: Wednesday
//5: Thursday
//6: Friday
//7: Saturday

var weekDay = parseInt(prompt("please enter the day of the week (using numbers from 1-7):"));

switch(weekDay){
    case 1:
        console.log("Sunday");
        break;
    case 2:
        console.log("Monday");
        break;
    case 3:
        console.log("Tuesday");
        break;
    case 4:
        console.log("Wednesday");
        break;
    case 5:
        console.log("Thursday");
        break;
    case 6:
        console.log("Friday");
        break;
    case 7:
        console.log("Saturday");
        break;
    default:
        console.log("invalid number");
        break;

}

//Exercise 4: Calculator
//Write a program that asks the user to enter two numbers and an operator (+, -, *, /). Perform the corresponding operation and display the result using a switch-case statement.


var number1 = parseFloat(prompt("please enter the first number:"));
var number2 = parseFloat(prompt("please enter the second number:"));
var operator = prompt("please e nter one of the following operators : +, -, /, *");
var result;

switch (operator){
    case "+":
        result= number1+number2;
        console.log("the result is:" + result);
        break;
    case "-":
        result= number1-number2;
        console.log("the result is:" + result);
        break;
    case "*":
        result=number1 * number2;
        console.log("the result is:" + result);
        break;
    case "/":
        result = number1 / number2;
        console.log("the result is :"+ result);
        break;
    default:
        console.log("invalid operator");

}

//Exercise 5: Leap Year Checker
//Write a program that prompts the user to enter a year and determines whether it's a leap year or not.
// Display the result using an if-else statement.
// A leap year is divisible by 4, except for years that are divisible by 100 but not divisible by 400.

var year = parseInt(prompt("please enter the year:"));

if (year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0)){
    console.log(year + "is leap year ");
}else {
    console.log(year + "is not leap year");
}

//Write a program that asks the user to enter a month number (1-12) and prints the corresponding month name.

var month = parseInt(prompt("please enter a month by number from 1-12:"));

switch(month){
    case 1:
        console.log("January");
        break;
    case 2:
        console.log("Fabuary");
        break;
    case 3:
        console.log("March");
        break;
    case 4:
        console.log("April");
        break;
    case 5:
        console.log("May");
        break;
    case 6:
        console.log("June");
        break;
    case 7:
        console.log("July");
        break;
    case 8:
        console.log("August");
        break;
    case 9:
        console.log("September");
        break;
    case 10:
        console.log("October");
        break;
    case 11:
        console.log("November");
        break;
    case 12:
        console.log("December");
        break;
    default:
        console.log("you enter a number that doesnt exust in the monthly calender")

}
