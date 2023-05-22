export {};
// prompt =שהלקוח יכול להכניס ערך או תשובה
// isNan = זה לא מספר
// !isNan = זה מספר!
// throw = הודעת שגיאה לקונסול באדום
// try = משתנה שמחיה את הפונקציה שעברה שגיאה
// catch = בא אחרי try כמשתנה חדש
//  ... אחרי כל throw חייב להשים  catch+try אם רוצים להמשיך האלה בפונקציה

//(1) Homework - puzzle  לכתוב פונקציה של מספרים מ1 עד 10
function multiplicationTable(num: number): void {
    let i = 1;
    while (i <= 10) {
      const result = num * i;
      console.log(`${num} * ${i} = ${result}`);
      i++;
    }
  }