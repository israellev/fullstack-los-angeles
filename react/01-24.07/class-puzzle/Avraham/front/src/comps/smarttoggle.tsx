// 3. Smart Toggle
// Create a button that toggles the button text itself 'On' and 'Off' each time it is clicked, when it's On it'll be green color, Off will be grey.
// אותו רעיון כמו תרגיל 2 רק שפה אנו משפעים על הלחצן 

import { useState } from "react";

function Smartbtn (){
let [bg,setBg]=useState(false)


const changeColor = () => {
    setBg((prevIsOn) => !prevIsOn);
  };
    return (
        <div className=" m-4 d-flex flex-column align-items-center border p-5 shadow ">
                  <h2 className={`${bg ? 'text-success' : 'text-danger'}`} onClick={changeColor}>
        targil: {bg ? '3' : 'tree'}
      </h2>
        <button
      className={`btn ${bg ? 'btn-success' : 'btn-danger'}`}
      onClick={changeColor}
    >
      {bg ? 'On' : 'Off'}
    </button>
      </div>
      );
}

export default Smartbtn