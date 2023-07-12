export {}


function printState(str:string) {
    console.log(str[0])
    console.log(str[str.length-1])
}

function stringValidation(str:string) {
    str = str.trim()
    str = str.toLowerCase()
    str = str.replace(/"a"/g, "b")
return str
}

function setArray(num:number): any {
   let arr = [] 
    for (let index = 0; index < num-1; index++) {
        arr.push(index)
        
    }
}

function sumArray(arr: number[]):number {
    let sum = arr[0];
    for (let i = 1; i < arr.length; i++) {
      sum += arr[i];
    }
    
    return sum;
    
     }

  function findMaxArray(arr: number[]):number {
    let max = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i]>max)  
        max = arr[i];
      }
      
      return max;
  }

  function findAvgOfArray(arr: number[]):number {
    let avg = 0;
          avg = sumArray(arr)/arr.length
    
    return avg;
    
  }

  function findItemInArray(arr: number[],num:number):boolean {
    
    for (let i = 0; i < arr.length; i++) {
        if (arr[i]===num)  
        return true;
      }
      
      return false;
    }
  
    function findMinArray(arr: number[]):number {
        let min = arr[0];
        for (let i = 1; i < arr.length; i++) {
            if (arr[i]>min)  
            min = arr[i];
          }
          
          return min;
      }