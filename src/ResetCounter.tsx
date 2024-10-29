import React from "react";

function ResetCounter({ onReset }: { onReset: () => void }) {
  return <button onClick={onReset}>ResetCounter</button>;
}

export { ResetCounter };
