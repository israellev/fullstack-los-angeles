export {};

// home puzzle:
console.log("home puzzle 1 -------------------");
// 1. Sum the array
// Write a function that receive array of numbers (only) as a parameter,
// and return the result of all numbers together.
// for example from [1, 2, 3] it returns 6
function multiplay(arr: number[]): number {
  let sum = 0;
  for (let index = 0; index <= arr.length - 1; index++) sum += arr[index];
  return sum;
}
let arr: number[] = [10, 20, 30];
let resolt: Number = multiplay(arr);
console.log(`the sum of the array numbers are: ${resolt}`);

// 2. max number in Array
// Write a function that recive an array of numbers and returns the bigget number index.
// for example from [1, 2, 3] it returns 2 (the index of 3).
// (arr: number[]) => number
console.log("home puzzle 2 -------------------");
const maxNumberr = (arr: number[]): number => {
  let inputarr = arr[0];
  let maxindex = 0;
  for (let i = 0; i < arr.length; i++)
    if (arr[i] > inputarr) {
      inputarr = arr[i];
      maxindex = i;
    }
  return maxindex;
};
console.log(maxNumberr([20, 50, 40]));

// 3. avg number in array
// Write a function that recive an array of numbers and returns the average number.
// for example from [0, 1, 2, 3] it returns 1.5.
// (arr: number[]) => number
console.log("home puzzle 3 -------------------");
const avgNum = (are: number[]): number => {
  let sum = 0;
  for (let i = 0; i < arr.length - 1; i++) sum += arr[i];
  sum = 0;
  let calc = sum / arr.length;

  return calc;
};
console.log(avgNum([0, 1, 2, 3]));

// 4. check if array contains the item
// Write a function that recive an array and value, return true if the value exists in the array, and false if not.
// for example from ([1, 2, 3], 4) it returns false.
// (arr: number[], num: number) => boolean

// 5. First Letter
// Write a funtion that gets array of names and return array with first letter of those names in upper case.
// for example from ["liad", "sarit"] it returns ["S", "L"]

// 6. Capital Letters
// Write a funtion that gets array of names and return array with those names in capital letter.
// for example from ["liad", "sarit"] it returns ["Liad", "Sarit"]
// (I already showed)

// 7. Upside Down
// Write a funtion that gets array of names and return array with those names in upside order.
// for example from ["liad", "sarit"] it returns ["sarit", "liad"]
