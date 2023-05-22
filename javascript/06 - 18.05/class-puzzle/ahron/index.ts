export{};

// const getFullName = (firstName:string, lastName:string):string => {
//     const Full = `${[firstName]} ${[lastName]}`;
//     return Full;
// };

// const firstName = (prompt(`what yuore name ?`));
// const lastName = (prompt(`waht youre last name ?`));
// const Full = getFullName(firstName , lastName);
// console.log (Full);
 


/// home puzzle////////

function userage():Number{
    const user = prompt(`waht your age?`);
    const age = Number(user)
    const isNotNumber = isNaN(age) 
    if (isNotNumber) {
        throw `input error`;
    }
  else {
    return age

  }
}
try{
const user = userage()
console.log (`the user age is `,user) 
}catch(c){
alert (c)
}

console.log("The code is continue");
 
//  Function and Loop - Multiplication Table:
// Write a function named multiplicationTable that takes a parameter num.
//  The function should print the multiplication table for that number from 1 up to 10 using a for loop. if the num is 5 it'll print for example '5 * 1 = 5', than '5 * 2 = 10', etc up to 10.

// function multiplicationTable(num) {
//   for (let i = 1; i <= 10; i++) {
//     const result = num * i;
//     console.log(`${num} * ${i} = ${result}`);
//   }
// }

// multiplicationTable(5);
