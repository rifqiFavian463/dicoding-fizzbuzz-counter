import React from "react";

function IncrementCounter({ onIncrement }: { onIncrement: () => void }) {
  return <button onClick={onIncrement}>Click for Increment</button>;
}

export default IncrementCounter;
