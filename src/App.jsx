import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/layout/nav";
import ItemListContainer from "./components/container/ItemListContainer";
import ItemDetailContainer from "./components/container/ItemDetailContainer";

function App() {
  return (
    <BrowserRouter>
      <NavBar />

      <Routes>
        {/* HOME */}
        <Route 
          path="/" 
          element={<ItemListContainer greeting="¡Bienvenida a tu tienda online, Belén!" />} 
        />

        {/* CATEGORÍAS */}
        <Route 
          path="/category/:categoryId" 
          element={<ItemListContainer />} 
        />

        {/* DETALLE PRODUCTO */}
        <Route 
          path="/item/:id" 
          element={<ItemDetailContainer />} 
        />

        {/* 404 */}
        <Route 
          path="*" 
          element={<h2 style={{ textAlign: "center", marginTop: "3rem" }}>404 - Página no encontrada</h2>} 
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
