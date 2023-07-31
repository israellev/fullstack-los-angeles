// 3. Smart Toggle
// Create a button that toggles the button text itself 'On' and 'Off' 
// each time it is clicked, when it's On it'll be green color, Off will be grey.
import { useState } from "react";
import styles from './style.module.css';
export function Toggle (props: { onOff: string }) {
    const {onOff} = props
    let [buttontext, setButtonText] = useState(onOff)
    let [buttonStyle, setButtonStyle] = useState({background: "green"})
    const toggle = () => {
        if (buttontext === "On") {
            setButtonText("Off")
            setButtonStyle({background: "grey"})
        }
        else if (buttontext === "Off"){
            setButtonText("On")
            setButtonStyle({background: "green"})
        }
    };
    
    return (
        <div className= {styles.Toggle}>
            <button className= {styles.Toggle} onClick = {toggle} style={buttonStyle}>{buttontext}</button>
        </div>
    );
}