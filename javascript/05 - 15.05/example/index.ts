export {};
// /* 3 ways to loop: */

// /* OPTION 1 */
// for (let i = 0; i < 10; i++) {
//     console.log(i);
// }

// /*  OPTION 2 */
// let days = 1
// do {
//     console.log(days)
//     days ++
// } while (days <= 10)

// /* OPTION 3 */
// let index = 0
// while (index < 10) {
//     console.log(index)
//     index++
// }

/*  Functions */

function helloWorld() {
  console.log("Hello world");
}

// for (let i = 0; i < 10; i++) {
helloWorld();
// }

function counter(num: number): void {
  console.log(num);
}

// counter(1)
// counter(2)

// for (let i = 0; i < 10; i++) {
//     console.log(i)
//     counter(i)
// }

/*  why to use functions?
1. naming number of code rows
2. reusable of the same code
*/

function isEven(num: number): boolean {
  const oneOrZero = num % 2;
  const ifIsEven = oneOrZero === 0;
  return ifIsEven;
}

// const is1event = isEven(1)
// console.log(is1event)

const is2event = isEven(2);
console.log(is2event);
