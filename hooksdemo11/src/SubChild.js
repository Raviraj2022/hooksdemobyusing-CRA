import React, { useContext } from "react";
import { EmpContext } from "./Parent";
export default function SubChild() {
  let context = useContext(EmpContext);
  function changeSal() {
    let x = context.data.sal;
    x = x + x * 0.1;
    context.updateEmp({ ...context.data, sal: x });
  }
  return (
    <>
      <h2>This is SubChild</h2>

      <p>
        Employee Id:<b>{context.data.id}</b>
      </p>
      <p>
        Employee Name:<b>{context.data.name}</b>
      </p>
      <p>
        Employee Salary:<b>{context.data.sal}</b>
      </p>
      <hr />
      <button onClick={changeSal}>Increment Salary</button>
    </>
  );
}
