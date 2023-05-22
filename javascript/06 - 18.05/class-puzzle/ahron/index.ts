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
