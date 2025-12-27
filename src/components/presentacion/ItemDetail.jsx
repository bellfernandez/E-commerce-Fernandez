import { useState } from "react";
import ItemCount from "./ItemCount";
import { useCart } from "../../context/CartContext";

const ItemDetail = ({ item }) => {
  const { addItem } = useCart();
  const [cantidad, setCantidad] = useState(1);

  if (!item) {
    return <p style={{ color: "white" }}>Cargando producto...</p>;
  }

  const handleAdd = () => {
    addItem(item, cantidad);
  };

  return (
    <div className="item-detail">
      <img src={item.img} alt={item.nombre} />

      <div className="item-detail-info">
        <h2>{item.nombre}</h2>
        <p>{item.descripcion}</p>
        <h3>${item.precio}</h3>

        <ItemCount
          stock={item.stock}
          initial={1}
          onChange={setCantidad}
        />

        <button onClick={handleAdd}>
          Agregar al carrito
        </button>
      </div>
    </div>
  );
};

export default ItemDetail;
