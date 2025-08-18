import { Routes, Route } from "react-router-dom";
import Navbar from "./components/layout/navbar";
import Home from "./pages/Home/Home";
import Products from "./pages/Products/Products";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import Login from "./pages/Login/Login"
import Register from "./pages/Register/Register";

function App() {
  return (
    <>
      <Navbar />
      <main className="pt-20">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/dashboard"element={<h1>Bienvenido al panel</h1>  } />
        </Routes>
        
      </main>
    </>
  );
}

export default App;

