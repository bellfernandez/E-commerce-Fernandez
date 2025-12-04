import React, { useState } from "react";

const ItemCount = ({ stock, onAdd }) => {
  const [count, setCount] = useState(1);

  const increment = () => {
    if (count < stock) setCount(count + 1);
  };

  const decrement = () => {
    if (count > 1) setCount(count - 1);
  };

  return (
    <div style={{ marginTop: "1rem" }}>
      <button onClick={decrement}>-</button>
      <span style={{ margin: "0 1rem" }}>{count}</span>
      <button onClick={increment}>+</button>
      <div>
        <button
          style={{ marginTop: "0.5rem" }}
          onClick={() => onAdd(count)}
        >
          Agregar al carrito
        </button>
      </div>
    </div>
  );
};

export default ItemCount;