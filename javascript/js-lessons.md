01.  Git class - https://github.com/israellev/fullstack-los-angeles.git
    vscode pluggins
    js variables
    3 system api - alert, prompt, console.log
    8 data types - String, Boolean, Number, null, undefined, array, object, NaN

02.  4 ways to convert string "1" to number 1 - Number(), parseInt(), +"1", parseFloat()

03.  3 ways to create variables - var, let, const
    2 ways to connect variables with strings - +, `${}`
    debug in chrome
    working with typescript - hero pluggin
    numbers operators - + , - , \* , / , % , \*\*
    variables operators - ++, --, +=

04.  conditions operators (convert to boolean) - ===, !== , < , > , <=, >=
    conditions combine - &&, ||
    conditions - 'if() {} else {}' and 'switch() { case "": break; case "": break; }'
    numbers - int and float (integer - 1, float - 1.0)
    math library - abs, ceil, floor, max, min, round
    loops - welcome for:
    for (let i = 0; i < 10; i++) { console.log(i) }

05.  3 ways for loops - for, while(true) {}, do {} while (true)
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
    "ABC".toLowwerCase() // "abc"
    "abc".toUpperCase() // "ABC"
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
    arr.unshift("aa") // console.log(arr) = ["aa", "a", "b", "c"]//- להוסיף מהתחלה 
    arr.shift() // console.log(arr) = ["a", "b", "c"]//- למחוק מהתחלה 

08.  
    typeof "" // 'string'
    typeof 1 // 'number'
    typeof true // 'boolean'
    typeof (() => true) // 'function'
    Array.isArray([]) // true
    typeof [] // 'object'
    
    if operators:
    && - and
    || - or

    callback function,
    forEach((item): void => {}) just loop
    filter((item): boolean => {}) filter the items
    map((item): any => {}) return what you want instead each item

09. 
    get the index from build-it array functions (item, index)
    
    array extraction:
    let array = [1, 2, 3, 4, 5];
    let [a, b] = array; // a = 1, b = 2
    
    Arrays (and objects) - by referance, all others - by value:
    [...names, "Kobi"]

    (manual build - forEech, map, filter)

    ------- Objects
    syntax:
    let man = {
        name: "Aharon",
        age: 17,
        
        // methods:
        celebrateBirthday: () => {
            this.age ++
        }
    }
    
    // accessing:
    console.log(man.name) // "Aharon"
    
    // modifing: 
    man.name = "Yitzhak"
    console.log(man.name) // "Yitzhak"
    
    // methods:
    console.log(man.age) // 17
    man.celebrateBirthday()
    console.log(man.age) // 18

    // adding values
    man.city = "Kiryat Malachi"
    console.log(man.city) // "Kiryat Malachi"

10. 
    Obejcts (and arrasy) - by referance, all others - by value:
    {...obj, name: "Moshe"}

    Objects 
    Object.keys({a: "A"}).forEach(key => console.log(key))
    
    
    
    classes 
