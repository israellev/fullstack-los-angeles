export {};
/* 2 ways for functions - regular, anonymous*/
// function greeting() {
//   console.log("welcom1");
// }
// greeting();

// /* anonimos function*/
// () => {
//   console.log("welcom2");
// };

// const greeting2 = () => {
//   console.log("welcom2");
// };
// greeting2();

// // class puzzle:
// 1. Get full name
// make anonymous function that get firstName and lastName and return full name.
// let name = prompt("pleas enter your name");
// let lastname = prompt("pleas enter your lastname");

// const Getfullname = (name: string, lastname: string): string => {
//   return `${"your fuul name is :"} ${name} ${lastname}`;
// };
// console.log(Getfullname(name, lastname));

// let firstName= prompt("Please enter your firstName")
// let lastName = prompt("Please enter your lastName")
// const Getfullname =(firstName:string,lastName:string ):string => {
// return (`${firstName} ${lastName}`);
// }
// Getfullname( firstName,lastName )

// 2. Get the user age
// ask the user by a function what is age, if is not number (isNaN) throw an error,
// use that function inside 'try catch'
// const a = Number (prompt("Please enter your age"))
// function age(num:number):number{
//     if(a===isNaN){
//         alert(`Your age is ${a}`)

//     }
// }

function getuserage(): number {
  const age = Number(prompt("what your age"));
  const agenumber = Number(age);
  const isnotNumber = !isNaN(agenumber);
  if (!isnotNumber) {
    throw `${age} is not a number!!!`;
  }
  return agenumber;
}
try {
  const age = getuserage();
  console.log(age);
} catch (error) {
  alert("the code is dad");
}
