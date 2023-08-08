import React from "react";
import { EmpContext } from "./Parent";
export default function SubChild() {
  return (
    <>
      <h2>This is SubChild 1</h2>
      <EmpContext.Consumer>
        {function show(emp) {
          return (
            <>
              Employee Id:<b>{emp.id}</b>
              <br />
              Employee Name:<b>{emp.name}</b>
              <br />
              Employee Sal:<b>{emp.sal}</b>
              <br />
            </>
          );
        }}
      </EmpContext.Consumer>
    </>
  );
}
