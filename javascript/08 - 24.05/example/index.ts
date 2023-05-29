export {}

/*  callback function */

/* const print = (value: any) => console.log(value)
print("Hey!!")

const runArray = (times: number, callback: (v: any) => void) => {
    for (let i = 0; i < times; i++) 
        callback(i)
}

runArray(5, print)
 */

/* typeof "" // 'string'
typeof 1 // 'number'
typeof true // 'boolean'
typeof (() => true) // 'function'
Array.isArray([]) // true
typeof [] // 'object'

var name = "Yakov"

if (name === "Yakov" || typeof name === "number") {

} */





function map(arr: any[], func: (value: any) => any): string[] {
    const newArr = []
    for (let i = 0; i < arr.length; i++) {
        const result = func(arr[i])
        newArr.push(result)
    }
    return newArr
}

const convertStringToCapitalLetter = (b: string) => b[0].toUpperCase() + b.slice(1)

const arr = ["liad", "sarit", "sapir"]
console.log(arr)
console.log(map(arr, convertStringToCapitalLetter))

const numbers = [1, 2, 3]
console.log(numbers)
console.log(map(numbers, (num) => num + 1))

/* example */

const buyingList = ["Milk", "Flower", "Banana", "Chokolate"]

console.log(buyingList)
// console.log(map(buyingList, (product: string) => Math.floor(Math.random() * 10) ))

/*  */

console.log(buyingList.map((prodct) => Math.floor(Math.random() * 10)))
[1, 2, 3].map((num) => num + num)
// const name = arr[i]
    // const newName = name[0].toUpperCase() + name[0].slice(1)
    // newArr.push(newName)