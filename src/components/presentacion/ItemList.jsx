import ItemCard from "./ItemCard";

const ItemList = ({ products }) => {
  return (
    <div className="cards-container">
      {products.map(prod => (
        <ItemCard key={prod.id} {...prod} />
      ))}
    </div>
  );
};

export default ItemList;
