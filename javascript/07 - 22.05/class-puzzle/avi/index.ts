export {}
// תרגיל 1: מציאת מספר מקסימום במערך
// כתוב פונקציה בשם findMax שמקבלת מערך של מספרים ומחזירה את המספר המקסימלי במערך.
function findMax (num) {
    let max = num[0]
    for (let i = 0 ; i <num.length  ; i++){
        if (num[i] > max){
        max = num[i]
        }
        console.log(max[i])
    }
    return max 

}
let num = [1,2,13,15,2,14];
findMax(num);
console.log(`${"the maximum number in this array is :"} ${findMax(num)}`);
// תרגיל 2: חיבור מערכים
// כתוב פונקציה בשם concatArrays שמקבלת שני מערכים ומחזירה מערך המכיל את כל האיברים משני המערכים המקוריים.
function concatArrays (arr1 , arr2) {
    
    return arr1.conect(arr2)

}
let arr1 = [1,2,13];
let arr2 = [1,2,13];
concatArrays(arr1,arr2);
console.log(`${"the maximum number in this array is :"} ${concatArrays(arr1,arr2)}`);
// תרגיל 3: סכום מספרים במערך
// כתוב פונקציה בשם sumArray שמקבלת מערך של מספרים ומחזירה את סכום המספרים במערך.

// בהצלחה בפתרון התרגילים! אני כאן אם יש לך שאלות נוספות.