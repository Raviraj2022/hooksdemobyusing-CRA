import { useState } from "react";

export default function MyCounter() {
  const [counter, setCounter] = useState(0);
  const incrementCont = () => {
    setCounter(counter + 1);
  };
  return (
    <div>
      <section>Count is:{counter}</section>
      <button onClick={incrementCont}>Increment</button>
    </div>
  );
}
