export {}

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

// 1. Smart Search
// Create search function that take input and find it in all possible student values.
function smartSearch (){//פונקציה חיפוש 
    const searchInput = prompt ("Enter your search query:") //מקבלת ערך מהמשתמש 
    const searchResult=  students.filter((student) => {//שימוש בפונקצית פילטר אשר תחזיר מערך מסונן 
     Object.values(student) //מקבלת מערך מסונן עם כל הערכים של הסטודנטים
     .some((value)=> value && value.toString().toLowerCase().includes(searchInput.toLowerCase()));
    // בדיקה האם לפחות ערך אחד מהתכונות של אובייקט תלמיד מתאים לקלט החיפוש וזה ע"י שימוש בשיטת סאם
     //הערך צריך להיות קיים ולהיות מומר למחזרוזת לצורך השוואה
    });
    return searchResult;
 };  

 const result = smartSearch();
 console.log(result);
 console.log(`-----------------------------------------`)


//  Exercise 2: Calculate the average score of students who have a motivation

const studentWithMotivation = students.filter(student => Object.keys(student).includes("motivation"));

let sum = 0;
studentWithMotivation.forEach(student => {
    sum += student.score;
});

const averageScore = sum / studentWithMotivation.length;

studentWithMotivation.forEach(student => {
    console.log(`Name: ${student.name}, score: ${student.score}`);
});

console.log(`Avarage score: ${averageScore}`);
console.log(`-----------------------------------------`)




//Exercise 3: Filter students by occupation and map their names and ages.

const studentOccupation = students.filter(student => Object.keys(student).includes("occupation"));

const studentAgeAndName= students.map(student => ({
    name : student.name , 
    age : student.age
}));

studentAgeAndName.forEach(student => {
    console.log(`Name: ${student.name}, Age: ${student.age}`);
});


