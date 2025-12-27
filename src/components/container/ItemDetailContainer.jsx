import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProductById } from "../../data/asyncMock";
import ItemDetail from "../presentacion/ItemDetail";

const ItemDetailContainer = () => {
  const { itemId } = useParams(); // 🔴 TIENE QUE LLAMARSE IGUAL QUE EN LA RUTA
  const [item, setItem] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);

    getProductById(itemId).then((resp) => {
      setItem(resp);
      setLoading(false);
    });
  }, [itemId]);

  if (loading) return <h2>Cargando producto...</h2>;
  if (!item) return <h2>Producto no encontrado</h2>;

  return <ItemDetail item={item} />;
};

export default ItemDetailContainer;
