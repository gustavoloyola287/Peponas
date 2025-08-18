
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="fixed top-0 left-0 right-0 bg-white shadow-md z-50">
      <nav className="container mx-auto px-4 py-3 flex justify-between items-center">
        <Link to="/" className="text-xl font-bold text-pink-600">Peponas Cakes</Link>
        <ul className="hidden md:flex gap-6 font-semibold">
          <li><Link to="/">Inicio</Link></li>
          <li><Link to="/products">Productos</Link></li>
          <li><Link to="/about">Quiénes Somos</Link></li>
          <li><Link to="/contact">Contacto</Link></li>
          <li><Link to="/login">Iniciar Sesión</Link></li>
          <li><Link to="/register">Registrarse</Link></li>
        </ul>
        
      </nav>
    </header>
  );
};

export default Navbar;

