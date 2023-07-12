export {}

/*  callback function */

const print = (value: any) => console.log(value)
print("Hey!!")

const runArray = (times: number, callback: (v: any) => void) => {
    for (let i = 0; i < times; i++) 
        callback(i)
}

runArray(5, print)
const arr = [1,2,3,4,5,6]
const newArr2 = map(arr, (item:any) => item = item * item)

