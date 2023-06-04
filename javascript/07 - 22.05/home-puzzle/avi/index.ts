export { }
// 1. Sum the array numbers
// Write a function that receive array of numbers (only) as a parameter, 
// and return the result of all numbers together.

console.log("Home pzzle - 1")
function sumArray(numbers) {
    let sum = 0;
    for (var i = 0; i < numbers.length; i++) 
    {
        if (isNaN(numbers[i]))
         {
            continue;
        }
        sum = sum + parseInt(numbers[i]);
    }
    return sum;
}

let array = [1, 'door', 3, '4', 'five'];
let result = sumArray(array);
console.log(result);

// 2. max number in Array 
// Write a function that recive an array of numbers and returns the bigget number index.
// for example from [1, 2, 3] it returns 2 (the index of 3).

console.log("Home pzzle - 2")
function findMax(num:number[]):number{
    let max = 0;
    let count = 0;
    for (let i = 0 ; i < num.length ; i++){
        if (max < num[i])
        {
            max = num[i];
            count = i
        }
        
    }
    return count
}
let num = [1, 2, 13, 15,25, 2, 14];
let count = findMax(num);
console.log(`${"the index of maximum number in this array is :"} ${count}`);

// 3. avg number in array
// Write a function that recive an array of numbers and returns the average number.
// for example from [1, 2, 3] it returns 2.

console.log("Home pzzle - 3")
function avgArray(numArray : number[]) :number{
    
    let sumArray = 0;
    for (let i = 0; i < numArray.length; i++)
    {
     sumArray = sumArray + numArray[i]          
    }

    return Math.ceil(sumArray/numArray.length) 
}
let numArray = [1, 2, 13, 15, 2, 14];
let resultAvg = avgArray(numArray);
console.log(`${"the average in this array is :"} ${resultAvg}`);

// 4. check if array contains the item
// Write a function that recive an array and value, return true if the value exists in the array, and false if not.
// for example from ([1, 2, 3], 4) it returns false.

console.log("Home pzzle - 4")
function containsValue(arr:number[], value:number):string {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === value) {
        return `${value} ${"="} ${arr[i]}`;
      }
    }
    return `the value its not exsits in the array`;
  }
  
  let arra = [1, 2, 3,400,50,42,15];
  let value = 15;
  let resultCheck = containsValue(arra, value);
  console.log(resultCheck );

//  bonus--------------------------------------

console.log("Home pzzle from CHET-GPT - 5")
function concatArrays (arr1 , arr2) {
    
    if(arr1.length > arr2.length){
        for (let i = 0; i < arr1.length; i++) {
            arr2.push(arr1[i])   
        }
        return console.log(`${arr2}`)
    }
    else{
        for (let i = 0; i < arr2.length; i++) {
            arr1.push(arr2[i])   
        }
        return console.log(`${arr1}`)
    }
    
}
let arr1 = [1,2,13,5,2,4];
let arr2 = [1,2,13,5];
concatArrays(arr1,arr2);

console.log(`------------------------------`)
console.log(`Avraham You Are The BEST!!!!!`)