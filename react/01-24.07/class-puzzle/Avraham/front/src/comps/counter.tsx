// 1.Counter
// create simple counter that received a props of 'start' seconds, and increase the number each a second. 
// 1. ראשית נבנה את הדף עם המונה והלחצן לאיפוס 
// 2. כעת נגדיר את הערך הסטטי שלנו ואת הערך המשתמנה עם מה שלמדנו 
// 3. נשתמש בהוק חדש בגלל בעיה שנוצרה לי באיפוס 
// 4. ההוק החדש הסבר : אנו רוצים להפעיל את האפקט כאן על הטיימר שלנו והוא יפעיל כל הזמן את ההוק מחדש כל עוד יש שינוי והשינויי הוא דינאמי לכן הוא יפעל כל הזמן כי הוא תלוי בערך הסטטי רק כאשר נעשה רסטר הוא יפסיק לפעול לרגע ואז יתחיל מחדש 
// 5. באמצעות ההוק החדש נפעיל את הטיימר בכל פעם שהערך הנוכחי משתנה 
// 6. בפעולה שאני מבצע בטיימר אנו מגדירים את הערך הנוכחי שלו להיות הערך הנוכחי + 1 והוא מתעדכן 
// 7. יש פונקציה נוספת של פונקציית ניקיון שמנקה את הערך של הטיימר 
import React, { useState, useEffect } from 'react';

function Counter({start} : { start: number }) {
  const [counter, setCounter] = useState(start);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setCounter((prevCounter) => prevCounter + 1);
    }, 1000);

    return () => clearTimeout(timeout);
  }, [counter]);

  const resetCounter = () => {
    setCounter(start);
  };

  return (
    <div className="m-4 d-flex flex-column align-items-center border p-5 shadow ">
      <h2>targil:1</h2>
      <h2 className="">Counter: {counter}</h2>
      <button className="btn btn-primary" onClick={resetCounter}>
        Reset
      </button>
    </div>
  );
}

export default Counter;


 