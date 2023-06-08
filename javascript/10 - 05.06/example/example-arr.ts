export {}

const arr = [1,2,3,4,5,6]
arr.filter((item) => item % 2 === 0)  // [2, 4, 6]



function filter(arr, cbFunction) {
    const newArr = []

    for (let i = 0; i < arr.length; i++) {
        const item = arr[i]
        const result = cbFunction(item, index, arr)
        if (result) {
            newArr.push(item)
        }
    }
    return newArr;
}
filter(arr, (item) => item % 2 === 0))  // [2, 4, 6]

function map(arr, cbFunction) {
    const newArr = []

    for (let i = 0; i < arr.length; i++) {
        const item = arr[i]
        const result = cbFunction(item, index, arr)
        newArr.push(result)
    }
    return newArr;
}
const newArr2 = map(arr, (item) => item % 2 === 0)  // [false, true, false, true, false, true]


function forEeach(arr, cbFunction) {
    for (let i = 0; i < arr.length; i++) {
        const item = arr[i]
        cbFunction(item, index, arr)
    }
}
const newArr3 = forEeach(arr, (item) => item % 2 === 0)  // [false, true, false, true, false, true]















