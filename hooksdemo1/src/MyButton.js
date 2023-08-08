import { useState } from "react";

export default function MyButton() {
  let [text, setText] = useState("Click Me");
  function changeText() {
    setText(new Date().toLocaleString());
  }
  return (
    <div>
      <button onClick={changeText}>{text}</button>
    </div>
  );
}
