export{}

// //puzzle 1
// // Sum the array numbers
// // Write a function that receive array of numbers (only) as a parameter, 
// // and return the result of all numbers together.

// function sumArrayNumbers(numbers: number[]): number {
//     let total = 0;
//     for (let i = 0; i < numbers.length; i++) {
//       total += numbers[i];
//     }
//     return total;
//   }
//   const myArray = [2, 4, 6, 8, 12];
//   const result = sumArrayNumbers(myArray);
//   console.log(result); 

// //   2. max number in Array 
// // Write a function that recive an array of numbers and returns the bigget number index.
// // for example from [1, 2, 3] it returns 2 (the index of 3).

// function getMaxNumberIndex (arr: number[]/*מה הפונקציה מקבלת*/): number /* return מה הפונקציה מחזירה*/ {
    
//     let maxNumber = 0;
//     for (let i = 0; i < arr.length; i++) {
//         const value = arr[i] 
//         if (value > maxNumber) {
//             maxNumber = value
//         }
        
//     }
//     return arr.indexOf(maxNumber)
    
// }

// getMaxNumberIndex([6,2,8,3])

// // 3. avg number in array
// // Write a function that recive an array of numbers and returns the average number.
// // for example from [1, 2, 3] it returns 2.
// function getAveNumber (arr: number[]): number {
//     let sum = 0
//     for (let i = 0; i < arr.length; i++) {
//     sum += arr[i];
//     }
//     return (sum/arr.length);
// }

// const arreyNumbers = [1,2,3,4,5]
// const result2 = getAveNumber(arreyNumbers)
// console.log(result2);

// // 4. check if array contains the item
// // Write a function that recive an array and value, 
// // return true if the value exists in the array, and false if not.
// // for example from ([1, 2, 3], 4) it returns false.

//  function itemChecker (array: number[], myNumber : number): boolean {

//     for (let i = 0; i < array.length; i++) {
//             if (myNumber === array[i]) {
//                 return true;
//             }

//         }
//             return false    
//  }

// const array = [1, 3, 35];
// const myNumber = 35;
// const result3 = itemChecker(array, myNumber);
// console.log(result3);

// function lowestNumber (arr: number[]) : number {
//     let minimumNumber = arr[0]
//     for (let i = 0; i < arr.length; i++) {
//         console.log("minimumNumber is ",minimumNumber,arr[i],minimumNumber > arr[i])
//         if (minimumNumber > arr[i]) {
//             minimumNumber = arr[i]
//         }
//     }
//     return minimumNumber
// }

// const array2 = [1,5,6,-1,4]
// // const result4 = lowestNumber(array2)
// // console.log(result4)

// // //5. First Letter
// // // Write a funtion that gets array of names and return array with first letter of those names in upper case.
// // // for example from ["liad", "sarit"] it returns ["S", "L"]

// function getFirstLetterName (arr) {
//     var newArr = [];
//     for (let i = 0; i < arr.length; i++) {
//         var name = arr[i]
//         var firstLetter = name[0].toUpperCase();
//         newArr.push(firstLetter)

//     }
//     return (newArr);
// }
// console.log(getFirstLetterName(["sarit","liad"]));


//6. Capital Letters
// Write a funtion that gets array of names and return array with those names in capital letter.
// for example from ["liad", "sarit"] it returns ["Liad", "Sarit"]

// function getFirstLetterName (arr) {
//     var newArr = [];
//     for (let i = 0; i < arr.length; i++ ) {
//         var name = arr[i];
//         var firstLetterName = name[0].toUpperCase();
//         var restName = name.slice(1);
//         newArr.push(firstLetterName + restName);
//     }
//     return newArr;
// }
// console.log(getFirstLetterName(["sarit","liad"]));

// 7. Upside Down
// Write a funtion that gets array of names and return array with those names in upside order.
// for example from ["liad", "sarit"] it returns ["sarit", "liad"]

// function getReversedArray(arr) {
//     var namesArr = []
//     for (let i = 0; i = arr.length; i++) {
//         var names = namesArr.reverse
//         namesArr.push (names)
//     }
//     return (namesArr)
// }
// console.log (getReversedArray(["liad","sarit","sapir","shir"]))
