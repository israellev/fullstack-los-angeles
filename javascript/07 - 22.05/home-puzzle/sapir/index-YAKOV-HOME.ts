export {}

//1. Sum the array
//Write a function that receive array of numbers (only) as a parameter, 
//and return the result of all numbers together.
//for example from [1, 2, 3] it returns 6

function sumOfArray (numbers:number []): number{
    let sum: number = 0;
    for (let i: number =0; i < numbers.length ; i++){
        sum += numbers[i];
    }
    return sum;
}

let numbers:number []=[1, 2, 3];
let result: Number = sumOfArray(numbers);
console.log(`the sum of the array numbers are: ${result}`);

//2. max number in Array 
//Write a function that recive an array of numbers and returns the bigget number index.
//for example from [1, 2, 3] it returns 2 (the index of 3).
//מתבקשים להחזיר את האינדקס של המספר הגבוה 

function maxNumberInArray (arr:number []): number{
    let max: number =0;
    for (let i: number =0; i < numbers.length ; i++){
        if(arr[i] > arr[max]){
            max=i;
        }
    }
    return max;
}
let numbers1:number[]=[2,4,8,9];
let result1: Number = maxNumberInArray(numbers);
console.log(`the maximum number in the array is ${result1}`);

//3. avg number in array
//Write a function that recive an array of numbers and returns the average number.
//for example from [1, 2, 3] it returns 2.

function avgNumberInArray (numbers:number[]): number{
    let sum: number = 0;
    for (let i:number =0; i < numbers.length; i++){
        sum+= numbers[i]
    }
    let average:number = sum / numbers.length
    return average;
}
let numbers2 =[2, 4 , 6 ,8];
let result2=avgNumberInArray(numbers);
console.log(`the average of the array is: ${result2}`);



//4. check if array contains the item
//Write a function that recive an array and value, return true if the value exists in the array, and false if not.
//for example from ([1, 2, 3], 4) it returns false.

function arrayContainsNumber(arr:any[], value:any[]): boolean{
    for(let i =0; i < arr.length; i++){
        if (arr[i]===value){
            return true;
        }
        return false
    }
}

const arr = [10, 22, 3];
const value = 4;
const contains = arrayContainsNumber(arr, value);
console.log(contains); 

//5. First Letter
//Write a funtion that gets array of names and return array with first letter of those names in upper case.
//for example from ["liad", "sarit"] it returns ["S", "L"]

function getFirstLetter(names: string[]): string[]{
    const firstLetters:string[]=[];// משתנה מסוג מערך חדש שיכיל את האותיות הראשונות של השמות
    for (let i =0; i < names.length; i++){//לולאה שתעבור על כל משתנה במערך 
        const name= names[i];// משתנה בתוך הלולאה אשר יקבל את השם הנוכחי מהמערך
        const firstLetter = name.charAt[0].toUpperCase();//משתנה אשר יקבל את האות הראשונה של כל שם במערך ושירשור שהאות תהפוך לגדולה
        firstLetters.push(firstLetter); //דוחפים בשיטת פוש את האות הראשונה הגדולה למשתנה מסוג מערך שיצרנו בשורה 78
}
   return firstLetters;
}

  const names = ["liad", "sarit"];
  const result3 = getFirstLetter(names);
  console.log(result3); 


//6. Capital Letters
//Write a funtion that gets array of names and return array with those names in capital letter.
//for example from ["liad", "sarit"] it returns ["Liad", "Sarit"]
//(I already showed)

function getNameToCapLetter(names: string[]): string[]{
    const capitalLetters: string [] = [];
    for (let i = 0; i < names.length; i++) {
        const name = names[i];
        const firstLatter = name[0].toUpperCase()//מקבל את האינדקס הראשון של האות והופך אותה לאות גדולה
        const restname = name.slice(1, name.length);//מקבלים את שאר השם עד סוף האורך שלה 
        capitalLetters.push(firstLatter + restname);// מחברים את שניהם
        //const newWay = firstLatter.replace(firstlatter[0], firstLatter[0].toUpperCase())//דרך נוספת שניתן לעשות את התרגיל במקום שורות 103 104 
        //capitalLatter.push(newWay)
    
    }
    return capitalLetters;
}

const name = ["liad", "sarit","sapir", "shir"];
const result4 = getNameToCapLetter(name);
console.log(result4);

//7. Upside Down
//Write a funtion that gets array of names and return array with those names in upside order.
//for example from ["liad", "sarit"] it returns ["sarit", "liad"]

function reverseNames(names: string[]): string[] {
    return names.reverse();
  }
  
  const names4 = ["sapir", "sarit", "liad"];
  const reversedNames = reverseNames(names4);
  
  console.log(reversedNames);




