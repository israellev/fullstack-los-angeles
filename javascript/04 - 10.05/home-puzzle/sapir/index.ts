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