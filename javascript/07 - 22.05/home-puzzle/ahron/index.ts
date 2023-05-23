export{}

// ברשימה  פונקציה שמדפיסה את המילה ההראשונה והאחרונה 

function printFirstAndLast(str){
const firstName=str[0];
const lastName =str[str.length -1 ];
console.log (firstName);
console.log (lastName);
}

// קריאה לפונקציה 
 
function printstate(str){
  console.log  ([0],[str.length -1]);
}



const arr = [`w`,`e`,`w`,`f`]
printstate(arr); 
printFirstAndLast(arr);