export {}

function map( arr:number[], func:(squer:number)=> number): number[] {

const newarr=[];

for(let i=0; i< arr.length; i++){

const result= func(arr[i]);
newarr.push(result)

}

return newarr

}

const squareNumbers=  (num:number) => num**2

const arr= [1,2,3];
console.log(arr);
console.log(map(arr,squareNumbers));

