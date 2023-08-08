import { useState } from "react";

export default function Collection() {
  const [data, setData] = useState("");
  const handleChange = (event) => {
    setData(event.target.value);
  };
  const [items, setItems] = useState([]);
  const handleItem = (event) => {
    event.preventDefault();
    setItems([...items, data]);
    setData("");
  };
  return (
    <div>
      <h2>Shopping App</h2>
      <form onSubmit={handleItem}>
        Type Item Name:
        <br />
        <input type="text" value={data} onChange={handleChange} />
        <br />
        <button type="submit">Add Item</button>
      </form>
      <h3>Your Shopping Cart :{items.length === 0 ? "Empty" : ""}</h3>
      <ul>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}
