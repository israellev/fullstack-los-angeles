export {}

//1. Doubling an Array of Numbers
//Create a function named squareNumbers that takes an array of numbers and returns a new array with the square of each number.
// Use the map function to achieve this.
//example: from [1, 2, 3, 4, 5] it returns [2, 4, 6, 8, 10]

function squareNumbers (arr:number[]):number[]{//פונקציה אשר מקבלת מערך מסוג מספר ומחזירה מערך מסוג מספר
    const newArr= arr.map((num)=> num * num);//משתנה חדש אשר יקבל מערך חדש מתוך המערך הקיים בעזרת פןנקצית מאפ , הפונקצית מאפ תבצע על כל הפריטים במערך את הלוגיקה של חזקה 
    return newArr;//מחזיר את המערך החדש

}

const numbers = [2,4,6,8,10];
const square = squareNumbers (numbers) 
console.log(square);
  

//2. Convert list of names to capital letters
//Create a function named capitalNames that takes an array of strings and returns a new array with same string in capital first letter.
// Use the map function to achieve this.
//example: from ["john", "smith"] it returns ["John", "Smith"]

function capitalNames (arr:string[]):string[]{//פונקציה אשר מקבלת מערך מסוג סטרינג ומחזירה מערך מסוג סטרינג
    const newArr = arr.map((name)=> name.charAt(0).toUpperCase()+ name.slice(1));
    //יצרנו משתנה חדש אשר יקבל את המערך הקודם ובעזרת פונקצית מאפ יקבל מערך חדש
    //על המערך החדש תתבצע לוגיקה שקודם כל תקבל את האות הראשונה של כל שם במערך באינדקס 0 
    //ואז תהפוך את האות שהתקבלה לאות גדולה 
    //ומוסיפה לזה + את שאר השם באמצעות סלייס
    return newArr
}
const name = ["sapir", "emmanuel", "shir", "sarit"];
const capitalLatter = capitalNames(name);
console.log(capitalLatter);




