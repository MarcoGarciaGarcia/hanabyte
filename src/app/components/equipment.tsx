"use client";

import { Card, CardHeader, CardBody } from "@heroui/react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const EquipmentSection: React.FC = () => {
  const equipo = [
    {
      nombre: "Agustín Escobedo",
      cargo: "BackEnd Developer",
      descripcion:
        "Encargado de diseñar y mantener la infraestructura de la plataforma, asegurando que las aplicaciones sean escalables, eficientes y seguras.",
      imgSrc: "/e2.jpg",
      facebook: "https://www.facebook.com/share/1UM2aGnGbg/",
      github: "https://github.com/AgustinEscobedo",
    },
    {
      nombre: "Marco García",
      cargo: "FrontEnd Developer",
      descripcion:
        "Responsable de crear y dar mantenimiento interfaces intuitivas y atractivas, asegurando una experiencia de usuario fluida y responsive en la plataforma.",
      imgSrc: "/e1.jpg",
      facebook: "https://www.facebook.com/share/1ATH1hj3eN/",
      github: "https://github.com/MarcoGarciaGarcia",
    },
  ];

  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

  return (
    <section
      id="conocenos"
      ref={sectionRef}
      className="w-full py-10 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-20"
    >
      <div className="max-w-7xl mx-auto">
        {/* Encabezado */}
        <div className="text-center mb-6 sm:mb-8 md:mb-10">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 20 }}
            transition={{ duration: 0.6 }}
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#379aa3] mb-3 sm:mb-4"
          >
            Nuestro Equipo
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 20 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-base sm:text-lg md:text-xl text-gray-600 mx-auto max-w-3xl"
          >
            Nuestro equipo es una mezcla de talento y cercanía, como un campo de
            cerezos en flor. Cada uno aporta su esencia única, y juntos
            cultivamos soluciones digitales frescas y auténticas.
          </motion.p>
        </div>

        {/* Tarjetas del equipo */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 md:gap-10 justify-center">
          {equipo.map((miembro, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 50 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="flex justify-center"
            >
              <Card className="shadow-lg rounded-lg w-full max-w-sm sm:max-w-md md:max-w-lg hover:scale-[1.02] hover:shadow-xl transition-all duration-300 ease-in-out h-full flex flex-col">
                <div className="aspect-w-16 aspect-h-9 overflow-hidden">
                  <img
                    className="w-full h-48 sm:h-56 object-cover rounded-t-lg"
                    src={miembro.imgSrc}
                    alt={miembro.nombre}
                  />
                </div>
                <div className="flex-grow flex flex-col p-4 sm:p-6">
                  <CardHeader className="text-center pb-2">
                    <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900">
                      {miembro.nombre}
                    </h3>
                    <p className="text-sm sm:text-base text-gray-500 ml-2">
                      - {miembro.cargo}
                    </p>
                  </CardHeader>
                  <CardBody className="flex-grow">
                    <p className="text-sm sm:text-base text-gray-600 mt-2 sm:mt-4">
                      {miembro.descripcion}
                    </p>
                  </CardBody>
                  <div className="mt-4 sm:mt-6 pt-4 border-t border-gray-100">
                    <ul className="flex justify-center space-x-4">
                      <li>
                        <a
                          href={miembro.facebook}
                          className="text-gray-500 hover:text-[#379aa3] transition-colors"
                        >
                          <svg
                            className="w-5 h-5"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                            aria-hidden="true"
                          >
                            <path
                              fillRule="evenodd"
                              d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </a>
                      </li>

                      <li>
                        <a
                          href={miembro.github}
                          className="text-gray-500 hover:text-[#379aa3] transition-colors"
                        >
                          <svg
                            className="w-5 h-5"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                            aria-hidden="true"
                          >
                            <path
                              fillRule="evenodd"
                              d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EquipmentSection;
