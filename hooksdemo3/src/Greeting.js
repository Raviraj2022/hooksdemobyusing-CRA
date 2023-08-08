import { useState } from "react";

export default function Greeting() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const handleFirstName = (event) => {
    setFirstName(event.target.value);
  };
  const handleLastName = (event) => {
    setLastName(event.target.value);
  };
  return (
    <div>
      FirstName:
      <br />
      <input type="text" value={firstName} onChange={handleFirstName} />
      <br />
      LastName:
      <br />
      <input type="text" value={lastName} onChange={handleLastName} />
      <br />
      {(firstName.length > 0 || lastName.length > 0) && (
        <span>
          Hello {firstName} {lastName}
        </span>
      )}
    </div>
  );
}
