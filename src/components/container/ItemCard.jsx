import { Link } from "react-router-dom";

function ItemCard({ id, nombre, precio, img }) {
  return (
    <div className="card">
      <img src={img} alt={nombre} />
      <h3>{nombre}</h3>
      <p>${precio}</p>

      <Link to={`/item/${id}`} className="btn">
        Ver detalle
      </Link>
    </div>
  );
}

export default ItemCard;