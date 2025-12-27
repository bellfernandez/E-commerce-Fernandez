export const exportOrderToJSON = (orden) => {
  const dataStr = JSON.stringify(orden, null, 2);
  const blob = new Blob([dataStr], { type: "application/json" });

  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = `orden_${orden.factura}.json`;

  link.click();
  URL.revokeObjectURL(url);
};
