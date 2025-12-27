import { Link } from "react-router-dom";
import { useCart } from "../../context/CartContext";


function Cart() {
  const { cart, removeItem, clearCart, totalPrice } = useCart();

  if (cart.length === 0) {
    return (
      <h2 style={{ textAlign: "center", marginTop: "3rem" }}>
        Carrito vacío
      </h2>
    );
  }

  return (
    <div style={{ padding: "2rem" }}>
      <h2>Tu carrito</h2>

      {cart.map((prod) => (
        <div key={prod.id}>
          <p>{prod.nombre}</p>
          <p>Cantidad: {prod.quantity}</p>
          <p>Subtotal: ${prod.precio * prod.quantity}</p>
          <button onClick={() => removeItem(prod.id)}>Eliminar</button>
        </div>
      ))}

      <h3>Total: ${totalPrice}</h3>

      <button onClick={clearCart}>Vaciar carrito</button>
      <br />
      <Link to="/checkout" className="btn">
        Finalizar compra
      </Link>
    </div>
  );
}

export default Cart;
