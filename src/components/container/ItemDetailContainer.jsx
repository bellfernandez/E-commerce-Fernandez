import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProductById } from "../../data/asyncMock";
import ItemCount from "../ItemCount";

<ItemCount stock={product.stock} onAdd={handleAdd} /> 

function ItemDetailContainer() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    getProductById(id).then((res) => setProduct(res));
  }, [id]);

  const handleAdd = (count) => {
    alert(`Agregaste ${count} unidades de ${product.nombre} al carrito`);
  };

  if (!product) return <h2>Cargando...</h2>;

  return (
    <div className="detail-container">
      <img src={product.img} alt={product.nombre} />
      <div>
        <h2>{product.nombre}</h2>
        <p>{product.descripcion}</p>
        <h3>${product.precio}</h3>
        <ItemCount stock={product.stock} onAdd={handleAdd} /> 
      </div>
    </div>
  );
}

export default ItemDetailContainer;