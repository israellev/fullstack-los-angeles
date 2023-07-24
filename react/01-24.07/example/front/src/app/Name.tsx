import { useState } from "react";

export function Name() {
  const [name, setName] = useState("sarit");

  return (
    <div style={{ textAlign: "center" }}>
      <div>{name}</div>
      <input value={name} onChange={(e: any) => setName(e.target.value)} />
    </div>
  );
}
