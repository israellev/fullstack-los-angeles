01.  Git class - https://github.com/israellev/fullstack-los-angeles.git
    vscode pluggins
    js variables
    3 system api - alert, prompt, console.log
    8 data types - String, Boolean, Number, null, undefined, array, object, NaN

02.  4 ways to convert string "1" to number 1 - 
Number(), 
parseInt(), 
+"1", 
parseFloat()

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

05.  3 ways for loops - 
    for, 
    while(true) {}, 
    do {} while (true)
    functions - function hello() {console.log("hello")}
    functions parameters // function hello(name: string): void {}
    functions return values // function hello(name: string): string { return name }

06. 
variable scopes - each code block or scope {} is a layer when you declare variables it's not available outside 
2 ways for functions - regular 'function greet() {}', anonymous function '() => {}'
error handling - throw 'error', try {} catch(e) {}
isNaN(1) // false. isNaN("1") // false. isNaN("aa") // true

07.  String functions:
    "abca".length // 4
    "abca"[0] // "a"
    "abca".indexOf("a") // 0
    "abca".lastIndexOf("a") // 3
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

    (manual build - forEach, map, filter)

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

10. 
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
    Repetition of a previous lesson

12. 
    /* convert array to string */
    var names = ["Sapir", "Yehonatan", "Avi"]
    console.log(names.join(", ")) // "Sapir, Yehonatan, Avi"

    /* convert string to array - cut the string where you tell him to */
    var names2 = "Sapir, Yehonatan, Avi"
    names2.split(" ") // ["Sapir,", "Yehonatan,", "Avi"]
    names2.split(", ") // ["Sapir", "Yehonatan", "Avi"]

    // get object keys
    Object.keys(man).forEach(key => console.log(key, man[key])) // "name", "Avi"

    // new names
    let {a: first, b: second} = obj;

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

13. 
    // json is string that use in all internet and laguages 
    JSON.stringify({a: 1}) // '{"a": 1}' - object to json
    JSON.parse('{"a": 1}') // {a: 1} - json to object
    
    JSON.stringify([{a: 1}]) // '[{"a": 1}]' - array to json
    JSON.parse('[{"a": 1}]') // [{a: 1}] - json to array
    
    // https://jsonplaceholder.typicode.com/guide/
    fetch(url: string, RequestParams) // async function for connect with API 
    .then(res => res.json()) // when promise return with data 
    .then(data => {}) // what return from previous then is comming here
    .catch(err => {}) //  when promise failed
    
    Dom events:
    document.querySelector("#searchInput").addEventListener('keyup', () => {})
    events:  (list here - https://developer.mozilla.org/en-US/docs/Web/Events)
    keyup, click, mouseenter, mouseleave...

    Dynamic Elements:
    const newDiv = document.createElement("div") // element in the code
    newDiv.innerHTML = `<div></div>`
    document.getElementById("postContainer").appendChild(newDiv) // add new div inside
    document.getElementById("postContainer").innerHTML = ''  // delete all

14. 
    CRUD (create, read, update, delete)
    
    LocalStorage
    localStorage.setItem('name', 'John Doe'); // create/update
    const name = localStorage.getItem('name'); // read
    localStorage.removeItem('name'); // remove
    
    regex:
    /i - case-insensitive
    console.log(/shir/.test('Shir')) // false 
    console.log(/shir/i.test('Shir')) // true
    
    /g - global
    console.log('shir shir'.replace(/shir/, '')) // ' shir'  
    console.log('shir shir'.replace(/shir/g, '')) // ' '

    /\d/ - number
    /\D/ - not number
    console.log('abc123xyz456'.replace(/\d/g, '')) // abcxyz
    console.log('abc123xyz456'.replace(/\D/g, '')) // 123456
    
    /[a-z]/ - english lowercase
    /[A-Z]/ - english upercase
    /[a-zA-Z]/ - all english letter
    console.log('abc123xyz456'.replace(/\d/g, '')) // abcxyz
    console.log('abc123xyz456'.replace(/\D/g, '')) // 123456

15. Install nvm (node version manager) and node:
    install nvm - https://github.com/coreybutler/nvm-windows/releases/download/1.1.11/nvm-setup.exe
    install node version - nvm install 18.16.1
    use node version - nvm use 18.16.1

    Firebas Hosting:
    go to your project folder
    npm install -g firebase-tools
    firebase login
    firebase init -> hosting: Configure files -> main dir to '.' in firebase.json
    firebase deploy
    
    
backlog:
    
    UrlParams
    example url - https://example.com/?name=John
    const urlParams = new URLSearchParams(window.location.search);
    console.log(urlParams.get('name')); // 'John'

    Cookies - (server access)
    // <script src="https://cdn.jsdelivr.net/npm/js-cookie@3.0.1/src/js.cookie.min.js"></script>
    Cookies.set('name', 'John Doe'); // create/update
    const name = Cookies.get('name'); // read
    Cookies.remove('name'); // remove

    regular function vs async 
    (new Promise() // async function) 
    'async' 'await' // modern replace 'then()', for debug line by line
