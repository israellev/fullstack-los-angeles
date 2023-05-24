export {}

//1. Write a function that calls 'printState' that get 'str' parameter and print the fisrt and last string.

// function printState(str: string):void {
//     if (!str) {
//         console.log("string parameter cannot be empty.");
//         return;
//     }
//     const firstChar = str[0];
//     const lastChar = str[str.length -1];

//     console.log(`First character: ${firstChar}`);
//     console.log(`Last character: ${lastChar}`);
// }

// const exampleString = "I am Sarit!";
// printState(exampleString);


// 2. Create a function named stringManipulation that takes in a string, removes whitespace from both ends, converts it to lower case and then replaces all occurrences of the letter 'a' with 'x'. Make sure the function throws an error if something other than a string is input

function stringManipulation(str: string): string {
   if(typeof str !== 'string') {
   throw new Error ('input must be a string.');

}

}