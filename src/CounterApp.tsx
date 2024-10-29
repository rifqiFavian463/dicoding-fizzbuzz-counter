import { useState } from "react";
import "./App.css";
import { CounterScreen } from "./CounterScreen";
import IncrementCounter from "./IncrementCounter";
import { ResetCounter } from "./ResetCounter";

function CounterApp() {
  const [count, setCount] = useState<number>(0);

  function increment() {
    setCount(count + 1);
  }

  function reset() {
    setCount(0);
  }
  return (
    <>
      <CounterScreen count={count} />
      <IncrementCounter onIncrement={increment} />
      <ResetCounter onReset={reset} />
    </>
  );
}

export default CounterApp;
