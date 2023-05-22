export {}

// 1) Function and Loop - Multiplication Table: Write a function named multiplicationTable that takes a parameter num. The function should print the multiplication table for that number from 1 up to 10 using a for loop. if the num is 5 it'll print for example '5 * 1 = 5', than '5 * 2 = 10', etc up to 10. 

// function multiplicationTable(num: number): void {
//     let i = 1;
//     while (i <= 10) {
//       const result = num * i;
//       console.log(`${num} * ${i} = ${result}`);
//       i++;
//     }
//   }
  
//   // Example usage
//   multiplicationTable(5);

//   2) Countdown Timer: Write a function that asks the user for a number and then counts down from that number to zero, printing each number on a new line. Use a for loop to accomplish this. If the user enter something not number - throw error.
  
// function countdownTimer(): void {
//     const userInput = prompt("Enter a number:");
  
//     if (userInput === null) {
//       return; // User clicked cancel, exit the function
//     }
  
//     const count = parseInt(userInput);
  
//     if (isNaN(count)) {
//       throw new Error("Invalid input. Please enter a number.");
//     }
  
//     for (let i = count; i >= 0; i--) {
//       console.log(i);
//     }
//   }
  
//   // Example usage
//   countdownTimer();

// 3) Bonus - Palindrome Checker:
// Create a function that asks the user for a string and checks whether the string is a palindrome or not. A palindrome is a word, phrase, number, or other sequence of characters that reads the same backward or forward. Note: This challenge must be accomplished without using array methods.
// Help tools:
// in string, each word has index, if you do: 
// "ab"[0] // you'll recieved - "a"
// "ab"[1] // you'll recieved - "b"
// "ab"[2] //  you'll recieved - undefined


function isPalindrome(str: string): boolean {
    const len = str.length;
    const middleIndex = Math.floor(len / 2);
  
    for (let i = 0; i < middleIndex; i++) {
      if (str[i] !== str[len - 1 - i]) {
        return false;
      }
    }
  
    return true;
  }
  
  // Example usage
  const userInput = prompt("Enter a string:");
  if (userInput === null) {
    // User clicked cancel, exit the program
    console.log("No input provided.");
  } else {
    const result = isPalindrome(userInput);
    console.log(`"${userInput}" is ${result ? 'a palindrome' : 'not a palindrome'}.`);
  }