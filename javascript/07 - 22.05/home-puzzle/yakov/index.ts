export {};

// home puzzle:
console.log("home puzzle 1 -------------------");
// 1. Sum the array
// Write a function that receive array of numbers (only) as a parameter,
// and return the result of all numbers together.
// for example from [1, 2, 3] it returns 6
function sumNumbers(num: number[]): any {
  let sum = 0;
  for (let i = 0; i < num.length; i++) {
    sum = num[i] + sum;
  }
  return sum;
}
let inputarr = [1, 2, 3];
let summ = sumNumbers(inputarr);
console.log(summ);

// 2. max number in Array
// Write a function that recive an array of numbers and returns the bigget number index.
// for example from [1, 2, 3] it returns 2 (the index of 3).
// (arr: number[]) => number
console.log("home puzzle 2 -------------------");
const arrbignum = (arr: number[]): any => {
  let result = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > arr[arr.length - i]) {
      return (result = i);
    }
  }
};
let arrnum = [5, 322, 14, 81, 61];
let Maxnum = arrbignum(arrnum);
console.log(Maxnum);

// 3. avg number in array
// Write a function that recive an array of numbers and returns the average number.
// for example from [0, 1, 2, 3] it returns 1.5.
// (arr: number[]) => number
console.log("home puzzle 3 -------------------");
const avegnum = (yakov: number[]): number => {
  let summ = 0;
  for (let index = 0; index < yakov.length; index++) summ += yakov[index];
  let avgsum = summ / yakov.length;

  return avgsum;
};

let yakov = [0, 1, 2, 4];
let resolt = avegnum(yakov);
console.log(resolt);

// 4. check if array contains the item
// Write a function that recive an array and value, return true if the value exists in the array, and false if not.
// for example from ([1, 2, 3], 4) it returns false.
// (arr: number[], num: number) => boolean
console.log("home puzzle 4 -------------------");
const existsvalue = (arr: number[], num: number): any => {
  let value = num;
  for (let index = 0; index < arr.length; index++)
    if (arr[index] === value) return true;
    else arr[index] !== value;
  return false;
};
let arr = [1, 2, 3, 4];
let result = existsvalue(arr, 5);
console.log(result);

// 5. First Letter
// Write a funtion that gets array of names and return array with first letter of those names in upper case.
// for example from ["liad", "sarit"] it returns ["S", "L"]
console.log("home puzzle 5 -------------------");
const firstletter = (arrr: string[]) => {
  let newarr = arrr.map(function (name) {
    return name.charAt(0).toUpperCase() + name.slice(name.length);
  });
  return newarr;
};
let arrr = ["yakov", "shir", "yzchk"];
var firstlette = firstletter(arrr);
console.log(firstlette);

// 6. Capital Letters
// Write a funtion that gets array of names and return array with those names in capital letter.
// for example from ["liad", "sarit"] it returns ["Liad", "Sarit"]
// (I already showed)

console.log("home puzzle 6 -------------------");
const capitalname = (arrr: string[]) => {
  let newarr = arrr.map(function (name) {
    return name.charAt(0).toUpperCase() + name;
  });
  return newarr;
};
let arrr = ["yakov", "shir", "yzchk"];
var firstlette = capitalname(arrr);
console.log(firstlette);

// 7. Upside Down
// Write a funtion that gets array of names and return array with those names in upside order.
// for example from ["liad", "sarit"] it returns ["sarit", "liad"]
