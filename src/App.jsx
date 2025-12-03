import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/layout/nav";
import ItemListContainer from "./components/container/ItemListContainer";
import ItemDetailContainer from "./components/container/ItemDetailContainer";
import "./App.css";

function App() {
  return (
    <HashRouter basename="/E-commerce-Fernandez">
      <NavBar />

      <Routes>
        <Route 
          path="/" 
          element={<ItemListContainer greeting="¡Bienvenida a tu tienda online, Belén!" />} 
        />

        <Route 
          path="/category/:categoryId" 
          element={<ItemListContainer />} 
        />

        <Route 
          path="/item/:id" 
          element={<ItemDetailContainer />} 
        />

        <Route 
          path="*" 
          element={<h2 style={{ textAlign: "center", marginTop: "3rem" }}>404 - Página no encontrada</h2>} 
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;