export { }
//puzzle 1
function multiplicationTable(parameterNumber) {
  for (let i = 1; i <= 10; i++) {
    const excercise = i * parameterNumber
    console.log(excercise)
  }
}
// multiplicationTable(4)

//puzzle 2
function countDown() {
  const parameter = Number(prompt("Enter a number to start countdown"))
  const isNotNumber = isNaN(parameter);

  if (isNotNumber) {
    alert("You didn't enter a number")
    countDown()
    //throw "You can type only numbers!";
  }
  else {
    for (let i = parameter; i >= 0; i--) {
      console.log(i)
    };
  }
}

try {
  const parameter = countDown();
  console.log(parameter)
} catch (error) {
  alert(error);
}


// //puzzle 3
// // function createPalindrome () {
// //     const word = (prompt("Enter a palindrome word"))
// //     let palindrome = []
// //     if (word) {
// //         word [3210]
// //         console.log(`The word ${word} is a palindrome`)
// //     }

// //     else {
// //         console.log(`The word ${word} is not a palindrome`)
// //     }
// // }

// // createPalindrome()

// //bonus puzzle
// // function numberDigitsCalculate () {
// //     const number = Number(prompt("Enter a number"))
// //     String(number)
// //     for (let i = 1; i = number; i++) {
// //        console.log('number'.length)
// //     }

// // }
// // numberDigitsCalculate()