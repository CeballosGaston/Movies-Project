import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const RegisterPage = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [name, setName] = useState("");

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();

    // Validaciones
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const isValid = (email: string): boolean => emailRegex.test(email);

    if (!email || !isValid(email) || !password || !name) {
      setError("Please, enter your email, name and password");
      return;
    }

    // Guardar en localStorage

    const users = JSON.parse(localStorage.getItem("users") || "[]");
    if (users.find((u: any) => u.email === email)) {
      setError("The user already exist");
      return;
    }

    users.push({ email, password, name });
    localStorage.setItem("users", JSON.stringify(users));

    // Redirigir a login
    navigate("/login");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900 text-white">
      <form
        className="bg-gray-800 p-6 rounded-lg shadow-lg w-80"
        onSubmit={handleRegister}
      >
        <h2 className="text-2xl font-bold mb-4 text-center">Registro</h2>
        {error && <p className="text-red-500 mb-2">{error}</p>}

        <input
          type="text"
          placeholder="Name"
          className="w-full mb-3 p-2 rounded bg-gray-700 text-white"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="email"
          placeholder="Email"
          className="w-full mb-3 p-2 rounded bg-gray-700 text-white"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Contraseña"
          className="w-full mb-3 p-2 rounded bg-gray-700 text-white"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button
          type="submit"
          className="w-full bg-yellow-500 text-gray-900 font-bold py-2 rounded hover:bg-yellow-600"
        >
          Sing Up
        </button>
      </form>
    </div>
  );
};
