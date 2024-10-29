import React from "react";

function CounterScreen({ count }: { count: number }) {
  let message;
  if (count === 0) {
    message = "Start";
  } else if (count % 5 === 0 && count % 7 === 0) {
    message = "FizzBuzz";
  } else if (count % 5 === 0) {
    message = "Fizz";
  } else if (count % 7 === 0) {
    message = "Buzz";
  } else {
    message = count;
  }
  return <>{message}</>;
}

export { CounterScreen };
