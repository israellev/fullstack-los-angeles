
// class puzzle loop - 1
for (let i = 1; i <= 10; i++) {
    alert([`${'the number floor is'} ${[i]}`]);
}

// ---------------------------------------------
//  class puzzle loop - 2

let mishmert

for (let i = 1; i <= 10; i++) {
    mishmert = prompt(("You are in or out "))
    if (mishmert === "in") {
        alert([`${'The hour now is'} ${[i]} ${'AM'} ${'Yitzhak is watching !'}`]);

    }
    else if (mishmert === "out") {
        alert([`${'The hour now is'} ${[i]} ${'AM'} ${'Yitzhak is not !'}`]);
    }

}

// ---------------------------------------------
// home puzzle - 1

let correctCount = 0;
const isCorrect = 0;

for (let i = 1; i <= 10; i++)
{
    isCorrect = Math.random() < 0.7;
    correctCount = correctCount + isCorrect;
}

alert(`The student spelled ${correctCount} words correctly in 10 days.`);

// ---------------------------------------------
// home puzzle - 1

// הגדרת קבועים עבור שעת הזריחה ושעת השקיעה
const sunriseHour = 6;
const sunsetHour = 18;
// איתחול משתנה למעקב אחר כמות האנרגיה הכוללת המיוצרת
let totalEnergy = 0;
const energyProduced = 0 
// לולאה המתארת את הזמן המבוצעת בכל שעה משעת הזריחה ועד לשעת השקיעה
for (let hour = sunriseHour; hour <= sunsetHour; hour++) {
  // יצירת מספר רנדומלי בין 1 ל-10 לייצוג כמות האנרגיה המיוצרת בשעה זו
  energyProduced = Math.floor(Math.random() * 15) + 1;

  // הוספת כמות האנרגיה המיוצרת בשעה זו לכמות האנרגיה הכוללת
  totalEnergy += energyProduced;

  // הדפסת שעת היום וכמות האנרגיה המיוצרת בשעה זו לקונסול
  console.log(`שעה ${hour}: ${energyProduced} קילואט מיוצרים`);
}

// הדפסת סכום כמות האנרגיה הכוללת המיוצרת ליום לקונסול
console.log(`כמות האנרגיה הכוללת המיוצרת ליום היא: ${totalEnergy} קילואט`);
