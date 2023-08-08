import { useReducer } from "react";
function doSomething(state, value) {
  switch (value) {
    case "increment":
      return state + 1;
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
    </div>
  );
}
