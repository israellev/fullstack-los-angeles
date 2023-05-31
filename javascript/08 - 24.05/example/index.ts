export {}

/*  type chicking: */

/* typeof "" // 'string'
typeof 1 // 'number'
typeof true // 'boolean'
typeof (() => true) // 'function'
Array.isArray([]) // true
typeof [] // 'object'

/* more if operators '&&' - and, '||' - or */

/*
var name = "Yakov"
if (name === "Yakov" || typeof name === "number") {
} */


/* custom map functoin - get array and return new array with 'func' on each item */

function map(arr: any[], func: (value: any, i: number, arr: any[]) => any): string[] {
    const newArr = []
    for (let i = 0; i < arr.length; i++) {
        // 'map'
        const result = func(arr[i], i, arr)
        newArr.push(result)
        /*
        // 'forEach' just active the function (without new array)
        func(result, i, arr)
        // 'filter' if function return true it'll add to the new function
        if (func(result, i, arr))
            newArr.push(result)
        */
    }
    return newArr
}

const arr = ["liad", "sarit", "sapir"]
console.log(arr)
const convertStringToCapitalLetter = (b: string) => b[0].toUpperCase() + b.slice(1)
console.log(map(arr, convertStringToCapitalLetter)) // ["Liad", "Sarit", "Sapir"]

const numbers = [1, 2, 3]
console.log(numbers)
console.log(map(numbers, (num) => num + 1)) // [2, 3, 4]

console.log(map(["liad", "sarit", "sapir"], () => Math.floor(Math.random() * 10) )) // [8, 2, 4] just random number for each item





/* Built-in 'map' function - function return a new item for each item in the array */

/* const buyingList = ["milk", "flower", "banana", "chokolate"]
console.log(buyingList)
console.log(buyingList.map((prodct) => prodct[0].toUpperCase() + prodct.slice(1))) // ["Milk", "Flower", "Banana", "Chokolate"]

console.log([1, 2, 3].map((num) => num + num)) // [2, 4, 6]
 */



/* Built-in 'forEach' function - function can do anything (just instead of 'for loop') */

/* const names = ["liad", "sarit", "sapir"]
const newNames = []

names.forEach((name) => {  // 'sarit'
    const newName = name[0].toLowerCase() + name.slice(1) // 'Sarit'
    newNames.push(newName)
});
console.log(names) // ["liad", "sarit", "sapir"]
console.log(newNames)// ["Liad", "Sarit", "Sapir"]
 */



/* Built-in 'filter' function  - function return boolean if item will stay in the array or not*/

/* const numbers = [1, 2, 3]
const newNumbers = numbers.filter(num => num % 2 === 0) // only even return true
console.log(numbers) // [1, 2, 3, 4]
console.log(newNumbers) // [2, 4]
 */
