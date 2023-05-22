export {}
function Multiplication (num:number) {
    for (let i=1; i<11; i++)
        alert (i*num)
}


function countdown() {
    let input = prompt("Enter a number:");
    let inputCheck = Number(input)
    
    // Check if the input is a valid number
    if (isNaN(inputCheck)) {
      throw new Error("Invalid input. Please enter a number.");
    }
    
    var number = parseInt(input);
    
    for (var i = number; i >= 0; i--) {
      console.log(i);
    }
  }
  
  // Call the countdown function
  try {
    countdown();
  } catch (error) {
    console.error(error);
  }

  function palindromeChecker(){
    let str = prompt("Please enter a string:");
    let stringlength = str.length
    let index = 0;
    let isPalindrome = 0;
    while ( index <= stringlength/2) {
            if (str.charAt(index) === str.charAt(stringlength - index)){
                index++
                isPalindrome = 1
            }
                
            else
                index = stringlength/2
            }
    if (isPalindrome===1)
            console.log("Your string is a palindrome")
            console.log("Your string is not a palindrome")
    }

function sumOfDigits() {
    let input = prompt("Please enter a number:");
    let inputCheck = Number(input)
    
    // Check if the input is a valid number
    if (isNaN(inputCheck)) {
      throw new Error("Invalid input. Please enter a number.");
    }
    let str = String(num);
    let stringlength = str.length;
    let sum = 0;
    for (let index = 0; index < stringlength; index++) {
        sum = Number(str[index]) + sum; 
    }
return sum;
}

try {
    sumOfDigits();
  } catch (error) {
    console.error(error);
  }