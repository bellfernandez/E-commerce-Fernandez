import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProducts, getProductsByCategory } from "../../data/asyncMock";
import ItemCard from "../presentacion/ItemCard";

const ItemListContainer = ({ greeting }) => {
  const [products, setProducts] = useState([]);
  const { categoryId } = useParams();

  useEffect(() => {
    const fetchData = categoryId
      ? getProductsByCategory(categoryId)
      : getProducts();

    fetchData.then((res) => setProducts(res));
  }, [categoryId]);

  return (
    <div style={{ paddingTop: "2rem" }}>
      <h2 style={{ textAlign: "center" }}>
        {greeting ||
          (categoryId ? `Categoría: ${categoryId}` : "Todos los productos")}
      </h2>

      <div className="cards-container">
        {products.map((prod) => (
          <ItemCard key={prod.id} {...prod} />
        ))}
      </div>
    </div>
  );
};

export default ItemListContainer;
