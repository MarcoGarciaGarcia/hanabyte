"use client";
import { saveService } from "@/app/services/login";
import {
  Button,
  Input,
  Textarea,
  Card,
  CardHeader,
  CardBody,
  PressEvent,
} from "@heroui/react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { useState } from "react";
import Swal from "sweetalert2";

const ServicesDashboard = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [features, setFeatures] = useState<string[]>([]);
  const [currentFeature, setCurrentFeature] = useState("");
  const [price, setPrice] = useState(0.0);
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);

  const router = useRouter();

  const handleAddFeature = () => {
    if (currentFeature.trim() !== "") {
      setFeatures([...features, currentFeature]);
      setCurrentFeature("");
    }
  };

  const handleRemoveFeature = (index: number) => {
    const newFeatures = [...features];
    newFeatures.splice(index, 1);
    setFeatures(newFeatures);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      // Aquí iría la llamada a tu API para guardar el servicio
      const response = await saveService(title, description, features, price);

      if (response) {
        Swal.fire({
          title: "¡Registro exitoso!",
          icon: "success",
          draggable: true,
        });
      }

      // Simulando un retraso de red
      await new Promise((resolve) => setTimeout(resolve, 1000));

      setSuccess(true);
      setTitle("");
      setDescription("");
      setFeatures([]);
      setPrice(0.0);

      // Ocultar el mensaje de éxito después de 3 segundos
      setTimeout(() => setSuccess(false), 3000);
    } catch (error) {
      console.error("Error al guardar el servicio:", error);
    } finally {
      setLoading(false);
    }
  };

  function handleSalir(): void {
    sessionStorage.removeItem("login");
    router.push("/platform");
  }

  return (
    <div className="min-h-screen bg-[#f1faf9] p-4 sm:p-6 md:p-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl mx-auto"
      >
        <Card className="bg-white rounded-xl shadow-lg overflow-hidden">
          <CardHeader className="bg-[#379aa3] p-6">
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.4, delay: 0.2 }}
            >
              <h1 className="text-2xl sm:text-3xl font-bold text-white flex items-center justify-center">
                HanaByte <span className="ml-2">花</span>
              </h1>
              <p className="text-[#daf3f3] mt-2 text-center">
                Panel de Administración - Registrar Nuevo Servicio
              </p>
            </motion.div>
          </CardHeader>

          <CardBody className="p-6 sm:p-8">
            {success && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="bg-green-50 text-green-600 p-3 rounded-md text-sm mb-6"
              >
                ¡Servicio registrado exitosamente!
              </motion.div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="title"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Título del Servicio
                </label>
                <Input
                  id="title"
                  type="text"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  placeholder="Ej: Desarrollo Web Personalizado"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#379aa3] focus:border-[#379aa3] transition"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="description"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Descripción
                </label>
                <Textarea
                  id="description"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  rows={4}
                  placeholder="Describe el servicio en detalle..."
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#379aa3] focus:border-[#379aa3] transition"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="features"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Características
                </label>
                <div className="flex gap-2 mb-2">
                  <Input
                    id="features"
                    type="text"
                    value={currentFeature}
                    onChange={(e) => setCurrentFeature(e.target.value)}
                    placeholder="Añade una característica"
                    className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#379aa3] focus:border-[#379aa3] transition"
                  />
                  <Button
                    type="button"
                    onClick={handleAddFeature}
                    className="bg-[#379aa3] hover:bg-[#307e8a] text-white font-medium rounded-lg transition"
                  >
                    Añadir
                  </Button>
                </div>

                {features.length > 0 && (
                  <ul className="space-y-2 mt-2">
                    {features.map((feature, index) => (
                      <motion.li
                        key={index}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.2 }}
                        className="flex items-center justify-between bg-gray-50 p-2 rounded-md"
                      >
                        <span className="text-sm text-gray-700">{feature}</span>
                        <button
                          type="button"
                          onClick={() => handleRemoveFeature(index)}
                          className="text-red-500 hover:text-red-700 text-sm"
                        >
                          Eliminar
                        </button>
                      </motion.li>
                    ))}
                  </ul>
                )}
              </div>

              <div>
                <label
                  htmlFor="price"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Precio
                </label>
                <Input
                  id="price"
                  type="text"
                  value={price.toString()}
                  onChange={(e) => setPrice(Number(e.target.value))}
                  placeholder="Ej: $5000"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#379aa3] focus:border-[#379aa3] transition"
                  required
                />
              </div>

              <div className="pt-4">
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
                  {loading ? "Registrando servicio..." : "Registrar Servicio"}
                </Button>
                <Button
                  onPress={handleSalir}
                  type="button"
                  variant="bordered"
                  className="border-1 border-[#379aa3] text-[#379aa3] font-semibold rounded-md w-full mt-4 p-2 justify-center"
                >
                  Salir
                </Button>
              </div>
            </form>
          </CardBody>
        </Card>

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

export default ServicesDashboard;
