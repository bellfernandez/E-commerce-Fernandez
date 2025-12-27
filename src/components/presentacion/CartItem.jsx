import { useCart } from "../../context/CartContext";

function CartItem({ id, nombre, precio, quantity }) {
  const { removeItem } = useCart();

  return (
    <div>
      <h4>{nombre}</h4>
      <p>Cantidad: {quantity}</p>
      <p>Subtotal: ${precio * quantity}</p>
      <button onClick={() => removeItem(id)}>Eliminar</button>
    </div>
  );
}

export default CartItem;
