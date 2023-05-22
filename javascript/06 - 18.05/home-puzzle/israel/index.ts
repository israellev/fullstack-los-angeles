export {}
// daniel peretz
// prompt =שהלקוח יכול להכניס ערך או תשובה 
// isNan = זה לא מספר 
// !isNan = זה מספר! 
// throw = הודעת שגיאה לקונסול באדום 
// try = משתנה שמחיה את הפונקציה שעברה שגיאה 
// catch = בא אחרי try כמשתנה חדש 
//  ... אחרי כל throw חייב להשים  catch+try אם רוצים להמשיך האלה בפונקציה 



//(1) Homework - puzzle  לכתוב פונקציה של מספרים מ1 עד 10 
function multiplicationTable(params:Number) {
    for(let num =1; num <=10; num++)
    console.log(`the number now is`+`${num}`+`!`)
}
// -----------------------------------------------------------------------



// (2) Homework - puzzle  מבקשים מהמשתמש להזין מספר בודקים אם הקלט שהתקבל הוא לא מספר מטפילים בשגיאה ומדפיסים הודעה מתאימה 
function getAge(){
    const age =Number(prompt("pleas enter tour age nuber ( in only numbers):"));// הכרזת משתנה בשם age ומחרוזת בבקשה תתן לי את הגיל שילך במספרים בלבד
    if (isNaN(age)){ // אם המשתנה age איזנאן(זה לא מספר) 
        throw new Error("its Not Nuber bro :( try it"); // משתנה trow מעיד על שגיאה 
        return age //מחזיר משתנה age 
    }

}
try{// נסיון נוסף (מחיה את השגאיה)
const theUserAge = getAge();//שם של משתנה נוסף + משתנה של השגיאה 
console.log("user age is"+theUserAge); // הדפסה לקונסול לוג + משתנה חדש 
}catch (error) {
    alert("error has occured:" + error); //מקפיץ מודעת התרחשה שגיאה 
}


// -----------------------------------------------------------------------
// (3) Homework - puzzle bonus  
function isPalindrome(){
    var input = prompt("pleas enter string:");

}