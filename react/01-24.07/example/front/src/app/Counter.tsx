import { useState } from "react";
import styles from './style.module.css';


export function Counter(props: { start: number }) {
  const {start} = props;
  const [number, setNumber] = useState(start);

  return (
    <div className={styles.Counter}>
      <h1>{number}</h1>
      <button onClick={() => setNumber(number + 1)}>counter</button>
    </div>
  );
}
