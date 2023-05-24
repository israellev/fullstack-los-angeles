export {}

//1. fisrt and last of string
//Write a function that calls 'printState' that get 'str' parameter and print the fisrt and last string.

function printState(){// יצירת פונקציה שמקבלת פרמטר 
    const userInput=prompt("please enter a word :")//לבקש מהמשתמש שיכניס מילה 
   
    const firstString = userInput[0];//מדפיסה את האינדקס הראשון של המילה שהתקבלה 
    console.log("the first letter is" + firstString);

    const lastString =userInput.length -1//מדפיסה את האינדקס האחרון של המילה 
    console.log("the last letter is" + lastString);
}
    printState();//קריאה לפונקציה 

//2. string validation
//Create a function that takes in a string, removes whitespace from both ends, converts it to lower case and then replaces all occurrences of the letter 'a' with 'b'.
// Make sure the function throws an error if something other than a string is input. 
//for example from " aaa " it will returs "bbb".
//hint: 'const isString = isNaN(Number(str))'

function stringValidation(){//פןנקציה הבודקת האם הקלט המהמשתמש זה מחרוזת ובמידה וכן תבצע על המחרוזת מספר פעולות
    const userInput= prompt("please enter a string:");//בקשה מהמשתמש להכניס מחרוזת 
    if(isNaN(Number(userInput)))//בדיקה האם המשתמש הכניס מחרוזת או לא באמצעות ניסיון להמיר את המחרוזת למספר באמצעות הפונקציה נאמבר אם לא ניתן להמיר את המחרוזת למספר אז נגיע לפונקציה איזנאן 
    throw new Error("oops! you didnt enter a string");// אם איזנאן הוא שקר אז המשתמש יקבל שגיאה כי כנראה המשתמש לא הכניס מחרוזת
    else{// אחרת, (במידה ןהאיזנאן הוא אמת -הקלט מהמשתמש אינו מספר)  
    console.log(userInput.trim().toLowerCase().replace(/a/g, "b"))//יתבצעו הפעולות הללו
    }
}

//.3 create dynamic array 
//Creat a function that received a 'num' and return array of numbers 
//that start from 0 to the number of the 'num'. 
//for example user enter 3, the function return [0, 1, 2, 3], etc. 

function dynamicArray (){//פונקציה שתקבל מהמשתמש מספר ןהיא תחזיר את כל המספרים המובילים עד לאותו מספר, כולל
    const userInput=Number(prompt("please enter a number:"));//בקשה מהמשתמש להכניס מספר 
    const myArray=[];//משתנה אשר מקבל את המערך 
    for(let i =0; i<=userInput; i++){//לולאה שמתחילה מ0 ועד לאותו מספר אותו הכניס המשתמש כולל המספר שהכניס, ומעלה ב1 
        myArray.push(i);//השורה הזו מוסיפה את הערך שמתקבל בכל איטרציה בלולאה למשתנה "המערך שלי"  באמצעות פונקציה פוש 
    }
    return myArray;// הפונקציה צריכה להחזיר את המערך שהתקבל בסיום הלולאה
}
