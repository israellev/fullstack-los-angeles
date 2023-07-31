// 1. Counter
// create simple counter that received a props of 'start' seconds, and increase the number each a second. 

import { useState } from "react";
import styles from './style.module.css';
export function Counter () {
    const [time, setTime] = useState(0)
    setTimeout(() => {
        setTime(time+1)
    }, 1000);

    return (
        <div className={styles.Counter}>
            <h1>{time}</h1>
        </div>
    )
}
