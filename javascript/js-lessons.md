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
    conditions combine - && (and), || (or)
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
    "avi avi".replace(/avi/g,"yakov") // "yakov yakov" 
    "avi avi".includes("yakov") // false 

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
    
    Array functions:
    includes(item) // true if item exits in the array
    forEach((item): void => {}) just loop
    filter((item): boolean => {}) filter the items
    map((item): any => {}) return what you want instead each item

09. 

    (manual build - forEech, map, filter)

    /* Just to know - These are the Fathers objects of those types  */
    Number()
    String()
    Array()
    Object()
    Boolean()

    const set = new Set([1, 2, 3, 3]) // {1, 2, 3}
    set.has(5) // false
    set.has(2) // true
    set.add(4) // {1, 2, 3, 4}
    /* convert set back to array */
    Array.from(new Set([1, 2, 3, 3]))

    array functions (forEach, map, filter) give the parameters - (item, index, arr)
    
    array destructuring:
    let array = [1, 2, 3, 4, 5];
    let [a, b] = array; // a = 1, b = 2

    Arrays (and objects) - by referance, all others - by value:
    by referance - JS is save the actual arr in the memory, and same the address in the variable.
    by value - JS save the actual value in the variable.

    How to copy array by value?
    var newNames = [...names, "Kobi"]

10. 
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
    console.log(man["name"]) // "Aharon"
    
    // modifing: 
    man.name = "Yitzhak"
    console.log(man.name, man["name"]) // "Yitzhak", "Yitzhak"

    // methods:
    console.log(man.age) // 17
    man.celebrateBirthday()
    console.log(man.age) // 18

    // adding values
    man.city = "Kiryat Malachi"
    console.log(man.city) // "Kiryat Malachi"

    Obejcts (and arrasy) - by referance, all others - by value:
    {...obj, name: "Moshe"}

    Objects destructuring:
    let obj = {a: 1, b: 2, c: 3};
    let {a, b} = obj;
    console.log(a, b);  // prints: 1, 2
    // with name updates:
    let obj = {a: 1, b: 2, c: 3};
    let {a: first, b: second} = obj;
    console.log(first, second);  // 1, 2

    Objects usefull function: 
    const man = {name: "Avi"}

11. 
    // new names
    let {a: first, b: second} = obj;
    // get object keys
    Object.keys(man).forEach(key => console.log(key, man[key])) // "name", "Avi"
    

    --------- Classes
    class Car {
        
        // constructor
        constructor(company: string) {
            this.company = company
        }

        // method
        getCarCompany(): string {
            return this.company
        }
    }

    // instance
    const tesla = new Car("Tesla")
    const mercedes = new Car("Mercedes")
    
    // use
    console.log(tesla.getCarDetails())
    console.log(mercedes.getCarDetails())

    1. 'public', 'private' (isEngineOn, startEngine)
    2. inherit (Tesla)
    3. 'protected', get and set methods (speed).
