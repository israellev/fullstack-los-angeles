export const students = [
  {
    name: "Sapir Peretz",
    age: 31,
    occupation: "Youth Center Worker",
    degree: "Business Management and Digital Marketing",
    skills: ["HTML", "CSS"],
    motivation:
      "To learn both sides of web development and build websites from scratch",
    futurePlans: "Enter the job market",
    impactOnLife: 7,
    score: 85,
  },
  {
    name: "Aviad Kaduri",
    age: 23,
    occupation: "Former officer",
    motivation:
      "To start working, create own website, interested in programming, better salary",
    futurePlans: "Enter the job market",
    impactOnLife: 9,
    score: 78,
  },
  {
    name: "Avi Berehanu Bayna",
    age: 32,
    occupation: "Electrical Engineer",
    futurePlans: "Continue current job for another year",
    score: 110,
  },
  {
    name: "Sharit Tzvika",
    age: 31,
    occupation: "English teacher for at-risk girls",
    motivation: "Increase income, develop teaching, invent new things",
    futurePlans: "Enter the job market to gain experience",
    impactOnLife: 10,
    score: 68,
  },
  {
    name: "Yitzhak Zamats Sahlu",
    age: 31,
    occupation: "Security",
    motivation: "Need more money",
    impactOnLife: 12,
    score: 65,
  },
  {
    name: "Sahar Kalaifish",
    age: 31,
    occupation: "City Hall worker",
    degree: "Architecture",
    motivation:
      "Increase income (husband is a social worker), hopefully find it interesting",
    impactOnLife: 8,
    score: 85,
  },
  {
    name: "Yaakov Mengistu",
    age: 32,
    occupation: "Electrical Engineer",
    futurePlans:
      "Develop programming skills, not planning to work in this profession in the future, considering it an additional skill for the future",
    score: 52,
  },
  {
    name: "Shir Malka",
    age: 33,
    occupation: "Social Worker for At-risk Youth",
    futurePlans:
      "Very motivated to succeed in the course, get a job, will affect financially",
    impactOnLife: 8.5,
    score: 94,
  },
  {
    name: "Daniel Michael Peretz",
    age: 22,
    occupation: "Gardener",
    futurePlans: "Very interested in the field, wants to work in it",
    impactOnLife: 10,
    score: 89,
  },
  {
    name: "Yehonatan Mordechai",
    age: 40,
    occupation: "Software Tester at Indigo for 10 years",
    futurePlans: "Aspire to work from home in the field",
    impactOnLife: 9,
    score: 84,
  },
  {
    name: "Aharon Dwight",
    age: 30,
    occupation:
      "SMC - machine operation, some programming, network management and data security",
    futurePlans: "Willing to do anything with it",
    impactOnLife: 10,
    score: 86,
  },
  {
    name: "Liad Bag",
    age: 23,
    occupation: "Sales at KAL",
    futurePlans: "Will be a programmer in another year",
    impactOnLife: 9,
    score: 88,
  },
  {
    name: "Yehavit Vaknin",
    age: 36,
    occupation: "Bible and science teacher",
    futurePlans: "Don't know yet",
    impactOnLife: 9,
    score: 62,
  },
];

// home puzzle:

// Import "students.ts" file, and do the next exercies on it:

// 1. Got Job Interview
// Filter from students list those who will got a job interview - having score above 90.
console.log("home puzzle 1 ---------------");
const sstudentsjob = students.filter(function (studentscore) {
  if (studentscore.score > 90) return students;
});

console.log(sstudentsjob);

// 2. Get Class Score Average
// Make a list of the class scores and get it's average.
console.log("home puzzle 2 ---------------");
const SumgList = students.map(function (scoree): number {
  return scoree.score;
});
let sum = 0;
for (let i = 0; i < SumgList.length; i++) {
  sum = SumgList[i] + sum;
}
let averg = sum / SumgList.length;
console.log(SumgList);
console.log(averg);

// 3. Last names list
// Create a list of all fimaly names
// Tip - read in GPT about string split function "a b".split(" ").
console.log("home puzzle 3 ---------------");
const fimalynames = students.map(function (scoree): string {
  return scoree.name;
});
let Newresolt = fimalynames;
for (let i = 0; i < Newresolt.length; i++) {
  let NweName = Newresolt[i].split(" ");
  console.log(NweName[1]);
}

// 4. Need to wake-up list
// Create a list with the names of students that need to make up now - got score under 80.
// And for each print in the console "חאלאס {name} להימרח על החיים שלך, הקורס תכף מסתיים"
console.log("home puzzle 4 ---------------");

const student80 = students.forEach(function (studentscore) {
  if (studentscore.score < 80) {
    console.log(
      `${studentscore.name} חלאס להימרח על החיים שלך, הקורס תכף מסתיים`
    );
  }
});
console.log(student80);

//   return studentscore.score < 80 && studentscore.name;
// });
// console.log(student80);

// for (let i = 0; i < student80.length; i++) {
//   if (student80[i] !== "false") {
//     let element = student80[i];
//     console.log(element);
//   }

// 5. Impact vs Score
// Print for each student
// `Hey ${name}, the studies has impact on your life of '${impactOnLife}', and your score is ${score}.`
// and if the score is above 85 print `well done!` and if not print `WTF?!`.
console.log("home puzzle 5 ---------------");
let student = students.forEach(function (studentscore) {
  if (studentscore.score > 85) {
    console.log(
      `Hey ${studentscore.name}, the studies has impact on your life of '${studentscore.impactOnLife}', and your score is ${studentscore.score} well done!.`
    );
  } else console.log(`Hey ${studentscore.name} WTF`);
  console.log(student);
});
//   } else studentscore.score < 85;
//   console.log(`Hey ${studentscore.name} WTF`);
// });
// console.log(student);

// Bonus
// 6. Smart Search
// Create search function that take input and find it in all possible student values.
console.log("home puzzle Bonus 6 ---------------");
function searchStudents(input) {
  let searchResults = [];

  students.forEach(function (student) {
    Object.values(student).forEach(function (value) {
      if (typeof value === "string" && value.includes(input)) {
        searchResults.push(student);
      } else if (
        typeof value === "number" &&
        value.toString().includes(input)
      ) {
        searchResults.push(student);
      }
    });
  });

  return searchResults;
}
let searchTerm = "Electrical Engineer";
let searchResults = searchStudents(searchTerm);
console.log(searchResults);
