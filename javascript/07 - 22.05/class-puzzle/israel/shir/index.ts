export { }


// הטייפ לפני הקריאה לפונקציה, אחרי הסוגריים של הפרמטרים של הפונקציה, יכתב רק כשאני רוצה שהפונקציה תחזרי לי .
// רק כשיש לי return 

// אינדקס סופר לי את המיקום של האותיות או מיקום של הדברים ברשימה ומתחיל מאפס
// האורך לנג מתחיל מאחד וסופר לי את אורך המילה או כמות הפרטים במערך
// המערך נכנס בתוך פרמטר, הפרמטר הראשון שהפונקציה תקבל זה יהיה המערך

//שאלה מספר 1 הום פאזל:
// function printstate () {
// const prints:string=String(prompt( "תכניס מילה"));

// console.log( prints[0]);
// console.log (prints[prints.length - 1]);


// }
// printstate(); 

// // שאלה מספר 2 הום פאזל:

// function strValidation () {
// let valid: string = String(prompt("give me string"));
// // @ts-ignore
// if (!isNaN(valid)) {
//     throw "error!"
// }
// else(
// valid = valid.trim();
// valid = valid.toLocaleLowerCase();
// valid =valid.replace(/a/g, "b");)

// return valid

// }

// console.log( strValidation());







// const input = prompt("Enter a number or text:");
// const isNumber = !isNaN(input);

// if (isNumber) {
//   console.log("The input is a number.");
// } else {
//   console.log("The input is not a number.");
// }






//3. create dynamic array :

// function dynamicArray (num):number[]{

// const numberArray = [];


// let i=0
// for ( i=0; i<num; i++){

//    numberArray.push(i);

// }

// return numberArray;

// }


// console.log( dynamicArray(6));

//1. Sum the array: home puzzle:

// function Sumthearray (num[]) {

//     let sum=0 
//     let i=0;
//     for (i=0; i<= num.length; i ++){

//         sum += num[i];
//     }

//     return sum

// }

// const num= [1,2,3]

// console.log ( Sumthearray (num));





//

function avgNumber(num: number[]): number {
let sum=0;
for( let i=0; i<= num.length; i++) {
    const value = num[i];
     sum= sum+value
}

return sum/ num.length

}

console.log(avgNumber([ 1,2,3]));
console.log(avgNumber([ 1,2,7]));
  