export {}
// () => {
//    console.log("welcome") 
// }
// const greeting 2 = insert here all the block of the function, ie 
// const greeting2 =  () => { console.log("welcome") }

// let name = prompt("what is your first name? ");
// let lastName = prompt("what is your last name? ");

// let getFullName = (name: string, lastName: string):string  => {
//         return name + " " + lastName
//  }

//  console.log(getFullName)

//--------------------------------------------------------------------------------------------------------------------------//

//  class puzzle:

// 1. Get full name

// make anonymous function that get firstName and lastName and return full name. 
// const getFullName = function(firstName, lastName) {
//         return `${firstName} ${lastName}`;
//       };
      
//       const firstName = prompt("Enter your first name please:");
//       const lastName = prompt("Enter your last name please");
      
//       const fullName = getFullName(firstName, lastName);
//       console.log(fullName); // Output: what user inserted.
      
// 
// למההשורה הזו לא עובדת, הרי התוכנה יודעת מה זהalert(`Your full name is : {getFullName}`); 

// 2. Get the user age
// ask the user, using a function what his age is, if is not number (isNaN) throw an error,
// use that function inside 'try catch'

// const AgeCalcul = function() {
//         const age = prompt("Enter your age:");
      
//         if (isNaN(age)) {
//           throw new Error("Invalid input. Please enter numbers ONLY!.");
//         }
      
//         return parseInt(age);
//       };
      
//       try {
//         const age = AgeCalcul();
//         console.log("Age:", age);
//       } catch (error) {
//         console.log("Error:", error.message);
//       }
      
// 3. 
// re-write the #1 in variable function, and in arrow function
// Variable function

// const getFullName = function(firstName, lastName) {
//         return `${firstName} ${lastName}`;
//       };
      
//       const firstName = prompt("Enter your first name please");
//       const lastName = prompt("Enter your last name please");
      
//       const fullName = getFullName(firstName, lastName);
//       console.log(fullName); // Output: what user inserted
      

// home puzzle:

// 1. Function and Loop - Multiplication Table:
// Write a function named multiplicationTable that takes a parameter num. 
//The function should print the multiplication table for that number from 1 up to 10 using a for loop. 
//if the num is 5 it'll print for example '5 * 1 = 5', than '5 * 2 = 10', etc up to 10.

// function multiplicationTable(num:number) {
//         for (let i = 1; i <= 10; i++) {
//           const result = number * i;
//           console.log(`${number} x ${i} = ${result}`);
//         }
//       }
      
// let calculation = prompt("Type the number you want multiplied")
// multiplicationTable(calculation);
      

// 2. Countdown Timer:
// Write a function that asks the user for a number and then counts down from that number to zero, printing each number on a new line. Use a for loop to accomplish this.
// If the user enter something not number - throw error.

// function countdown() {
//         const number = parseInt(prompt("Enter a number please:"));
      
//         if (isNaN(number)) {
//           throw new Error("Invalid input. Please enter a number.");
//         }
      
//         for (let i = number; i >= 0; i--) {
//           console.log(i);
//         }
//       }
      
//       try {
//         countdown();
//       } catch (error) {
//         console.log("Error:", error.message);
//       }
      

// 3. Bonus - Palindrome Checker:
// Create a function that asks the user for a string and checks 
// whether the string is a palindrome 
//or not. A palindrome is a word, phrase, number, or other 
// sequence of characters that reads the 
//same backward or forward. Note: This challenge must be 
// accomplished without using array methods.
// Help tools:
// in string, each word has index, if you do: 
// "ab"[0] // you'll recieved - "a"
// "ab"[1] // you'll recieved - "b"
// "ab"[2] //  you'll recieved - undefined

function getUserString() {
  const userString = prompt("Please enter a string : ");
  
  let userStringLength = userString.length;
  let halfLength = Math.floor(userStringLength/2)
  return [userString, halfLength];
  console.log(halfLength)

}

console.log(getUserString())


const checksPolindrome = () => {
  console.log("home - puzzle Bonus 3")
  const string = prompt("enter a string ");
  console.log(`${string}`);
  const strInput = string.toLowerCase();
  const inpurStr = strInput.replace(/\s/g, "");
  console.log(`${inpurStr}`);
  const len = inpurStr.length

  for (var i = 0; i < len / 2; i++)
   {

      if (inpurStr[i] !== inpurStr[len - 1 - i]) {
          return `is not palindrome`
      }
      console.log(`${inpurStr[i]} ${"="} ${inpurStr[len - 1 - i]}`);
  }
  return `is palindrome`
}
const result = checksPolindrome()
console.log(`${"the string"} ${result}`)

// 4. Bonus - Sum of Digits:
// Create a function that asks the user to enter a number and calculates the sum of its digits. 
// Note: the function needs to convert the number to a string and iterate over the digits using a loop.
// Help tools:
// a. you can convert number 1 to string '1' by doing:
// String(1)
// b. you can get the string length by soing:
// '1'.length // 1
// '11'.length // 2