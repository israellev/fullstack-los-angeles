import {useState} from 'react';

export function Counter() {
  const [number, setNumber] = useState(0)

  return (
    <div style={{ textAlign: "center" }}>
      <h1>{number}</h1>
      <button onClick={() => setNumber(number + 1)}>counter</button>
    </div>
  );
}
