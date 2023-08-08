import React, { useState } from "react";
import Child from "./Child";
export let EmpContext = React.createContext();
export default function Parent() {
  const [emp, setEmp] = useState({ id: 101, name: "Ravi", sal: 2000 });
  return (
    <div>
      <h2>This is Parent Component</h2>
      <p>Emp Salary:{emp.sal}</p>
      <hr />
      <EmpContext.Provider value={{ data: emp, updateEmp: setEmp }}>
        <Child />
      </EmpContext.Provider>
    </div>
  );
}
