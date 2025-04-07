"use client";
import { Button, Input, Textarea } from "@heroui/react";
import { useState } from "react";

const RegisterForm = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [NameError, setNameError] = useState("");
  const [message, setMessage] = useState("");
  const [emailError, setEmailError] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const validateEmail = (email: string) => {
    const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return re.test(email);
  };

  const validateName = (name: string) => {
    const re = /^[a-zA-ZÀ-ÿ\u00f1\u00d1\s]+$/;
    return re.test(name.trim()) && name.trim().length >= 2;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    if (!validateEmail(email)) {
      setEmailError("Por favor, ingrese un correo electrónico válido.");
      return;
    } else if (!validateName(name)) {
      setNameError("Por favor, ingrese un nombre válido.");
      return;
    }

    setNameError("");

    setEmailError("");

    try {
      const res = await fetch("https://backend.remmi.space/api/enviarCorreo", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, name: name, asunto: message }),
      });

      if (!res.ok) {
        throw new Error("Error al enviar el formulario");
      }

      console.log("Formulario enviado:", { email, message });

      setIsSubmitted(true);
    } catch (err) {
      console.error("Hubo un problema con la solicitud:", err);
    }

    setIsLoading(false);

    console.log("Formulario enviado:", { email, message });
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4 sm:p-6">
      <div className="w-full max-w-6xl bg-white rounded-xl shadow-lg overflow-hidden">
        <div className="flex flex-col lg:flex-row">
          {/* Sección del formulario - Primero en móvil */}
          <div className="w-full lg:w-1/2 p-6 sm:p-8 order-2 lg:order-1">
            <h1 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-6">
              Registro de Cliente
            </h1>

            {isSubmitted ? (
              <div className="text-center py-8">
                <div className="text-[#379aa3] mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-16 w-16 mx-auto"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <h2 className="text-xl sm:text-2xl font-semibold text-gray-700 mb-2">
                  ¡Registro exitoso!
                </h2>
                <p className="text-gray-600 sm:text-lg">
                  Gracias por registrarte. Nos pondremos en contacto contigo
                  pronto.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm sm:text-base font-medium text-gray-700 mb-1"
                  >
                    Nombre Completo
                  </label>
                  <Input
                    variant="underlined"
                    required
                    type="name"
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Jon Doe"
                    className={`w-full px-4 py-2 text-sm sm:text-base border-b-2 focus:border-[#379aa3] transition ${
                      NameError ? "border-red-500" : "border-gray-300"
                    }`}
                  />
                  {NameError && (
                    <p className="mt-1 text-sm text-red-500">{NameError}</p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm sm:text-base font-medium text-gray-700 mb-1"
                  >
                    Correo Electrónico
                  </label>
                  <Input
                    variant="underlined"
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="ejemplo@correo.com"
                    className={`w-full px-4 py-2 text-sm sm:text-base border-b-2 focus:border-[#379aa3] transition ${
                      emailError ? "border-red-500" : "border-gray-300"
                    }`}
                  />
                  {emailError && (
                    <p className="mt-1 text-sm text-red-500">{emailError}</p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm sm:text-base font-medium text-gray-700 mb-1"
                  >
                    Mensaje
                  </label>
                  <Textarea
                    variant="underlined"
                    id="message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    rows={4}
                    className="w-full px-4 py-2 text-sm sm:text-base border-b-2 border-gray-300 focus:border-[#379aa3] transition"
                    placeholder="Cuéntanos cómo podemos ayudarte..."
                  />
                </div>

                <div className="pt-4">
                  <Button
                    type="submit"
                    variant="solid"
                    isLoading={isLoading}
                    className="w-full py-3 sm:py-4 bg-[#379aa3] hover:bg-[#307e8a] text-white font-medium rounded-lg transition text-sm sm:text-base"
                  >
                    Enviar Registro
                  </Button>
                </div>
              </form>
            )}
          </div>

          {/* Sección lateral - Segundo en móvil */}
          <div className="w-full lg:w-1/2 bg-gradient-to-br from-[#59b9c0] to-[#379aa3] p-6 sm:p-8 flex flex-col justify-center text-white order-1 lg:order-2">
            <div className="text-center lg:text-left">
              <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6">
                Sé parte de nuestra comunidad
              </h2>
              <p className="mb-6 opacity-90 text-sm sm:text-base">
                Completa el formulario para registrarte y acceder a todos
                nuestros servicios exclusivos.
              </p>

              <div className="space-y-3 sm:space-y-4">
                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <svg
                      className="h-5 w-5 text-[#daf3f3]"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <p className="ml-3 text-sm sm:text-base opacity-90">
                    Acceso prioritario a nuevos productos
                  </p>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <svg
                      className="h-5 w-5 text-[#daf3f3]"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <p className="ml-3 text-sm sm:text-base opacity-90">
                    Ofertas exclusivas para clientes registrados
                  </p>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <svg
                      className="h-5 w-5 text-[#daf3f3]"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <p className="ml-3 text-sm sm:text-base opacity-90">
                    Soporte técnico prioritario
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterForm;
