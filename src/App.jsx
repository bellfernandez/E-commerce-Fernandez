import { Routes, Route } from "react-router-dom";
import NavBar from "./components/layout/nav/NavBar";
import ItemListContainer from "./components/container/ItemListContainer";
import ItemDetailContainer from "./components/container/ItemDetailContainer";
import Cart from "./components/container/Cart";
import Checkout from "./components/container/Checkout";
import "./App.css";

function App() {
  return (
    <>
      <NavBar />

      <Routes>
        <Route
          path="/"
          element={<ItemListContainer greeting="Bienvenida" />}
        />

        <Route
          path="/category/:categoryId"
          element={<ItemListContainer />}
        />

        
        <Route
          path="/item/:itemId"
          element={<ItemDetailContainer />}
        />

        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
      </Routes>
    </>
  );
}

export default App;
