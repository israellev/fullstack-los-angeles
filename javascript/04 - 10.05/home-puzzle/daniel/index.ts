export { }

//example 1
function RandomDay() {// "RandomDay" פונקציה בשם 
    let correctCount = 0;//  שאומר "correctCount" משתנה בשם 

    for (let day = 1; day <= 10; day++) {// שהשם של המשתנה יגדיר כל עוד הוא קטן מ10 תדפיס עוד יוםday פותח לולאה + משתנה בשם "day" 
        const isCorrect = Math.random() >= 0.7// משתנה בשם "iscorrect" שמביא לו פקודת math.radom שעושה פעולת חשבון מטמטיקה רנדומלית 
        if (isCorrect) {// פעולה זאת אומרת אם משתנה iscorrect נכון אז תוסיף אחד 
            correctCount++;

        }
    }
    console.log(`The student spelled the word correctly ${correctCount} times in 10 days.`);
    // הדפסה לקונסוללוג מחרוזת + משתנה חדש שמדפיס עוד יום
}
RandomDay;

//example 2
function SolarTech() {// פונקציה בשם סולארטח
    let totalEnergy = 0;// משתנה בשם טוטאלאנרגי שאומר האינדקס = 0
    for (let hour = 6; hour <= 18; hour++) {// פותח לולאה + משתנה בשם שעה =6 + שעה קטן או שווה ל18 +שעה תוספת 1 
        const energysolar = Math.floor(Math.random() * (10 - 1 + 1) + 1);// משתנה בשם אנרגיסולאר + פעולת מאטראנדום * 10-1+1 +1
        totalEnergy += energyProduced;// קריאה למשתנה +הכרזה למשתנה חדש
    }
    console.log(`The total energy produced by the solar panel for the day is ${totalEnergy} kilowatt-hours.`);// 0-הדפסה לקונסול לוג מחרוזת +המשתנה שקבענו שהוא שווה ל
}
SolarTech();// Call To Function