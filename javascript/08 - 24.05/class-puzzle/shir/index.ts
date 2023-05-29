export {}

// function squareNumbers(numbers: number[]): number[] {
//     return numbers.map(nu => nu * nu)
// }

const squareNumbers = (numbers:number[]): number[] => {
    return numbers.map(nu => nu * nu)
}

const arr = [1,2,3];
console.log(arr);
console.log(squareNumbers(arr));

