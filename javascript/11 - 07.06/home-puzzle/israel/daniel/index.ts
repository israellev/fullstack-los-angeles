export { }
// 1. Got Job Interview
// Filter from students list those who will got a job interview - having score1 above 90.

// const students = [
//     {
//         name: "Sapir Peretz",
//         age: 31,
//         occupation: "Youth Center Worker",
//         degree: "Business Management and Digital Marketing",
//         skills: ["HTML", "CSS"],
//         motivation: "To learn both sides of web development and build websites from scratch",
//         futurePlans: "Enter the job market",
//         impactOnLife: 7,
//         score1: 85
//     },
//     {
//         name: "Aviad Kaduri",
//         age: 23,
//         occupation: "Former officer",
//         motivation: "To start working, create own website, interested in programming, better salary",
//         futurePlans: "Enter the job market",
//         impactOnLife: 9,
//         score1: 78
//     },
//     {
//         name: "Avi Berehanu Bayna",
//         age: 32,
//         occupation: "Electrical Engineer",
//         futurePlans: "Continue current job for another year",
//         score1: 110
//     },
//     {
//         name: "Sharit Tzvika",
//         age: 31,
//         occupation: "English teacher for at-risk girls",
//         motivation: "Increase income, develop teaching, invent new things",
//         futurePlans: "Enter the job market to gain experience",
//         impactOnLife: 10,
//         score1: 68
//     },
//     {
//         name: "Yitzhak Zamats Sahlu",
//         age: 31,
//         occupation: "Security",
//         motivation: "Need more money",
//         impactOnLife: 12,
//         score1: 65
//     },
//     {
//         name: "Sahar Kalaifish",
//         age: 31,
//         occupation: "City Hall worker",
//         degree: "Architecture",
//         motivation: "Increase income (husband is a social worker), hopefully find it interesting",
//         impactOnLife: 8,
//         score1: 85
//     },
//     {
//         name: "Yaakov Mengistu",
//         age: 32,
//         occupation: "Electrical Engineer",
//         futurePlans: "Develop programming skills, not planning to work in this profession in the future, considering it an additional skill for the future",
//         score1: 52
//     },
//     {
//         name: "Shir Malka",
//         age: 33,
//         occupation: "Social Worker for At-risk Youth",
//         futurePlans: "Very motivated to succeed in the course, get a job, will affect financially",
//         impactOnLife: 8.5,
//         score1: 94
//     },
//     {
//         name: "Daniel Michael Peretz",
//         age: 22,
//         occupation: "Gardener",
//         futurePlans: "Very interested in the field, wants to work in it",
//         impactOnLife: 10,
//         score1: 89
//     },
//     {
//         name: "Yehonatan Mordechai",
//         age: 40,
//         occupation: "Software Tester at Indigo for 10 years",
//         futurePlans: "Aspire to work from home in the field",
//         impactOnLife: 9,
//         score1: 84
//     },
//     {
//         name: "Aharon Dwight",
//         age: 30,
//         occupation: "SMC - machine operation, some programming, network management and data security",
//         futurePlans: "Willing to do anything with it",
//         impactOnLife: 10,
//         score1: 86
//     },
//     {
//         name: "Liad Bag",
//         age: 23,
//         occupation: "Sales at KAL",
//         futurePlans: "Will be a programmer in another year",
//         impactOnLife: 9,
//         score1: 88
//     },
//     {
//         name: "Yehavit Vaknin",
//         age: 36,
//         occupation: "Bible and science teacher",
//         futurePlans: "Don't know yet",
//         impactOnLife: 9,
//         score1: 62
//     }
// ];
// // // מסנן את רשימת הסטודנטים לפי הציון
// const FilterStudents = students.filter(function (student) {
//     return student.score1 > 90;
// });
// // מציג את רשימת הסטודנטים שקיבלו ציון מעל 90 בראיון
// FilterStudents.forEach(function (student) {
//     console.log(student.name + " ציון - :", student.score1)
// });


// function listscore1(students) {
//   return students.filter(function(student) {
//    return student.score1 > 90; 
// });

// }

// const newListscore1 = listscore1(students);
// console.log(newListscore1);

//----------------------------------------------------------------------------------------------------------

// 2. Get Class score1 Average
// Make a list of the class score1s and get it's average.


// //  רשימת ציוני הכיתה
// const classscore1s = []

// const sum = 0;
// // מחשב את סך הציונים בכיתה
// classscore1s.forEach(function (score1) {
//     sum += score1;
// });

// //  מחשב את ממוצע הציונים של הכיתה 
// var average = sum / classscore1s.length;

// // מציג את ממוצע הציונים של הכיתה 
// console.log("הממוצע של הכיתה הוא: " + average);

//----------------------------------------------------------------------------------------------------------

// 3. Last names list
// Create a list of all fimaly names
// Tip - read in GPT about string split function "a b".split(" ").

// const names = [// רשימת שמות 
//     "Daniel peretz",
//     "Liad beg",
//     "Aharon Dawit",
//     "Yeonatan mordechi",
// ];

// const lastNames = names.map(function (name) { // משתנה בשם ופוקציית מאפ למערך של השמות
//     const splitName = name.split(" "); // פעולת ספליט מבצעת פיצול של מחרוזת למערך של מחרוזות
//     return splitName[1]; // המחרוזת השנייה במערך המפוצל היא שם המשפחה
// });
// console.log(lastNames);

//-------------------------------------------------------------------------------------------------------
// 4. Need to wake-up list
// Create a list with the names of students that need to make up now - got score1 under 80.
// And for each print in the console "חאלאס {name} להימרח על החיים שלך, הקורס תכף מסתיים" 

// const NamesToWakeUp = [
//     {
//         name: "liad",
//         score1: 92
//     },

//     {
//         name: "yoni",
//         score1: 92
//     },

//     {
//         name: "ahron",
//         score1: 92
//     },

//     {
//         name: "avi",
//         score1: 92
//     },

//     {
//         name: "itzhak",
//         score1: 92

//     },
//     {
//         name: "daniel",
//         score1: 55

//     },
// ];
// const FilterStudents1 = NamesToWakeUp.filter(function (rezult) {
//     return rezult.score1 < 80;
// });
// FilterStudents1.forEach(function (rezult) {
//     console.log("חאלס", { name: rezult.name }, "הקורס תכף מסתיים תתעורר על החיים שלך!", rezult.score1);
// });

//-------------------------------------------------------------------------------------------------------

const pepole = [
    {
        nameOf: "dotan",
        impactOnLife: "שיפור הרתגול",
        score: 92

    },
    {
        nameOf: "shalev",
        impactOnLife: "רפורמת הלימודים",
        score: 86
    },
    {
        nameOf: "sahar",
        impactOnLife: "התמודוות אם לחץ",
        score: 68
    },
    {
        nameOf: "sagi",
        impactOnLife: "עמידה בקצב הכיתתי ",
        score: 11
    },

];
    // עבור כל סטודנט במערך
pepole.forEach((pepole) => {
    // הדפס את הודעת הסטודנט
    console.log(`Hey ${pepole.nameOf}, הלימודים משפיעים על חייך ב-${pepole.impactOnLife}, והציון שלך הוא ${pepole.score}.`);
      // בדוק את הציון והדפס הודעה נוספת
  if (pepole.score >= 85) {
    console.log("תותח!");
} else {
    console.log("מה קרה לך??");
  }
});