class puzzle:
1. 'printState', fisrt and last of string
Write a function that calls 'printState' that get 'str' parameter and print the fisrt and last string.
(str: string) => string

2. stringValidation
Create a function that takes in a string, removes whitespace from both ends, converts it to lower case and then replaces all occurrences of the letter 'a' with 'b'. Make sure the function throws an error if something other than a string is input. 
for example from " aaa " it will returs "bbb".
hint: 'const isString = isNaN(Number(str))'
(str: string) => string

3. create dynamicArray 
Creat a function that received a 'num' and return array of numbers 
that start from 0 to the number of the 'num'. 
for example user enter 3, the function return [0, 1, 2, 3], etc. 
(num: number) => number[]


home puzzle:

1. Sum the array
Write a function that receive array of numbers (only) as a parameter, 
and return the result of all numbers together.
for example from [1, 2, 3] it returns 6

2. max number in Array 
Write a function that recive an array of numbers and returns the bigget number index.
for example from [1, 2, 3] it returns 2 (the index of 3).
(arr: number[]) => number

3. avg number in array
Write a function that recive an array of numbers and returns the average number.
for example from [0, 1, 2, 3] it returns 1.5.
(arr: number[]) => number

4. check if array contains the item
Write a function that recive an array and value, return true if the value exists in the array, and false if not.
for example from ([1, 2, 3], 4) it returns false.
(arr: number[], num: number) => boolean

5. Capital Letters
Write a funtion that gets array of names and return array with those names in capital letter.
for example from ["liad", "sarit"] it returns ["Liad", "Sarit"]

6. Upside Down
Write a funtion that gets array of names and return array with those names in upside order.
for example from ["liad", "sarit"] it returns ["sarit", "liad"]
