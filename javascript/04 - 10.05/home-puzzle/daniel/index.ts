export {}
function RandomDay(){// "RandomDay" פונקציה בשם 
    let  correctCount = 0;//  שאומר "correctCount" משתנה בשם 

for(let day =1; day <= 10; day ++){// שהשם של המשתנה יגדיר כל עוד הוא קטן מ10 תדפיס עוד יוםday פותח לולאה + משתנה בשם "day" 
    const isCorrect= Math.random()>=0.7// משתנה בשם "iscorrect" שמביא לו פקודת math.radom שעושה פעולת חשבון מטמטיקה רנדומלית 
    if (isCorrect) {// פעולה זאת אומרת אם משתנה iscorrect נכון אז תוסיף אחד 
        correctCount++; 

    }
}
console.log(`The student spelled the word correctly ${correctCount} times in 10 days.`);
// הדפסה לקונסוללוג מחרוזת + משתנה חדש שמדפיס עוד יום
}
RandomDay;