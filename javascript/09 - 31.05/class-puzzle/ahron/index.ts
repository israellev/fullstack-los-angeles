export{}

// function filterAndTrimStrings(arr: any[]): string[] {
//     const stringArr: string[] = arr.filter((item) => typeof item === 'string');
//     const trimmedArr: string[] = stringArr.map((item) => item.trim());

//     return trimmedArr;
//   }
  
//   const data: any[] = [" banana", 1, "apple "];
//   const result: string[] = filterAndTrimStrings(data);
  
//   console.log(result); // 

 


//     // 2. Grocery Health Filter (filter): 
//     // You have an array of grocery items. Some of them are healthy and some are not. Use the filter function to create a new array without 'cake' and 'candy' if they're exists.

// const groceryItems = ["תפוחים", "עוגה", "תפו''א", "מלח", "סוכריות"];

// const filteredItems = groceryItems.filter((item) => item !== "עוגה" && item !== "סוכריות");

//         console.log(filteredItems);

// // 3. function getFirstAndLast:
// from example from [1, 2, 3] it'll return [1, 3] (the first and last item only)
// than use extraction to save 1 and 2 to "first" and "last" variables.

const getFirstAndLast = (arrey:any[]) :any[]=>{
    const first = arrey[0];

    const last = arrey[length-1]; 

    const slicearr= arrey.slice(first && last) ;

    return slicearr
};

let  exmples = [1,2,3,4];
const result = getFirstAndLast(exmples);
console.log (result);