import { useState, useEffect } from "react";

export default function MyCounter() {
  const [counter, setCounter] = useState(0);
  const incrementCount = (event) => {
    setCounter((prevCount) => prevCount + 1);
  };
  useEffect(() => {
    document.title = counter;
    return function cleanUp() {
      console.log("Counter is" + counter);
    };
  });
  return (
    <div>
      <section>Counter is :{counter}</section>
      <button onClick={incrementCount}>increment Count</button>
    </div>
  );
}
