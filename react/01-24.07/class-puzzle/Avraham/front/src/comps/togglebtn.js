// 2. Toggle
// Create a button that toggles a piece of text between 'On' and 'Off' each time it is clicked.
// 1.בניית שלד של הדף 
// 2. בתגית שמכילה את התוכן נכניס את הערך הסטטי 
// 3. לערך הסטטי הגדרנו מצב פעיל בהוק , ובתגית הכנסנו תנאי
// 4. לאחר מכאן יצרנו כפתור שמשנה את הערך בהתאם ללחיצה אם הוא נמצא במצב פעיל הוא ישנה זאת בהתאם ללחיצה 
import { useState } from "react";

function Isactivs (){
    const [isActive, setIsActive] = useState(true);

    const btnIsActive = () => {
      setIsActive((prevIsActive) => !prevIsActive);
    };

    return (
        <div className=" m-4 d-flex flex-column align-items-center border p-5 shadow ">
           <h2>targil:2</h2>
        <h2>Check: {isActive ? 'Active' : 'Not Active'}</h2>
        <button className="btn btn-warning" onClick={btnIsActive}>
          Toggle
        </button>
      </div>
      );
}

export default Isactivs