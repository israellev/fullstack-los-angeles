export {}

function squareNumbers(numbers: number[]): number[] {
    return numbers.map(nu => nu * nu)
}

// // const squareNumbers = (numbers:number[]) => numbers.map(nu => nu * nu)


const arr = [1,2,3];
console.log(arr);
console.log(squareNumbers(arr));




// לא מה שהוא ביקש אבל גם יצא לי את להתוצאה הרצויה:


// function map( arr:number[], func:(squer:number)=> number): number[] {

//     const newarr=[];
    
//     for(let i=0; i< arr.length; i++){
    
//     const result= func(arr[i]);
//     newarr.push(result)
    
//     }
    
//     return newarr
    
//     }
    
//     const squareNumbers=  (num:number) => num**2
    
//     const arr= [1,2,3];
//     console.log(arr);
//     console.log(map(arr,squareNumbers));
    