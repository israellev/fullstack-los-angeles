export {}


function differenttypes (arr:any[]): any[] {

const filterandmap=arr.filter(item=> typeof item === 'string').map(item=> item.trim());

    return filterandmap
}

const arr1= [ "shir ", 1];
console.log(arr1);

console.log(differenttypes(arr1));