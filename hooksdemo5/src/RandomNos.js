import { useState } from "react";

export default function RandomNos() {
  const [arr, setArr] = useState([]);
  const addNumber = (event) => {
    let n = Math.floor(Math.random() * 10) + 1;
    setArr([...arr, n]);
  };
  return (
    <div>
      <button onClick={addNumber}>Gen Number</button>
      <ul>
        {arr.map((x, index) => {
          return <li key={index}>{x}</li>;
        })}
      </ul>
    </div>
  );
}
