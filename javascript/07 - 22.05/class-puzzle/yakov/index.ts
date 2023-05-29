export {};
// class puzzle:
// 1. Write a function that calls 'printState' that get 'str' parameter and print the fisrt and last string.
console.log("class puzzle: 1------------------");
// function printState(name: string) {
//   // b=input.length[]
//   console.log(name);
//   console.log(name[0]);
//   console.log(name[name.length - 1]);
// }
// printState("yakov");

// 2. Create a function named stringManipulation that takes in a string, removes whitespace from both ends, converts it to lower case and then replaces all occurrences of the letter 'a' with 'x'. Make sure the function throws an error if something other than a string is input
console.log("class puzzle: 2------------------");
// function stringValidation(string: string):void {
//   const streingg = prompt("please enter a string:");
//   if (isNaN(Number(streingg)))
//     throw  Error("oops! you didnt enter a string");
//   else {
//     let chng1 = streingg.replace(/^\s+|\s+$/gm, "");
//     let chng2 = chng1.toLowerCase();
//     let chng3 = chng2.replace(/a/g, "x");
//     console.log(chng3);
//   }
// }

//    try {
//        stringValidation()
//    }
//    catch (Error) {
//        alert(Error)
//  }

// function stringValidation() {
//   const str = prompt("Enter the letters ");
//   if (!isNaN(Number(str))) throw "Error";
//   else {
//     console.log(str.trim().toLowerCase().replace(/a/g, "b"));
//   }
// }

// try {
//   stringValidation();
// } catch (Error) {
//   alert(Error);
// }

// 3. create dynamicArray
// Creat a function that received a 'num' and return array of numbers
// that start from 0 to the number of the 'num'.
// for example user enter 3, the function return [0, 1, 2, 3], etc.
// (num: number) => number[]

console.log("class puzzle: 3------------------");

function createNumberArray(num: number): Array<number> {
  let numberArray = [];
  for (var i = 0; i <= num; i++) {
    numberArray.push(i);
  }
  return numberArray;
}
console.log(createNumberArray(5));
