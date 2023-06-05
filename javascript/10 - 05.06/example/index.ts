    export {}

/*  short way to aggin variable by if else */
const index = 0
/*  long way */
let name;
if (index === 0) {
    name = "shir"
} else {
    name = "sapir"
}
/* short way */
const name2 = index === 0 ? "shir" : "sapir"



/*  Object  */
const arr = [1,2,"" ,]

const person: any = {
    name: "sapir",
    age: 30,
    address: null,
    hobbies: ["fishing", "diving"],
    studies: {
        schoolName: "tichon"
    },
    isMarried: false,
    celebrateBirthday: function() {
        this.age ++
    }
}

/* get values */
console.log(person.name) // "sapir"
console.log(person.age) // 30
console.log(person["name"]) // "sapir"
console.log(person["age"]) // 30
console.log(person.studies["schoolName"]) // "tichon"

/* add new values */
person.address = "Kiryat Malachi"
console.log(person.address) // "Kiryat Malachi"

/* edit exising value */
person.name = "daniel"
console.log(person.name) // "daniel"

console.log(person.age) // 30
person.celebrateBirthday()
console.log(person.age) // 31



