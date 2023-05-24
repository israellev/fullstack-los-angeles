export { }

//puzzle 1
function printState(str) {
    console.log(str[0]);
    console.log(str[str.length - 1]);
}
printState("lion")

//puzzle 2
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

// Sum the array numbers
// Write a function that receive array of numbers (only) as a parameter, 
// and return the result of all numbers together.

function sumArrayNumbers(numbers) {
    let total = 0;
    for (let i = 0; i < numbers.length; i++) {
      total += numbers[i];
    }
    return total;
  }
  const myArray = [2, 4, 6, 8, 12];
  const result = sumArrayNumbers(myArray);
  console.log(result); 
    