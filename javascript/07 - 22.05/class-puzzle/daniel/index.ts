export { }
// const shoppingList = ["ketshop , bamba , cola , pizza"]
// shoppingList.push("milk")
// // its add milk to shopping list 
// ["ketshop , bamba , cola , pizza , milk"]
// shoppingList.pop
// // its remove pizza from shooping list 
// shoppingList.unshift("shampo")
// // its add shampo to first shoppingList
// shoppingList.shift
// // its remove shampo frome first shoppingList

// // -----------------------------------------------------------


// // class pazzle - 1. Write a function that calls 'printState' that get 'str' parameter and print the fisrt and last string.

// function printFirstAndLast(str) {
//     console.log(str[0], str[str.length - 1]);
//     // const inputString = 'daniel leinad'
//     // printFirstAndLast(inputString)
// }
// prompt("print your name!")
// const name = (prompt)
// printFirstAndLast("daniel")
// // @ts-ignore 
// if (!isNaN(printFirstAndLast)) {
//     throw new Error("its problem");
// }
// try {
//     const a = printFirstAndLast()
// }
// catch {

// }
// // 3. avg number in array
// // Write a function that recive an array of numbers and returns the average number.
// // for example from [0, 1, 2, 3] it returns 1.5.
// // (arr: number[]) => number

// function getArrayAVERAGE(arr: number[]): number {
//     let sumArray = 0;
//     for (let index = 0; index < arr.length; index++) {
//         const element = arr[index];
//         sumArray += element
//     }
//     return sumArray / arr.length;
// }
// console.log(getArrayAVERAGE([1, 2, 8]))
// console.log(getArrayAVERAGE([3, 6, 9]))

// 4. check if array contains the item
// Write a function that recive an array and value, return true if the value exists in the array, and false if not.
// for example from ([1, 2, 3], 4) it returns false.
// (arr: number[], num: number) => boolean

function isNumInArray(arr: number[], num: number): boolean {
    for (let i = 0; i < arr.length; i++) { 
        // const value = arr[i];
        if (num === arr[i])
            return true

    }
    return  false



}
console.log(isNumInArray([1, 2, 3], 4))
console.log(isNumInArray([1, 2, 3], 1))
prompt("it's "+isNumInArray([1, 2, 3],1))