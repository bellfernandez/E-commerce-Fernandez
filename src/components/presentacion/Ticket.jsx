function Ticket({ orden }) {
  return (
    <div className="ticket">
      <h2>🧾 Ticket de compra</h2>

      <p><strong>Factura Nº:</strong> {orden.factura}</p>
      <p><strong>Fecha:</strong> {orden.fecha}</p>

      <h3>Cliente</h3>
      <p>{orden.cliente.nombre} {orden.cliente.apellido}</p>
      <p>Tel: {orden.cliente.telefono}</p>

      <h3>Productos</h3>
      {orden.productos.map((prod) => (
        <p key={prod.id}>
          {prod.nombre} x {prod.quantity} → ${prod.precio * prod.quantity}
        </p>
      ))}

      <h3>Total: ${orden.total}</h3>
    </div>
  );
}

export default Ticket;
