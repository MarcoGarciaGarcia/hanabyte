"use client";
import { Button, Input } from "@heroui/react";
import { motion } from "framer-motion";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { registerUser, loginUser } from "../services/login";

const AuthForm = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    if (isLogin) {
      // Lógica de login
      if (!email || !password) {
        setError("Por favor completa todos los campos");
        setLoading(false);
        return;
      }

      try {
        const response = await loginUser(email, password);
        if (response) {
          router.push("/platform/admin");
        } else {
          setError("Error al iniciar sesión. Por favor intenta nuevamente.");
        }
      } catch (err) {
        setError(
          "Credenciales incorrectas. Por favor intenta nuevamente." + err
        );
      } finally {
        setLoading(false);
      }
    } else {
      if (!name || !email || !password) {
        setError("Por favor completa todos los campos");
        setLoading(false);
        return;
      }

      try {
        const response = await registerUser(name, email, password);
        if (response) {
          window.location.reload();
        } else {
          setError("Error al registrarte. Por favor intenta nuevamente.");
        }
      } catch (err) {
        setError("Error al registrar. Por favor intenta nuevamente." + err);
      } finally {
        setLoading(false);
      }
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#f1faf9] p-4 sm:p-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full max-w-md"
      >
        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="bg-[#379aa3] p-6 text-center">
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.4, delay: 0.2 }}
            >
              <h1 className="text-2xl sm:text-3xl font-bold text-white flex items-center justify-center">
                HanaByte <span className="ml-2">花</span>
              </h1>
              <p className="text-[#daf3f3] mt-2">
                {isLogin
                  ? "Inicia sesión en tu cuenta"
                  : "Crea una nueva cuenta"}
              </p>
            </motion.div>
          </div>

          <form onSubmit={handleSubmit} className="p-6 sm:p-8 space-y-6">
            {error && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="bg-red-50 text-red-600 p-3 rounded-md text-sm"
              >
                {error}
              </motion.div>
            )}

            {!isLogin && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
              >
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Nombre Completo
                </label>
                <Input
                  id="name"
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Tu nombre"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#379aa3] focus:border-[#379aa3] transition"
                />
              </motion.div>
            )}

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Correo Electrónico
              </label>
              <Input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="tu@email.com"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#379aa3] focus:border-[#379aa3] transition"
              />
            </div>

            <div>
              <div className="flex justify-between items-center mb-1">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-gray-700"
                >
                  Contraseña
                </label>
                {isLogin && (
                  <Link
                    href="/forgot-password"
                    className="text-xs text-[#379aa3] hover:text-[#307e8a]"
                  >
                    ¿Olvidaste tu contraseña?
                  </Link>
                )}
              </div>
              <Input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#379aa3] focus:border-[#379aa3] transition"
              />
              {!isLogin && (
                <p className="mt-1 text-xs text-gray-500">
                  La contraseña debe tener al menos 8 caracteres
                </p>
              )}
            </div>

            {isLogin && (
              <div className="flex items-center">
                <input
                  id="remember-me"
                  name="remember-me"
                  type="checkbox"
                  className="h-4 w-4 text-[#379aa3] focus:ring-[#379aa3] border-gray-300 rounded"
                />
                <label
                  htmlFor="remember-me"
                  className="ml-2 block text-sm text-gray-700"
                >
                  Recordar mi sesión
                </label>
              </div>
            )}

            <Button
              type="submit"
              disabled={loading}
              className="w-full py-3 bg-[#379aa3] hover:bg-[#307e8a] text-white font-medium rounded-lg transition flex justify-center"
            >
              {loading ? (
                <svg
                  className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  ></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  ></path>
                </svg>
              ) : null}
              {loading
                ? isLogin
                  ? "Iniciando sesión..."
                  : "Registrando..."
                : isLogin
                ? "Iniciar sesión"
                : "Registrarse"}
            </Button>
          </form>

          <div className="bg-gray-50 px-6 py-4 text-center">
            <p className="text-sm text-gray-600">
              {isLogin ? "¿No tienes una cuenta? " : "¿Ya tienes una cuenta? "}
              <button
                onClick={() => setIsLogin(!isLogin)}
                className="font-medium text-[#379aa3] hover:text-[#307e8a] focus:outline-none"
              >
                {isLogin ? "Regístrate" : "Inicia sesión"}
              </button>
            </p>
          </div>
        </div>

        <div className="mt-8 text-center text-xs text-gray-500">
          <p>
            © {new Date().getFullYear()} HanaByte. Todos los derechos
            reservados.
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default AuthForm;
