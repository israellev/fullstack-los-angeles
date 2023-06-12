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
        name: "Brahanu Avraham Beyene",
        age: 32,
        occupation: "Electrical Engineer",
        futurePlans: "Continue current job for another year",
        score: 50
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
        score: 99
    },
    {
        name: "Sahar Kalaifish",
        age: 31,
        occupation: "City Hall worker",
        degree: "Architecture",
        motivation: "Increase income (husband is a social worker), hopefully find it interesting",
        impactOnLife: 8,
        score: 92
    },
    {
        name: "Yaakov Mengistu",
        age: 32,
        occupation: "Electrical Engineer",
        futurePlans: "Develop programming skills, not planning to work in this profession in the future, considering it an additional skill for the future",
        score: 100
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
        score: 98
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


// 1. Got Job Interview
// Filter from students list those who will got a job interview - having score above 90.

console.log("Home puzzle Avraham -1")

const gotJobInterview = students.filter(score => score.score > 90 )
const nameOfStudent = gotJobInterview.map(name=>name.name )
console.log("The students who accepted to jod is :",nameOfStudent)
console.log("------------------------------------------------------")
// 2. Get Class Score Average
// Make a list of the class scores and get it's average.
console.log("Home puzzle Avraham - 2")
let classScoreAverage = 0
for (let i in students){ 

    classScoreAverage = classScoreAverage +  students[i].score
}
const totalAverage = (classScoreAverage/students.length).toFixed(1)

console.log("The Class Score Average =:" , totalAverage)
console.log("------------------------------------------------------")
// 3. Last names list
// Create a list of all fimaly names
// Tip - read in GPT about string split function "a b".split(" ").

console.log("Home puzzle Avraham - 3")

const lastName = students.map(last => last.name.split(" ").pop());

console.log(lastName)
// 4. Need to wake-up list
// Create a list with the names of students that need to make up now - got score under 80.
// And for each print in the console "חאלאס {name} להימרח על החיים שלך, הקורס תכף מסתיים" 

console.log("Home puzzle Avraham - 4")
students.forEach(name => {
  if (name.score < 80)
   {
    console.log(name.name, ": Stop wasting your time , the course is about to end") 
    console.log(`----------------------------------------------------------------`)
  }
});
console.log("------------------------------------------------------")
// 5. Impact vs Score
// Print for each students 
// `Hey ${name}, the studies has impact on your life of '${impactOnLife}', and your score is ${score}.`
// and if the score is above 85 print `well done!` and if not print `WTF?!`.
console.log("Home puzzle Avraham - 5")
students.forEach((mamder) => {
      console.log(`Hey ${mamder.name}, the studies has impact on your life of ${mamder.impactOnLife}, and your score is ${mamder.score}.`) 
      if(mamder.score < 85){
        console.log(`WTF!!!!!!!!!!!!!!!`)
        console.log(`----------------------------------------------------------------------------------------------------------------------`)
      }
      else{
        console.log(`Wall Done :)`)
        console.log(`----------------------------------------------------------------------------------------------------------------------`)
      }
    
  });
  
// Bonus

// 6. Smart Search
// Create search function that take input and find it in all possible students values.
console.log("Home puzzle bonus Avraham - 6")
function smartSearch(students,input) {
   let searchResult = []}

smartSearch(students, "electrical");

// ----------------------------------------------------------------------------------//
// Sort by Age: Sort the students array in ascending order based on the students' ages.
console.log(`----------------------------------------------------------------------------------------------------------------------`)
const ageOfStudent = students.sort((a,b) => a.age-b.age)
console.log(ageOfStudent)

// Count Future Plans: Count the number of students who have specified their future plans in the futurePlans property.
console.log(`----------------------------------------------------------------------------------------------------------------------`)
let countMotivation = 0;

students.forEach((students)=>{
    if(students.motivation){
        countMotivation ++;
    }
});

console.log(countMotivation)

// Skills Concatenation: Create a string that concatenates all the skills of the students, separated by commas.

const skillOfStudent = Array.from(students.filter(s => s.skills))
console.log(skillOfStudent)

