export { }
// (5) First Letter
// Write a funtion that gets array of names and return array with first letter of those names in upper case.
// for example from ["liad", "sarit"] it returns ["S", "L"]


function getFirstLetter(names: string[]): string[] {// מוסיף לה מערך שמות שמחזיר מערך שמות"getFirstLetter" פונקציה בשם - 
    const firstLetters: string[] = [];//    2שאומר מערך1 =למערך"firstLetters"משתנה בשם 
    for (let i = 0; i < names.length; i++) {//פותח לולאה שאומרת" אינדקס"= לאפס והמערך שקראתי לו "ניימס.לנגדס" אומר שזה יהיה בגודל של המערך ו "אינדקס ++" אומר שכל פעם שעובר על המערך הוא יוסיף מערך נוסף 
        const name = names[i];//[משתנה ניים שווה למערך שמתחיל [מהאינדקס
        const firstLetter = name.charAt(0).toUpperCase();// הוספנו פקודה שמערך 1 שווה למערך 2 שהוא משתנה אינדקס שווה 0 והבאנו לו פקודת צ'ארט שהתפקיד שלו למשוך את התו הראשון מהמחרוזת והוספנו סוגריים מרובעות כדי לדעת את המיקום , הפעולה טואפפרקייס עושה את הכתב מאותיות קטנות לאותיות גדולות
        firstLetters.push(firstLetter);//פה הוספנו משתנה בשם +פעולת פוש והשם של המשתנה שהופך אותיות 
    }
    return firstLetters;//מבקשים להחזיר את הפונקציה לאחר פוש
}
const names = ["liad", "sarit"];//משתנה בשם של המערך + שמות שאותם נרצה להמיר מאותיות קטנות לאותיות גדולות
const result = getFirstLetter(names);//משתנה בשם תוצאה = לקרוא לשם הפונקציה והמערך
console.log(result);//הדפסה לקונסוללוג על ידי השם תוצאה שקראנו למשתנה 

//----------------------------------------------------------------------------------------------------

// 6. Capital Letters
// Write a funtion that gets array of names and return array with those names in capital letter.
// for example from ["liad", "sarit"] it returns ["Liad", "Sarit"]
// (I already showed)

function capitalizeNames(names: string[]): string[] {//פונקציה בשם קפיטלליזניימ מקבלת מערך שמות ומחזירה מערך שמות
    const capitalLetters: string[] = [];//משתנה בשם קפיטללטרז שמחריז על שתי מערכים 
    for (let i = 0; i < names.length; i++) {//  לולאה שאומרת אינדקס =0 ומערך לפי אורך המערך ואז מוסיפים אחד בכל פעם שהלולאה רצה על האינדקס הנכון
        const element = names[i];//משתנה בשם אלמנט = שם המערך [ואינדקס]
        const capLetters = element.toUpperCase();// משתנה חדש בשם קפלטרס שווה למשתנה אלמנט.טואפפרקייס =ממיר את אתה השם מאותיות קטנות לאותיות גדולות
        capitalLetters.push(capLetters);//שם של המערך השני מוסיפים לו פעולת פוש למערך החדש
    }

    return capitalLetters;//מחזיר את המערך החדש אחרי פעולת פוש של המרת האותיות
}
const names = ["daniel", "liad", "ahron", "yehonatan"]//משתנה המערך + המערך 
const result1 = capitalizeNames(names);//משתנה בשם תוצאה על שם הפונקציה שמדפיס את המערך 
console.log(result1);//מבקשים להדפיס לקונסול את משתנה בשם תוצאה 

//----------------------------------------------------------------------------------------------------


// 7. Upside Down
// Write a funtion that gets array of names and return array with those names in upside order.
// for example from ["liad", "sarit"] it returns ["sarit", "liad"]

function ReverseName(arr: string[]): string[] {// פתחתי פונקציה בשם ריברסניימ + פרמטר+מערך +מערך
    const Namerevers: string[] = [];// קראתי למשתנה בשם ולמערך החדש בשם ניימסריברס
    for (let i = 0; i < arr.length; i++) {// פתחתי לולאה שאומרת אינדקס=0 וגודל המערך לפי האינדקס ואם זה נכון תוסיף אחד ללולאה
        const element = arr[i];//מתשנה אלמנט = שם מהערך מהאינדקס שלו 
        const Namerevers = arr.reverse();// קריאת למשתנה ניימסריברס = למערך + הוספת פעולת ריברס שהופכת את השמות שנמצאים במערך

    }
    return Namerevers;// מבקש להחזיר את המערך לאחר פעולת הריברס

}
const arr = [" liad ", "sarit"]// זה השמות שקבעתי שיהיו במערך 
const result2 = ReverseName(arr);// קורא למשתנה בשם "תוצאה" ואז קורא לפונקציה על ידי השם שלה 
console.log(result2); //מדפיס לקונסול את הפעולות ותוצאה חיובית :)

//------------------------------------------------------------------------------------------------------
//(8) bonus - countWords
function countWords(word1: string): number {// countWords קורא לפונקציה בשם 
    const word2 = word1.split(" ");// מה שהפעולה הזאת עושה זה לפצל את המחרוזת למערך של מיליםsplit פותח משתנה חדש ומכריז לו פעולה 
    return word1.length;// החזר של הפרמטר שהכרזתי בפונקציה ואומר לו שיהיה באורך של המערך

}
const word1 = "אני אוהב ללמוד ולעשות שיעורי בית";// משתנה בשם של הפרמטר + הוספת מחרוזת למערך 
const count = countWords(word1);//משתנה בשם חדש שקורא לפונקציה אם הפרמטר שהכרזתי
console.log(count); {// הדפסה לקוסנול את המשתנה החדש שעושה את הפעולה חילוק המילים למערך +המערך

}
//-------------------------------------------------------------------------------------------------------
// (9) bonus - Converting a string
function ConvertingString(string: string): string {//  ופרמטר של מחרוזת שמחזיר מחרוזת(שלום עולם!)ConvertingStringפתיחת פונקציה בשם 
    let reversed = "";//  שמכיל על המחרוזת שמחזירהreversed משתנה +פעולת 
    for (let i =string.length - 1; i >= 0; i--) {// לולאה שעוברת על כל המערך ואם הוא באורך של המערך היא עוברת לאינדקס פחות 1 כדי שיתאפשר לנו לעבור על כל התווים הפוך
        reversed += string[i];
  
    }
    return reversed;
    
    
}
const string = ("שלום עולם!")
const reversedStr = ConvertingString(string);