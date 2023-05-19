export {}


// // const getfullname= (name1, name2: string): string => {

// //     return ` ${name1} ${name2}` ;
// // }

// //  getfullname("shir", "malka");

// // console.log( getfullname("sarit" ,"tsvika"));



// function getUserAge(): Number { 
//     const age= prompt( "what is your age?");
//     const ageNumber= Number (age);
//     const isnotnumber= isNaN (ageNumber);
     
//     if ( isnotnumber) {
//     throw false}
//     else {

//         return ageNumber
//     }
// }

// try { 
//     const age= getUserAge()
//     console.log( `אתה בן ${age}`);
// }

// catch ( a) {
//     alert(a)
// }

// console.log ( " the code is continu");



// //  שאלה 3  rrow function:
// const getFullName= (firstname:any, lastname : string): string => {

// const allName= `${firstname} ${lastname}`;
// return allName;

// }

// console.log(getFullName("shir", "malka"));

// //variable function:

// // שמירת פונקציה במשתנה
// const greeting = function(name) {
//     console.log("שלום, " + name + "!");
//   };
  
//   // שימוש בפונקציה המשתנה
//   greeting("יוסי"); // פלט: שלום, יוסי!
//   greeting("שרה"); // פלט: שלום, שרה!



//   const getFullName= function( firstname, lastname:string):string {

//     return `${firstname} ${lastname}`
//   }
  
// console.log(getFullName("shir malka", "hamalka"));



// home puzzle 1. Function and Loop - Multiplication Table:


// function multiplicationTable (num:number) : Number { // למה הוא צועק עליי?
    
//     for( let i=1; i<= 10 ; i++) {

//     let result= i * num ;

    // console.log(`${num} * ${i} = ${result}`); // האם הקונסון לא היה צריך  להיות מחוץ לסקופ של הלולאה או הפונקציה?

// }
// }

// console.log( multiplicationTable(5));




// home puzzle 2. Countdown Timer:

function countdownTimer (num: number) : number { 

    const giveMeNumbernu= Number(prompt("give me a numbrt"));

    let i= 0

    for( i=0; i<= num; i++){
     
       let result= giveMeNumbernu- i ;


     console.log (result);
}
}
countdownTimer(8);
