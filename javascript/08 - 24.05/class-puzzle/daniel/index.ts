export { }
//  class puzzle 
// 1. Doubling an Array of Numbers
// Create a function named squareNumbers that takes an array of numbers and returns a new array with the square of each number. Use the map function to achieve this.
// example: from [1, 2, 3, 4, 5] it returns [2, 4, 6, 8, 10]

// function squareNumbers(arr:number[]):number[] { //פונקציה +שם+מערך מספרים+מחזיר מערך מספרים
//   return arr.map((n)=> n*n)// מבקש שיחזיר לי את המערך שהכרזתי+פעולת מאפ ואז עושה ערך מהמערך בשם שאני בוחר ועושה חץ שאומר תחזיר לי ערך מהמערך ואז תרגיל הגיוני לפי הבקשה מהתרגיל שביקשו ערך*ערך
// }

// const arr =[1, 2, 3, 4, 5]; // אלו הם המספרים שקבעתי שיהיו בתוך המערך שהכרזתי 
// const daniel = squareNumbers(arr)// פה אני יוצר משתנה חדש שאני מכניס לו את הפונקציה והמערך (בתוך סוגריים) ביחד 
// console.log(daniel) // פה אני מבקש מהקונסול להדפיס לי את המשתנה החדש שיצרתי שהוא כולל את הפונקציה והמערך ביחד 
//-------------------------------------------------------------------------------------------------------------
// example num 2

// function HowMuchMoney(Numbers:number[]):number[]{
// return Numbers.map((H)=>H*H)
// }
// const HOW = [10,20,30,40,50]
// const Money =HowMuchMoney(HOW)
// console.log(Money+ " ?כמה כסף אני יכול למשוך בפעולה זו? ")
//-------------------------------------------------------------------------------------------------------------
// 2. Convert list of names to capital letters (map)
// Create a function named capitalNames that takes an array of strings and returns a new array with same string in capital first letter. Use the map function to achieve this.
// example: from ["john", "smith"] it returns ["John", "Smith"]

// function capitalNames(arr1:string[]):string[]{ // פונרציה + שם +מערך+החזר מערך
//     return arr1.map((C)=>C[0].toUpperCase() + C.slice(1)) // מבקש שיחזיר לי את המערך + פעולת מאפ+ערך 1 מהמערך במקרה הזה הוא שם +לקרוא לערך במיקום 0 ולעשות לו פעולת החלפת אותיות גדולות ואז מביא את הערך שחזר ועושה לו פעולת סלייס במיקום 1 כי אני רוצה רק את האות הראשונה 
// }
// const arr1 = ["daniel","aharon","israel","yhonatatn","liad","shir","sapir","sarit","sahar","yhavit","itzhak","yaakova","aviad","tzahi","avi"]
// const NewName1 =capitalNames(arr1) // מכריז על משתנה חדש שקורא לפונרציה + המערך
// console.log(NewName1) // מדפיס את המשתנה החדש שהבאתי לקונסול לוג 
// console.log("This is the best class ")
//-------------------------------------------------------------------------------------------------------------
// home puzzle:

// 1. Print Shopping List (forEach)
// You have a shopping list represented as an array of strings. Use the forEach function to print each item on the shopping list.

//  לא עבד ----דרך מס 1 לכתוב את התרגיל 
// const ShoppingList = ["milk","cocacola","woter","bread","chocolate","freez fruits"]
// shoppingList.forEach(function (NamesOfList)(products:string[])){

// }
// console.log(products)

//דרך מס 2 
function ShoppingLists(products1: string[]){

    return products1.forEach((L)=>)


};

const List1 = ["milk", "cocacola", "woter", "bread", "chocolate", "freez fruits"]
const TheProductIs = ShoppingLists(List1)
console.log(TheProductIs)