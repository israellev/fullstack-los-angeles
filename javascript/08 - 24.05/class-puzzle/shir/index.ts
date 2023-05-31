export {}

// function squareNumbers(numbers: number[]): number[] {
//     return numbers.map(nu => nu * nu)
// }

// const squareNumbers = (numbers:number[]): number[] => {
//     return numbers.map(nu => nu * nu)
// }

// const arr = [1,2,3];
// console.log(arr);
// console.log(squareNumbers(arr));

//

// const numbers2 = [1, 2, 3].filter(num => num === 1)
// console.log(numbers2) 


// //home puzzle 1: בסוף ישראל שינה את השאלות אז זו לא שאלה מס אחד 

// function FilterandMap (numbers: number[]): number[] {

//     return numbers.map(num=> num * num).filter(num=> num % 2 === 0)
// }

// const arr= [1,2,3,4,5,6];

// console.log (FilterandMap (arr));


// home puzzle 1 :

// const list=["banana", "apple", "chocolate"];
// const newlist=[];
// list.forEach((parameter1)=>{
// const newparameter= list[0]
// newlist.push(newparameter)
// })

// console.log(newlist)

// home puzzle1:

// const list=["banana", "apple", "chocolate"];
// list.forEach(item=> {

//     console.log(item)})


//home puzzle2:

const list= ["banana","apple","cake","candy"]


const newlist= list.filter(item=> item!=="cake" && item !== "candy")
console.log(newlist);

    
//home puzzle 3:

const Fahrenheit=[100,200,300,400]
const Celsius= Fahrenheit.map((temperature)=> (temperature  - 32) * (5/9)


)
console.log(Celsius);

// home puzzle 4:

function GetArrayTypes ( arr:any[]) : any[] {

const newarr= arr.map( typeany=> typeof typeany)

return newarr

} 

console.log ( GetArrayTypes([ 1, "shir,", true, false]))