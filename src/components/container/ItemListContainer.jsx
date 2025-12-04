import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProducts, getProductsByCategory } from "../../data/asyncMock";
import ItemCard from "./ItemCard";

const ItemListContainer = ({ greeting }) => {
  const [products, setProducts] = useState([]);
  const { categoryId } = useParams();

  useEffect(() => {
    const fetch = categoryId ? getProductsByCategory(categoryId) : getProducts();
    fetch.then((res) => setProducts(res));
  }, [categoryId]);

  return (
    <section style={{ textAlign: "center", marginTop: "3rem" }}>
      <h2>
        {greeting ||
          (categoryId ? `Categoría: ${categoryId}` : "Todos los productos")}
      </h2>

      <div className="cards-container">
        {products.map((prod) => (
          <ItemCard key={prod.id} {...prod} />
        ))}
      </div>
    </section>
  );
};

export default ItemListContainer;