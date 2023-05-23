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

function maxNumberInArray (numbers:number []): number{
    let max: number =0;
    for (let i: number =0; i < numbers.length ; i++){
        if(numbers[i] > numbers[max]){
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

function arrayContainsNumber(numbers:number []): number{

}

