export{}

// // ברשימה  פונקציה שמדפיסה את המילה ההראשונה והאחרונה 

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



// // 2.string validation
// // Create a function that takes in a string, removes whitespace from both ends, converts it to lower case and then replaces all occurrences of the letter 'a' with 'b'. Make sure the function throws an error if something other than a string is input
// // for example from " aaa " it will returs "bbb".



// // function validate (){
// //   const validation:string = prompt (`How are you ? `); 
// //   if( validation !==  `string`) {
// // throw Error(`input error`);

// //   }
// // const validationtrim= validation.trim();
// // const toLowerCasevali = validationtrim.toLowerCase();
// // const transfromstring = toLowerCasevali.replace ( /a/g, `b`)
 
// // return console.log (transfromstring)

// // }

// //  validate ()


 
// // 3. create dynamic array 
// // Creat a function that received a 'num' and return array of numbers 
// // that start from 0 to the number of the 'num'. 
// // for example user enter 3, the function return [0, 1, 2, 3], etc. 

 function dynamicArray (num) {
const array = [] ;

for (let i= 0; i<=num; i++){
array.push(i) ;
} 

return array
}

 const num = 3;

 const result = dynamicArray(num);
 console.log (result);



 dynamicArray(7);
 console.log ();