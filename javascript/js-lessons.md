1.  Git class - https://github.com/israellev/fullstack-los-angeles.git
    vscode pluggins
    js variables
    3 system api - alert, prompt, console.log
    8 data types - String, Boolean, Number, null, undefined, array, object, NaN

2.  4 ways to convert string "1" to number 1 - Number(), parseInt(), +"1", parseFloat()

3.  3 ways to create variables - var, let, const
    2 ways to connect variables with strings - +, `${}`
    debug in chrome
    working with typescript - hero pluggin
    numbers operators - + , - , \* , / , % , \*\*
    variables operators - ++, --, +=

4.  conditions operators (convert to boolean) - ===, !== , < , > , <=, >=
    conditions combine - &&, ||
    conditions - 'if() {} else {}' and 'switch() { case "": break; case "": break; }'
    numbers - int and float (integer - 1, float - 1.0)
    math library - abs, ceil, floor, max, min, round
    loops - welcome for:
    for (let i = 0; i < 10; i++) { console.log(i) }

5.  3 ways for loops - for, while(true) {}, do {} while (true)
    functions - function hello() {console.log("hello")}
    functions parameters // function hello(name: string): void {}
    functions return values // function hello(name: string): string { return name }

06. 
variable scopes - each code bock or scope {} is a layer when you declare variables it's not available outside 
2 ways for functions - regular 'function greet() {}', anonymous function '() => {}'
error handling - throw 'error', try {} catch(e) {}
isNaN(1) // false. isNaN("1") // false. isNaN("aa") // true

07.  String functions:
    "abca".length // 4
    "abca"[0] // "a"
    "abca".indexOf("a") // 0
    "abca".lastIndexOf("a") // 4
    "abc".slice(0, 2) // "ab"
    " abc ".trim() // "abc"
    "ABC".toLowwercase() // "abc"
    "abc".toUppercase() // "ABC"
    "abca".replace("a", "AAA") // "AAAbca"
    "avi avi".replace(/avi/g,"yakov") מחליף את כל האבי ביעקב 

    Array + array functions:
    const arr = ["a", "b", "c"]
    arr[0] // "a"
    arr.indexOf("a") // 0
    ["a", "b", "c"].includes("a") // true

    Functions that change the array it self:
    arr.push("cc") // console.log(arr) = ["a", "b", "c", "cc"] //- להוסיף מהסוף
    arr.pop() // console.log(arr) = ["a", "b", "c"]//-למחוק מהסוף
    arr.shift("aa") // console.log(arr) = ["aa", "a", "b", "c"]//- להוסיף מהתחלה 
    arr.unshift() // console.log(arr) = ["a", "b", "c"]//- למחוק מהתחלה 

8.  
    typeof "" // 'string'
    typeof 1 // 'number'
    typeof true // 'boolean'
    typeof typeof (() => true) // 'function'
    Array.isArray([]) // true
    (typeof [] // 'object')
    
    callback function
    forEach((item): void => {}) just loop
    filter((item): boolean => {}) filter the items
    map((item): any => {}) return what you want instead each item
