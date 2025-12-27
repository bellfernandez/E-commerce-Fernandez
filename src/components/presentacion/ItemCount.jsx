import { useState } from "react";

const ItemCount = ({ stock, initial = 1, onChange }) => {
  const [count, setCount] = useState(initial);

  const incrementar = () => {
    if (count < stock) {
      const nuevo = count + 1;
      setCount(nuevo);

      if (onChange) {
        onChange(nuevo);
      }
    }
  };

  const decrementar = () => {
    if (count > 1) {
      const nuevo = count - 1;
      setCount(nuevo);

      if (onChange) {
        onChange(nuevo);
      }
    }
  };

  return (
    <div style={{ margin: "1rem 0" }}>
      <button onClick={decrementar}>-</button>
      <span style={{ margin: "0 1rem" }}>{count}</span>
      <button onClick={incrementar}>+</button>
    </div>
  );
};

export default ItemCount;
