import React, { useContext } from "react";
import { EmpContext } from "./Parent";
import SubChild from "./SubChild";

export default function Child() {
  let context = useContext(EmpContext);
  return (
    <>
      <h2>This is Child</h2>

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
      <SubChild />
    </>
  );
}
