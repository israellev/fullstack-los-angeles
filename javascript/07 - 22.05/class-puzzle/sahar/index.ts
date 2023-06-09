export { }

//puzzle 1
// 1. fisrt and last of string
// Write a function that calls 'printState' that get 'str' parameter and print 
// the first and last string.

function printState(str) {
    console.log(str[0]);
    console.log(str[str.length - 1]);
}
printState("lion")

//puzzle 2
// string validation
// Create a function that takes in a string, removes whitespace from both ends,
//  converts it to lower case and then replaces all occurrences of the letter 'a' with 'b'. Make sure the function throws an error if something other than a string is input. 
// for example from " aaa " it will returs "bbb".
// hint: 'const isString = isNaN(Number(str))'

function stringValidation() {
    const str = prompt("Enter the letters A in any order")
    if (!isNaN(Number(str)))
        throw "Error"    
    else {
        console.log(str.trim().toLowerCase().replace(/a/g, "b"))
    }
}

try {
    stringValidation()
}
catch (Error) {
    alert(Error)
}

// create dynamic array 
// Creat a function that received a 'num' and return array of numbers 
// that start from 0 to the number of the 'num'. 
// // for example user enter 3, the function return [0, 1, 2, 3], etc. 
function returnArrayNumbers () {
    const numberInput = Number(prompt("Enter a number"))
    for (let i = 0; i <= numberInput; i++) {
        console.log (i)
    }
}

returnArrayNumbers()

  
// // FizzBuzz Array

// // Write a function called fizzBuzzArray that takes an integer n as a parameter and 
// //returns an array containing numbers from 1 to n, but with the following modifications:

// // For multiples of 3, replace the number with the string "Fizz."
// // For multiples of 5, replace the number with the string "Buzz."
// // For numbers that are multiples of both 3 and 5, replace the number with the string "FizzBuzz."
// // For example, if the input n is 15, the function should return the array: 
// //[1, 2, "Fizz", 4, "Buzz", "Fizz", 7, 8, "Fizz", "Buzz", 11, "Fizz", 13, 14, "FizzBuzz"].

  function fizzBuzzArray(n) {
    var result = [];
    for (let i = 1; i <= n; i++)
    if (i % 3 === 0 && i % 5 === 0) {
       result.push("BuzzFizz");
    }
    else if (i % 3 === 0) {
        result.push("Fizz");
    }
    else if (i % 5 === 0) {
        result.push("Buzz");
    }
    else {
        result.push(i);
    }
    return result

}
var n = 25
console.log(fizzBuzzArray(n))
