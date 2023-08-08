import React, { useContext } from "react";
import { EmpContext } from "./Parent";
export default function SubChild() {
  let emp = useContext(EmpContext);
  return (
    <>
      <h2>This is SubChild</h2>
      Employee Id:<b>{emp.id}</b>
      <br />
      Employee Name:<b>{emp.name}</b>
      <br />
      Employee Sal:<b>{emp.sal}</b>
      <br />
    </>
  );
}
