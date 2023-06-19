export const students = [
    {
        name: "Sapir Peretz",
        age: 31,
        occupation: "Youth Center Worker",
        degree: "Business Management and Digital Marketing",
        skills: ["HTML", "CSS"],
        motivation: "To learn both sides of web development and build websites from scratch",
        futurePlans: "Enter the job market",
        impactOnLife: 7,
        score: 85
    },
    {
        name: "Aviad Kaduri",
        age: 23,
        occupation: "Former officer",
        motivation: "To start working, create own website, interested in programming, better salary",
        futurePlans: "Enter the job market",
        impactOnLife: 9,
        score: 78
    },
    {
        name: "Avi Berehanu Bayna",
        age: 32,
        occupation: "Electrical Engineer",
        futurePlans: "Continue current job for another year",
        score: 110
    },
    {
        name: "Sharit Tzvika",
        age: 31,
        occupation: "English teacher for at-risk girls",
        motivation: "Increase income, develop teaching, invent new things",
        futurePlans: "Enter the job market to gain experience",
        impactOnLife: 10,
        score: 68
    },
    {
        name: "Yitzhak Zamats Sahlu",
        age: 31,
        occupation: "Security",
        motivation: "Need more money",
        impactOnLife: 12,
        score: 65
    },
    {
        name: "Sahar Kalaifish",
        age: 31,
        occupation: "City Hall worker",
        degree: "Architecture",
        motivation: "Increase income (husband is a social worker), hopefully find it interesting",
        impactOnLife: 8,
        score: 85
    },
    {
        name: "Yaakov Mengistu",
        age: 32,
        occupation: "Electrical Engineer",
        futurePlans: "Develop programming skills, not planning to work in this profession in the future, considering it an additional skill for the future",
        score: 52
    },
    {
        name: "Shir Malka",
        age: 33,
        occupation: "Social Worker for At-risk Youth",
        futurePlans: "Very motivated to succeed in the course, get a job, will affect financially",
        impactOnLife: 8.5,
        score: 94
    },
    {
        name: "Daniel Michael Peretz",
        age: 22,
        occupation: "Gardener",
        futurePlans: "Very interested in the field, wants to work in it",
        impactOnLife: 10,
        score: 89
    },
    {
        name: "Yehonatan Mordechai",
        age: 40,
        occupation: "Software Tester at Indigo for 10 years",
        futurePlans: "Aspire to work from home in the field",
        impactOnLife: 9,
        score: 84
    },
    {
        name: "Aharon Dawit",
        age: 30,
        occupation: "SMC - machine operation, some programming, network management and data security",
        futurePlans: "Willing to do anything with it",
        impactOnLife: 10,
        score: 86
    },
    {
        name: "Liad Bag",
        age: 23,
        occupation: "Sales at KAL",
        futurePlans: "Will be a programmer in another year",
        impactOnLife: 9,
        score: 88
    },
    {
        name: "Yehavit Vaknin",
        age: 36,
        occupation: "Bible and science teacher",
        futurePlans: "Don't know yet",
        impactOnLife: 9,
        score: 62
    }
]



// // var arr = [2, 4, 6]
// var arr = ["I", "Love", "Ice", "Cream"]
// // arr.join(" ")

// var result = arr.reduce((state, item, index) => {
//     state += `${item} `
//     return state
// }, "")
// console.log(result);

// /* reduce is exactly like this: */
// var state = ""
// arr.forEach((item) => {
//     state += `${item} `
// })
// console.log(state)


// /*  solution for exercise number 2 */
// // const result = students.reduce((state, student) => {
// //     state += student.score
// //     return state
// // }, 0) / students.length


// /* convert array to string */
// var names = ["Sapir", "Yehonatan", "Avi"]
// console.log(names.join(", ")) // "Sapir, Yehonatan, Avi"

// /* convert string to array */
// var names2 = "Sapir, Yehonatan, Avi"
// names2.split(" ") // ["Sapir,", "Yehonatan,", "Avi"]
// names2.split(", ") // ["Sapir", "Yehonatan", "Avi"]

// console.log("------------------")


// /* Object.keys() method */
// var person = {
//     name: "Yehavit",
//     proffession: "Teacher",
//     score: 55,
// }

// person.name
// person["name"] // "Yehavit"
// person["Yehavit"] // undefined

// // Object.values(person) // ["Yehavit", "Teacher", 55]
// var keys = Object.keys(person)
// console.log(keys) // ["name", "proffession", "score"]

// // "name", "Yehavit"
// // "proffession", "Teacher"


// students.forEach(student => {

//     // student.name // Yehavit
//     // student["name"] //  Yehavit

//     const keys = Object.keys(student)
//     console.log(keys) // ["name", "proffession", "score"]

//     keys.forEach(key => {
//         const value = student[key]
//         console.log(key, value)
//     })


// })


// /*  Classes */


// var human = {
//     name: "Sarit",
//     age: 22,
//     celebrateBirthday: function () {
//         this.age++
//     },
// }

// var yakov = {
//     ...human,
//     name: "Yakov",
//     age: 25
// }

// console.log("--------------------")

// // class is abstract
// class Human {
//     private healthy = 10
//     protected name = ""
//     age = null
//     speed = 0


//     constructor(name, age) {
//         this.name = name
//         this.age = age
//     }

//     celebrateBirthday() {
//         this.age++
//     }

//     startWalking(speed: number) {
//         this.speed = speed
//     }
// }

// const Sarit = new Human("Sarit", 22) // instace 
// Sarit.startWalking(4) // use methods
// Sarit.celebrateBirthday()
// console.log(Sarit)

// const Ahron = new Human("Ahron", 18)
// console.log(Ahron)


// class Student extends Human {
//     collegeName = "";
//     score = 0;

//     constructor(name, age, collegeName) {
//         super(name, age)
//         this.collegeName = collegeName
//     }
// }

// const Avi = new Student("Avi", 23, "INT")
// Avi.score = 110
// Avi.startWalking(5)

// console.log(Avi)


function searchInStudents(students, textToSearch: string) {
    return students.filter(student => {
        const keys = Object.keys(student)  // ["name", "age", "occupation", "futurePlans", "impactOnLife", "score"]
        const result = keys.find(key => {
            const value = student[key].toString().toLowerCase()  // "Liad Bag"
            return value.includes(textToSearch.toLowerCase()) // 

        })
        return !!result
    })
}

console.log(searchInStudents(students, "3"))

// forEach - just a loop, don't return nothing

// map - return new array in the same lenght - we can replace each item
// ["a", "b"] => ["A", "B"]

// filter - return new array - we can decide what stay and what leave
// ["a", "b"] => ["a"]

// find - return one item - if we return true
// ["a", "b", "ab"] => "a" | undefined

