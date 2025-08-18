import { useState } from "react";

const Register = () => {
  const [form, setForm] = useState({
    nombre: "",
    apellido: "",
    dni: "",
    email: "",
    direccion: "",
    telefono: "",
    password: "",
    confirmPassword: "",
    rol: "usuario"  // valor por defecto
  });

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (form.password !== form.confirmPassword) {
      setError("❌ Las contraseñas no coinciden");
      return;
    }

    try {
      const response = await fetch("http://localhost:3000/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (!response.ok) throw new Error("Error al registrar usuario");

      setSuccess("✅ Usuario registrado con éxito");
      setError("");
      setForm({
        nombre: "",
        apellido: "",
        dni: "",
        email: "",
        direccion: "",
        telefono: "",
        password: "",
        confirmPassword: "",
        rol: "usuario"
      });

    } catch (err: any) {
      setError(err.message);
      setSuccess("");
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded-2xl shadow-lg w-96">
        <h2 className="text-2xl font-bold text-center mb-4">Crear Cuenta</h2>

        {error && <p className="text-red-500 text-sm mb-2">{error}</p>}
        {success && <p className="text-green-500 text-sm mb-2">{success}</p>}

        {/* Nombre y Apellido */}
        <div className="flex gap-2">
          <input
            type="text"
            name="nombre"
            placeholder="Nombre"
            value={form.nombre}
            onChange={handleChange}
            className="w-1/2 p-2 mb-3 border rounded-xl"
            required
          />
          <input
            type="text"
            name="apellido"
            placeholder="Apellido"
            value={form.apellido}
            onChange={handleChange}
            className="w-1/2 p-2 mb-3 border rounded-xl"
            required
          />
        </div>

        {/* DNI */}
        <input
          type="text"
          name="dni"
          placeholder="DNI"
          value={form.dni}
          onChange={handleChange}
          className="w-full p-2 mb-3 border rounded-xl"
          required
        />

        {/* Correo */}
        <input
          type="email"
          name="email"
          placeholder="Correo electrónico"
          value={form.email}
          onChange={handleChange}
          className="w-full p-2 mb-3 border rounded-xl"
          required
        />

        {/* Dirección */}
        <input
          type="text"
          name="direccion"
          placeholder="Dirección"
          value={form.direccion}
          onChange={handleChange}
          className="w-full p-2 mb-3 border rounded-xl"
          required
        />

        {/* Teléfono */}
        <input
          type="tel"
          name="telefono"
          placeholder="Teléfono"
          value={form.telefono}
          onChange={handleChange}
          className="w-full p-2 mb-3 border rounded-xl"
          required
        />

        {/* Contraseña */}
        <input
          type="password"
          name="password"
          placeholder="Contraseña"
          value={form.password}
          onChange={handleChange}
          className="w-full p-2 mb-3 border rounded-xl"
          required
        />

        {/* Confirmar Contraseña */}
        <input
          type="password"
          name="confirmPassword"
          placeholder="Confirmar Contraseña"
          value={form.confirmPassword}
          onChange={handleChange}
          className="w-full p-2 mb-3 border rounded-xl"
          required
        />

        <button
          type="submit"
          className="w-full bg-violet-600 text-white py-2 rounded-xl hover:bg-violet-700 transition"
        >
          Registrarse
        </button>
      </form>
    </div>
  );
};

export default Register;
