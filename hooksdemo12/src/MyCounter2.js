import { useReducer } from "react";
function doSomething(state, value) {
  switch (value) {
    case "increment":
      return state + 1;
    case "decrement":
      return state - 1;
    case "reset":
      return 0;
  }
}
export default function MyCounter() {
  const [state, dispatch] = useReducer(doSomething, 0);
  const incrementCount = () => {
    dispatch("increment");
  };
  return (
    <div>
      <section>Count is :{state}</section>
      <button
        onClick={() => {
          dispatch("increment");
        }}
      >
        Increment Count
      </button>
      <button
        onClick={() => {
          dispatch("decrement");
        }}
      >
        Decrement Count
      </button>
      <button
        onClick={() => {
          dispatch("reset");
        }}
      >
        Reset Count
      </button>
    </div>
  );
}
