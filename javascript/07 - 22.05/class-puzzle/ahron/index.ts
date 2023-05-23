export{}
// class puzzle
// 1/.
// fisrt and last of string
// Write function that calls 'printState' that get 'str' parameter and print 
// the fisrt and last string.


// ברשימה  פונקציה שמדפיסה את המילה ההראשונה והאחרונה 

// function printFirstAndLast(str){
// const firstName=str[0];
// const lastName =str[str.length -1 ];
// console.log (firstName);
// console.log (lastName);
// }

// // קריאה לפונקציה 
 
// function printstate(str){
//   console.log  ([0],[str.length -1]);
// }



// const arr = [`w`,`e`,`w`,`f`]
// printstate(arr); 
// printFirstAndLast(arr);


// 2.string validation
// Create a function that takes in a string, removes whitespace from both ends, converts it to lower case and then replaces all occurrences of the letter 'a' with 'b'. Make sure the function throws an error if something other than a string is input
// for example from " aaa " it will returs "bbb".

function validate (){
  const validation = prompt (`How are you ? `); 
  if( validation !==  ``) {
throw `input error`;
  }
const validationtrim= validation.trim();
const toLowerCasevali = validationtrim.toLowerCase();
const transfromstring = toLowerCasevali.replace ( /a/g, `b`)
 
return console.log (transfromstring)

}

 validate ()
