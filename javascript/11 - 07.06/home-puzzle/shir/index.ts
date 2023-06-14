export { }

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
// 1:
const interview = students.filter(student => student.score > 90).map(student => student.name);
console.log(interview);

//2: להסביר איך עושים ממוצע
// const listcores = students.map(names1 => names1.score);
// console.log(listcores);
// const sumAverage = students.reduce((name2, student) => name2 + student.score, 0);
// const average = sumAverage / students.length;
// console.log(average);

//תשובה של ישראל:
const result= students.reduce((state, student) => {

    state+= student.score
    return state
}, 0 )   / students.length



//3: האם אפשר לעשות יותר מרווח אחד? במקרה שיש רשימה ארוכה יותר
const fimalynames = students.map(student => student.name.split(" ")[1]);
console.log(fimalynames);

//4:
const wakeupnow = students.filter(student => student.score < 80).map(student => student.name);
console.log(`${wakeupnow} תתעורר על החיים שלך, חלאס להמרח`);

//5:

students.forEach(student => {
    const { name, impactOnLife, score } = student

       console.log( `Hey ${name}, the studies has impact on your life of '${impactOnLife}', and your score is ${score}.`)

        if (student.score > 85)
        console.log("well done!")
    else console.log("WTF?!");
})