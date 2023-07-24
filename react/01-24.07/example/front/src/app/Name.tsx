import { useState } from "react";

export function Name(props: { initName: string }) {
  const { initName } = props;
  const [name, setName] = useState(initName);

  return (
    <div>
      <div>{name}</div>
      <input value={name} onChange={(e: any) => setName(e.target.value)} />
    </div>
  );
}
