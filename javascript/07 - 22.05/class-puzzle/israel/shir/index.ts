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

// function avgNumber(num: number[]): number {
// let sum=0;
// for( let i=0; i< num.length; i++) {
//     const value = num[i];
//      sum= sum+value
// }

// return sum/ num.length;

// }

// console.log(avgNumber([ 1,2,3]));
// console.log(avgNumber([ 1,2,7]));


// שאלה 4 בהום פזאל :

// function checkIf(arr: number[], num: number): boolean {

//     for (let i = 0; i < arr.length; i++) {

//         const value = arr[i]

//         if (num === value)
//             return true;
//     }

//     return false;

// }

// console.log(checkIf([4, 5, 6], 8));
// console.log(checkIf([1, 2, 3], 2));




// שאלה 1 קלאס פאזל:

// function printState (str:string){

// const friststr= str[0];

// const laststr= str[str.length - 1];

// console.log (friststr);
// console.log( laststr);

// }

// console.log( printState("shir malka"))
// console.log( printState("daniel malkash"))

// שאלה 2 קלאס פאזל:
// לשאול למה האס טי אר באיזנאנ צעק עליי כשלא כתבתי נמבר ירוק, אבל עבד בכל זאת.
function stringValidation (str:string):string{
        
    if(isNaN(Number(str))) {

   str= str.trim();
    str=str.toLocaleLowerCase();
    str=str.replace(/a/g, "b");

    return str;
    }

    else {
        return "error"
    }
}

console.log ( stringValidation ("SHIR MALKA"));

// שאלה 3 קלאס פאזל:

function  dynamicArray (num:number):number[] {

    const myarray= []

    for( let i=0 ; i<num; i++) {
 
    myarray.push(i)

}

    return myarray
}

console.log ( dynamicArray(7));

// home puzzle 1:

function Sumthearray (num:number[]): number {

    let sum=0
    for (let i=0; i<num.length ;i++) {


         sum= sum+ num[i];

    
    }

    return sum
}

console.log (Sumthearray ([ 1,2,3]));

//home puzzle 3:

function  avgnumberinArray (num:number[]): number {

    let sum=0 
    for ( let i=0; i<num.length; i++){

    sum= sum+ num[i];
    }

    const avg= sum / num.length

    return avg
}

console.log( avgnumberinArray([1,2,3,4]));

// home puzzle 2 :

function maxnumberinArray ( num:number[]) : number {


    let max_i=0; 

    for ( let i=0; i< num.length; i ++) {


       if ( num[i]> num[max_i]) {
        max_i=i;
       }
    }
    return max_i


    
}

console.log( maxnumberinArray([1,2,3]));


// home puzzle 4:

function arrayContains (num1:number[], num2:number): boolean {

    for( let i=0; i<= num1.length; i++)
        if (num1[i]===num2){
        return true; }

        else 
        return false

}

console.log ( arrayContains([1,2,3], 4));

// home puzzlle 5:

function FirstLetter ( names:string[]): string[] {

    const firstletters= [];

    for (let i=0; i<names.length; i++){

    const name= names[i]

    const firstlet= name.charAt(0).toUpperCase();
    
        firstletters.push(firstlet);
    }

    
    return firstletters;
}

console.log ( FirstLetter(["shir", "liad", "sarit"]));

//home puzzle 6:

function CapitalLetters( names:string[]):string[]{
const namesarray= [];

for (let i=0; i<names.length; i++) {

    const name= names[i];
    const upper = name.toUpperCase();

    namesarray.push (upper);

}
    return namesarray;
}


console.log (CapitalLetters(["shir", "sarit", "meshi"]));

// home puzzle 7:

function UpsideDown ( names:string[]): string[] {

    return names.reverse()
}

console.log( UpsideDown(["shir","sapir","sarit","sahar"]));