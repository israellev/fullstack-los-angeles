import { useState } from "react"


export function Clock() {
    const [time, setTime] = useState(0)
    



    setTimeout(() => {
        setTime(time + 1)  
    }, 1000);


    return <div style={{textAlign: 'center', fontSize: 22}}>
        {time}
    </div>
}