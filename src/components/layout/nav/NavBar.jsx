import { Link } from "react-router-dom";
import CartWidget from "./CartWidget";

const NavBar = () => {
  return (
    <nav className="navbar">
      <Link to="/" className="logo">
        Hop Store
      </Link>

      <ul className="nav-links">
        <li><Link to="/">Inicio</Link></li>
        <li><Link to="/category/cervezas">Cervezas</Link></li>
        <li><Link to="/category/cursos">Cursos</Link></li>
        <li><Link to="/category/packs">Packs</Link></li>
      </ul>

      <CartWidget />
    </nav>
  );
};

export default NavBar;
