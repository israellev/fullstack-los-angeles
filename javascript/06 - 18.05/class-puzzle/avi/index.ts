export {};
// make anonymous function that get firstName and lastName and return full name.
// const getFullName = (firstName:string , lastName:string):string =>{
//     const full =  firstName + " " + lastName
//      return full;
// }
// const firstName = prompt("enter your first name")
// const lastName = prompt("enter your last name")
// const fullName = getFullName(firstName,lastName)
// console.log(fullName);
// Get the user age
// ask the user by a function what is age, if is not number (isNaN) throw an error,
// use that function inside 'try catch'

function userAge() {
  const age = prompt("What is your age");
  if (isNaN(age)) {
    console.log(`${"is not a number "}`);
  }
  return Number(age);
}
const age = userAge();

if (isNaN(age)) {
  console.log("you need to put number refresh the page");
} else {
  console.log(`${"user age is : "} ${age}`);
}

// // re-write the #1 in variable function, and in arrow function

// const userAge = () => {
//     const age = prompt("What is your age")
//     if (isNaN(age)) {
//         console.log(`${"is not a number "}`);
//     };
//     return Number(age)
// };
// const age = userAge();

// if (isNaN(age)) {
//     console.log("you need to put number refresh the page")

// } else {
//     console.log(`${"user age is : "} ${age}`);
// }
