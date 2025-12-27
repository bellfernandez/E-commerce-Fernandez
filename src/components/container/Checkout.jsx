import { useState, useEffect } from "react";
import { useCart } from "../../context/CartContext";

function Checkout() {
  const { cart, totalPrice, clearCart } = useCart();
  const [factura, setFactura] = useState(0);
  const [ordenFinal, setOrdenFinal] = useState(null);

  const [form, setForm] = useState({
    nombre: "",
    apellido: "",
    telefono: ""
  });

  useEffect(() => {
    const ultimaFactura = localStorage.getItem("ultimaFactura");
    if (ultimaFactura) {
      setFactura(Number(ultimaFactura) + 1);
    } else {
      setFactura(1000);
    }
  }, []);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const exportarJSON = (orden) => {
    const dataStr = JSON.stringify(orden, null, 2);
    const blob = new Blob([dataStr], { type: "application/json" });
    const url = URL.createObjectURL(blob);

    const link = document.createElement("a");
    link.href = url;
    link.download = `orden_factura_${orden.factura}.json`;
    link.click();
  };

  const handleFinish = (e) => {
    e.preventDefault();

    if (!form.nombre || !form.apellido || !form.telefono) {
      alert("Completá todos los datos");
      return;
    }

    const orden = {
      factura,
      cliente: form,
      productos: cart,
      total: totalPrice,
      fecha: new Date().toLocaleString()
    };

    // 🔥 Simulación Firebase
    console.log("ENVIANDO ORDEN A FIREBASE:", orden);

    localStorage.setItem("ultimaFactura", factura);

    setOrdenFinal(orden);
    exportarJSON(orden);
    clearCart();
  };

  if (ordenFinal) {
    return (
      <div className="ticket">
        <h2>Compra realizada con éxito ✅</h2>
        <p><strong>Factura Nº:</strong> {ordenFinal.factura}</p>
        <p><strong>Cliente:</strong> {ordenFinal.cliente.nombre} {ordenFinal.cliente.apellido}</p>
        <p><strong>Teléfono:</strong> {ordenFinal.cliente.telefono}</p>
        <p><strong>Fecha:</strong> {ordenFinal.fecha}</p>

        <h3>Productos:</h3>
        {ordenFinal.productos.map((prod) => (
          <p key={prod.id}>
            {prod.nombre} x {prod.quantity}
          </p>
        ))}

        <h3>Total: ${ordenFinal.total}</h3>
      </div>
    );
  }

  return (
    <div className="checkout">
      <h2>Checkout</h2>

      <p><strong>Factura Nº:</strong> {factura}</p>

      {cart.map((prod) => (
        <p key={prod.id}>
          {prod.nombre} x {prod.quantity}
        </p>
      ))}

      <h3>Total: ${totalPrice}</h3>

      <form className="checkout-form" onSubmit={handleFinish}>
        <input
          type="text"
          name="nombre"
          placeholder="Nombre"
          value={form.nombre}
          onChange={handleChange}
        />

        <input
          type="text"
          name="apellido"
          placeholder="Apellido"
          value={form.apellido}
          onChange={handleChange}
        />

        <input
          type="tel"
          name="telefono"
          placeholder="Teléfono"
          value={form.telefono}
          onChange={handleChange}
        />

        <button type="submit">Confirmar compra</button>
      </form>
    </div>
  );
}

export default Checkout;
