export const sendOrderToFirebase = (orden) => {
  return new Promise((resolve) => {
    console.log("🔥 Enviando orden a Firebase...");
    setTimeout(() => {
      console.log("✅ Orden guardada:", orden);
      resolve({ success: true, id: orden.factura });
    }, 1500);
  });
};
