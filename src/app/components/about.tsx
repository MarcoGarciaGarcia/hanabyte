"use client";

import { Card, CardHeader, CardBody } from "@heroui/react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const AboutSection: React.FC = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

  return (
    <section
      ref={sectionRef}
      className="about-section w-full px-4 sm:px-6 md:px-8 lg:px-12 xl:px-20 py-12 sm:py-16 md:py-20"
    >
      <div className="max-w-7xl mx-auto">
        {/* Encabezado */}
        <div className="text-center mb-8 md:mb-12 lg:mb-16 px-4 sm:px-8 md:px-12 lg:px-20">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 20 }}
            transition={{ duration: 0.6 }}
            className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-[#379aa3]"
          >
            Nosotros
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 20 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-base sm:text-lg md:text-xl text-gray-600"
          >
            En HanaByte, creemos en la belleza de las cosas simples y naturales. 
            Al igual que las flores de cerezo que florecen con delicadeza, nuestro 
            trabajo crece desde la esencia misma de tu proyecto, cuidando cada 
            detalle y cultivando soluciones que se adaptan a ti de manera única.
          </motion.p>
        </div>

        {/* Tarjetas */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
          {/* Misión */}
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: isInView ? 0 : -100, opacity: isInView ? 1 : 0 }}
            transition={{ duration: 0.8 }}
            className="w-full"
          >
            <Card className="group hover:bg-[#379aa3] p-6 sm:p-8 md:p-10 border border-gray-200 rounded-lg h-full min-h-[300px] sm:min-h-[350px] transition-all duration-300 ease-in-out hover:shadow-lg">
              <CardHeader className="group-hover:text-white font-semibold text-[#379aa3] py-2 text-lg sm:text-xl md:text-2xl transition-colors duration-300">
                Misión
              </CardHeader>
              <CardBody>
                <p className="text-gray-500 font-light group-hover:text-white text-sm sm:text-base md:text-lg transition-colors duration-300">
                  Nuestra misión es cultivar soluciones digitales únicas y
                  creativas, inspiradas en la delicadeza de las flores de
                  cerezo. Acompañamos a nuestros clientes con estrategias
                  cercanas y personalizadas, ayudando a que sus proyectos
                  crezcan de forma natural y auténtica.
                </p>
              </CardBody>
            </Card>
          </motion.div>

          {/* Visión */}
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: isInView ? 0 : 100, opacity: isInView ? 1 : 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-full"
          >
            <Card className="group hover:bg-[#379aa3] p-6 sm:p-8 md:p-10 border border-gray-200 rounded-lg h-full min-h-[300px] sm:min-h-[350px] transition-all duration-300 ease-in-out hover:shadow-lg">
              <CardHeader className="font-semibold text-[#379aa3] py-2 text-lg sm:text-xl md:text-2xl group-hover:text-white transition-colors duration-300">
                Visión
              </CardHeader>
              <CardBody>
                <p className="text-gray-500 font-light group-hover:text-white text-sm sm:text-base md:text-lg transition-colors duration-300">
                  Ser una consultora digital líder, que combina tecnología,
                  diseño y marketing natural, ayudando a nuestros clientes a
                  crecer y conectar auténticamente con su audiencia.
                </p>
              </CardBody>
            </Card>
          </motion.div>

          {/* Valores */}
          <motion.div
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: isInView ? 0 : 100, opacity: isInView ? 1 : 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="w-full md:col-span-2 lg:col-span-1"
          >
            <Card className="group hover:bg-[#379aa3] p-6 sm:p-8 md:p-10 border border-gray-200 rounded-lg h-full min-h-[300px] sm:min-h-[350px] transition-all duration-300 ease-in-out hover:shadow-lg">
              <CardHeader className="font-semibold text-[#379aa3] py-2 text-lg sm:text-xl md:text-2xl group-hover:text-white transition-colors duration-300">
                Valores
              </CardHeader>
              <CardBody>
                <ul className="list-disc list-inside font-light text-gray-500 group-hover:text-white text-sm sm:text-base md:text-lg space-y-2 transition-colors duration-300">
                  <li>Cercanía</li>
                  <li>Autenticidad</li>
                  <li>Creatividad</li>
                  <li>Sostenibilidad</li>
                </ul>
              </CardBody>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;