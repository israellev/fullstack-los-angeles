export {}
//import {students} from ../../full/11 - 07.06/students

const students = [
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
        name: "Aharon Dwight",
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


// home puzzle:

// Import "students.ts" file, and do the next exercies on it:

// 1. Got Job Interview
// Filter from students list those who will got a job interview - 
// having score above 90.
// array.filter()

// const gotCalled = students.filter((student)=> student.score > 90);
// console.log(gotCalled);

// // 2. Get Class Score Average
// // Make a list of the class scores and get it's average.


// const score = students.map ((students)=>students.score) ;
// const sum = score.reduce((accumulator,score)=>accumulator + score, 0);
// const Avarage = sum / score.length ;

// 3. Last names list
// Create a list of all fimaly names
// Tip - read in GPT about string split function "a b".split(" ").

// 4. Need to wake-up list
// Create a list with the names of students that need to make up 
// now - got score under 80.
// And for each print in the console "חאלאס {name} 
// להימרח על החיים שלך,
//  הקורס תכף מסתיים" 

// 5. Impact vs Score
// Print for each student 
// `Hey ${name}, the studies has impact on your life of 
// '${impactOnLife}', and your score is ${score}.`
// and if the score is above 85 print `well done!` and if not print 
// `WTF?!`.

// Bonus

// 6. Smart Search
// Create search function that take input and find it in all 
// possible student values.

// Print in the console for each student in the list key and values separately,
// using object.keys,

// const = unoStudent.forEach()

// Object.keys(students) // ["Yehavit", "Teacher", 55]
var keys = Object.keys(students)

keys.forEach(key => {
    console.log(`${key}: `, students[key])
})