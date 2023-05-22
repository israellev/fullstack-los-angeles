export {}

function multiplicationTable (num:number){//אתחלתי פונקציה שמקבלת ערך מסוג מספר 
    for(let i =1; i<=10; i++){//בתוך הפונקציה תרוץ לולאה מ1 עד 10 ותעלה ב1 
        const result = num * i;//בכל איטרציה יתבצע חישוב של הערך שהתקבל בלולאה כפול המספר  
        console.log(`${num} * ${i} = ${result}`);//בסיום כל איטרציה יודפס החישוב שהתבצע 
    }
}