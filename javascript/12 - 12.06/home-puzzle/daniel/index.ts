export {}

// 6. Smart Search
// Create search function that take input and find it in all possible student values.



// מערך של סטודנטים עם שמות, השפעה על חייהם וציונים
const students = [
    { name: "דוד", impactOnLife: "שיפור התרגול", score: 92 },
    { name: "שרה", impactOnLife: "התמודדות עם לחץ", score: 78 },
    { name: "אבי", impactOnLife: "רפורמת הלימודים", score: 88 }
  ];
  
  // פונקציה שמבצעת חיפוש חכם
  function smartSearch(input) {
    // מערך לאיחוד כל הערכים האפשריים לחיפוש
    const allValues = [];
  
    // עבור כל סטודנט במערך
    students.forEach((student) => {
      // עבור כל מאפיין בסטודנט (שם, השפעה על חיים וציון)
      Object.values(student).forEach((value) => {
        // הוסף את הערך למערך הערכים
        allValues.push(value);
      });
    });
  
    // בדיקה אם הקלט נמצא במערך הערכים
    if (allValues.includes(input)) {
      console.log(`נמצא: ${input}`);
    } else {
      console.log(`לא נמצא: ${input}`);
    }
  }
  
  // קריאה לפונקציה עם הקלט של "שיפור התרגול"
  smartSearch("שיפור התרגול");

