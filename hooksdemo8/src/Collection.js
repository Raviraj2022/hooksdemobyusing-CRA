import { useState, useEffect } from "react";

export default function Collection() {
  const [data, setData] = useState({ name: "", price: 0 });
  const handleNameChange = (event) => {
    setData({ ...data, name: event.target.value });
  };
  const handlePriceChange = (event) => {
    setData({ ...data, price: event.target.value });
  };
  const [items, setItems] = useState([]);
  const addItem = (event) => {
    event.preventDefault();
    setItems([...items, data]);
    setData({ name: "", price: 0 });
  };
  useEffect(() => {
    let total = 0;
    for (let item of items) {
      total = total + Number(item.price);
    }
    document.querySelectorAll("b")[1].innerHTML = `${total}`;
  });
  return (
    <div>
      <form onSubmit={addItem}>
        Type Item Name :<br />
        <input type="text" value={data.name} onChange={handleNameChange} />
        <br />
        Type Item Price :<br />
        <input type="number" value={data.price} onChange={handlePriceChange} />
        <br />
        <button type="submit">addItem</button>
      </form>
      <table border="2">
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
          </tr>
          <tbody>
            {items.map((item) => (
              <tr>
                <td>{item.name}</td>
                <td>{item.price}</td>
              </tr>
            ))}
          </tbody>
        </thead>
      </table>
      <span>
        Total Items :<b>{items.length}</b>
      </span>
      &nbsp; &nbsp; &nbsp;
      <span>
        Cart total :<b>0</b>
      </span>
    </div>
  );
}
