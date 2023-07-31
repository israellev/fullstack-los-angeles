import { useState } from "react";
import styles from './style.module.css';
export function Counter(props: { start: number }) {
//   const start = props.start;
  const {start} = props;
  const [number, setNumber] = useState(start);

//   setTimeout(() => setNumber(number + number), 1000)

  return (
    // <div style={{ textAlign: "center" }}>
    <div className={styles.Counter}>
      <h1>{number}</h1>
      <button onClick={() => setNumber(number + start)}>counter</button>
    </div>
  );
}
