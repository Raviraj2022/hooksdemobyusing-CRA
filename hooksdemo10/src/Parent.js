import React, { useState } from "react";
import Child from "./Child";
export let EmpContext = React.createContext();
export default function Parent() {
  const [emp, setEmp] = useState({ id: 101, name: "Ravi", sal: 2000 });
  return (
    <div>
      <h2>This is Parent Component</h2>
      <hr />
      <EmpContext.Provider value={emp}>
        <Child />
      </EmpContext.Provider>
    </div>
  );
}
