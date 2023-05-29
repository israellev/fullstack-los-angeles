 export{}

//1. fisrt and last of string
//Write a function that calls 'printState' that get 'str' parameter and print the fisrt and last string.

// function printstate(){
//   const userinput = prompt(`plase enter word:`);

//   const firstString = userinput[0];
//   console.log ("the first letter is"+firstString );

//   const lastString = userinput.length-1
//   console.log ("the last letter is" + lastString);

// }
// printstate()

//2. string validation
//Create a function that takes in a string, removes whitespace from both ends, converts it to lower case and then replaces all occurrences of the letter 'a' with 'b'.
// Make sure the function throws an error if something other than a string is input. 
//for example from " aaa " it will returs "bbb".
//hint: 'const isString = isNaN(Number(str))'

// function validation(){
//   const userInput = prompt("please inter a string : ");
//   if(isNaN(Number(userInput)))
//   throw new Error ("oops! you didnt enter a string ");
//   else{
//     console.log (userInput.trim().toLocaleLowerCase().replace(/a/g,"b"))
//   }
// }



//.3 create dynamic array 
//Creat a function that received a 'num' and return array of numbers 
//that start from 0 to the number of the 'num'. 
//for example user enter 3, the function return [0, 1, 2, 3], etc. 

function dynamicArray(){
  const userInput=Number(prompt("please entre number:"));
  const myArray = [];
  for (let i = 0; i < userInput; i++) {
    const element = userInput[i];
    
  }
}

function dynamicArray (){
  const userInput=Number(prompt("please enter a number:")); 
  const myArray=[];
  for(let i =0; i<=userInput; i++){
      myArray.push(i); 
  }
  return myArray;

// home puzzle:

// 1. Sum the array
// Write a function that receive array of numbers (only) as a parameter, 
// and return the result of all numbers together.
// for example from [1, 2, 3] it returns 6
// // 


// 2. max number in Array 
// Write a function that recive an array of numbers and returns the bigget number index.
// for example from [1, 2, 3] it returns 2 (the index of 3).

// 3. avg number in array
// Write a function that recive an array of numbers and returns the average number.
// for example from [1, 2, 3] it returns 2.

// 4. check if array contains the item
// Write a function that recive an array and value, return true if the value exists in the array, and false if not.
// for example from ([1, 2, 3], 4) it returns false.

