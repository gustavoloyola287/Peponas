import { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:3000/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      if (!response.ok) throw new Error("❌ Correo o contraseña incorrectos");

      const data = await response.json();

      // Guardar el token en localStorage
      localStorage.setItem("token", data.access_token);

      alert("✅ Bienvenido!");
      window.location.href = "/dashboard"; // Redirige al panel o inicio
    } catch (err: any) {
      setError(err.message);
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded-2xl shadow-lg w-80"
      >
        <h2 className="text-2xl font-bold text-center mb-4">Iniciar Sesión</h2>

        {error && <p className="text-red-500 text-sm mb-2">{error}</p>}

        <input
          type="email"
          placeholder="Correo electrónico"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full p-2 mb-3 border rounded-xl"
          required
        />

        <input
          type="password"
          placeholder="Contraseña"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full p-2 mb-3 border rounded-xl"
          required
        />

        <button
          type="submit"
          className="w-full bg-violet-600 text-white py-2 rounded-xl hover:bg-violet-700 transition"
        >
          Entrar
        </button>
      </form>
    </div>
  );
};

export default Login;
