export {}

//class puzzle 1 :

function differenttypes (arr:any[]): any[] {

const filterandmap=arr.filter(item=> typeof item === 'string').map(item=> item.trim());

    return filterandmap
}

const arr1= [ "shir ", 1];
console.log(arr1);

console.log(differenttypes(arr1));

//class puzzle 2 :

function reaplaceItem (arr:string[],itemToReplace: string, replaceWith:string): string[] {

    const reaplaceItem1= arr.map (item => item.replace(itemToReplace,replaceWith));
    return reaplaceItem1
    }

    const item= [ "shir", "yaacov"];
    const itemToReplace= "yaacov"
    const replaceWith= "sapir"
    console.log (reaplaceItem(item,itemToReplace,replaceWith));



    // const reaplaceItem1= arr.map (item => item.replace("shir", "yaacob"));   הטעויות שלי: 

    // return reaplaceItem1
// }

// const item= [ "yaacob", "sapir"];

// console.log ( reaplaceItem (item));

// class puzzle 3 :

function getFirstAndLast ( arr:number[]):number[] {
const allnumbers=[]

const firstnum= arr[0]
const lastnum= arr[arr.length-1];
return [firstnum, lastnum]

// const result= firstnum && lastnum   הטעויות שלי:
// allnumbers.push(result)
//     return allnumbers
}

const numbers3=[1,2,3,4];
console.log ( getFirstAndLast(numbers3));





// שאלת בונוס1

function myforEach ( arr:any[]): any[] {

    arr.forEach(item=>item callback)



}

const myfoeach= [ "shir", "apple"]


// שאלת בונוס 2:

