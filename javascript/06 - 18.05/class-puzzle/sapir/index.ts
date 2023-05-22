export {}
let firstName = prompt("please enter first name :");
let lastName = prompt("please enter last name name :");

const GetfullName =(firstName:string, lastName:string):string => {
    return `${firstName} ${lastName}`
}


const fullName = GetfullName(firstName, lastName);//מבצעת משתנה קבוע נוסף בשם "שם מלא" שמפעיל את הפונקציה "קבל שם מלא" שמקבל את המשתנים שם פרטי ושם משפחה ומדפיס אותו 
console.log(fullName);

//-------------------------------------------------------------------------------------------

function getAge(){
    const age = Number(prompt("please enter your age(in numbers only):"));//משנה קבוע בשם גיל אשר יבקש מהמשתמש ךהכניס מידע על גיל מסוג מספר בלבד 
    if (isNaN(age)){//משתמשים בפונציה איזנאן כדי לבדוק  האם המשתמש הכניס משהו שאינו מספר , במידה וזה אמת הפןנקציה תכנס לשורה הבאה ותדפיס הודעת שגיאה ובמידה וזה שקר הפונקציה תדלג ותחזיר את המשתנה גיל               
        throw ("invalid: seems like you entered an argument which is not of type Number");
    }
    return age;  
}

try{
    const theUserAge = getAge();
    console.log("the user's age is:" + theUserAge);
}catch(error){
    alert("error has occured:" + error);
}

//-------------------------------------------------------------------------------------------

