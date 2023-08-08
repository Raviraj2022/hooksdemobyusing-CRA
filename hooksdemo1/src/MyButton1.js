import { useState } from "react";

export default function MyButton1() {
  let [text, setText] = useState("Click Me");

  return (
    <div>
      <button onClick={() => setText(new Date().toLocaleString())}>
        {text}
      </button>
    </div>
  );
}
