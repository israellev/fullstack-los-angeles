export {}
let firstName = prompt("please enter first name :");
let lastName = prompt("please enter last name name :");

const GetfullName =(firstName:string, lastName:string):string => {
    return `${firstName} ${lastName}`
}


const fullName = GetfullName(firstName, lastName);//מבצעת משתנה קבוע נוסף בשם "שם מלא" שמפעיל את הפונקציה "קבל שם מלא" שמקבל את המשתנים שם פרטי ושם משפחה ומדפיס אותו 
console.log(fullName);