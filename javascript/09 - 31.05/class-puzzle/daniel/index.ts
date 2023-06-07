export { }
//Class puzzle:

// 1. Filter out non-string types and trim whitespace (map)

// Write a function that accepts an array of different types of data. It should first use the filter function to keep only the elements that are of type string, and then use map to return a new array where each string has been trimmed of whitespace using the trim() function.
// for example from [" banana", 1, "apple "] it return ["banana", "apple"]
//-----------------------------------------------------------------------------------------------------
//example 1
function filterAndTrimStrings(arr: any[]): any { // פונקציה + שם + פרמטר שמחזיר מערך אני
    return arr// מבקש שיחזיר לי את המערך 
        .filter(item => typeof item === "string") //טייפאוף במקרה זה שומר רק על ערך ששווה סטרינג 
        .map(item => item.trim()) // מתודת מאפ לוקחת את הערך המערך וטרים מנקה רווחים 
}
const NnOfarr = ["  banana", 1, "apple  "] // שם המערך / ארר
const NewResult = filterAndTrimStrings(NnOfarr)// שם של משתנה חדש + שם המערך 
console.log(NewResult); // מבקש שידפיס לי את המשתנה החדש שזה המערך החדש שיצרנו 
//--------------------------------------------------------------------------------------------------------
//example2
function PeretzFamily(arr) {
    return arr
        .filter(item1 => typeof item1 === "string")
        .map(item1 => item1.trim());

}

const brothers = ["daniel", "ronel", 1, "adir", "sapir"];
const NewPeretz = PeretzFamily(brothers);
console.log(NewPeretz);

//----------------------------------------------------------------------------------------------------------
// 2. function ReplaceItemInArray (map)
// Write a function reaplaceItem that:
// a. find the 'itemToReplace' in the array, and replace it with 'replaceWith',
// b. return the new array.
// (arr: sting[], itemToReplace: string, replaceWith: string): string[]
// for example from itemToReplace(["shir", "yakov"], "yakov", "sapir")
// it will return ["shir", "sapir"].


function ReplaceItemInArray(arr) {
    return arr
    .forEach(item1 => typeof === "string")
    .reaplaceItem(item1 => item2 => typeof=== "string")
    .replaceWith(item1);
}
const StudentName = ["shir", "sapir"];
const NewStudent =["shir", "yakov"];
const NewConst = ReplaceItemInArray(item1 ,item2);

console.log(NewConst)

