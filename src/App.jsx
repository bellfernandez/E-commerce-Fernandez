import './App.css'
import NavBar from './components/layout/nav'
import ItemListContainer from './components/container/ItemListContainer'


function App() {
  return (
    <>
      <NavBar />
      <main className="main-container">
        <h1>E-Commerce Belén</h1>
        <h2>Próximamente Tienda Virtual... Hop 🍺</h2>
        <ItemListContainer greeting="¡Bienvenida a tu tienda online, Belén!" />
      </main>
    </>
  );
}

export default App;