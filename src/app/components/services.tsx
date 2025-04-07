"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import {
  Card,
  CardHeader,
  CardBody,
  Divider,
} from "@heroui/react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export function ServicesSection() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

  const services = [
    {
      title: "Desarrollo de Landing Pages",
      description: "Soluciones personalizadas que hacen crecer tu negocio.",
      price: "$3500",
      features: [
        "Diseño responsivo",
        "Optimización SEO",
        "Integración de formularios",
        "Análisis de rendimiento",
      ],
    },
    {
      title: "Desarrollo a la Medida",
      description:
        "Creamos soluciones personalizadas que se adaptan perfectamente a tus necesidades.",
      price: "$5000",
      features: [
        "Desarrollo de plataformas web",
        "Aplicaciones móviles",
        "Integraciones avanzadas",
        "Soporte y mantenimiento",
      ],
    },
    {
      title: "Manejo de Redes Sociales",
      description:
        "Gestionamos tus redes sociales para aumentar tu presencia online y conectar con tu audiencia.",
      price: "$2000",
      features: [
        "Gestión de contenido",
        "Estrategias de crecimiento",
        "Interacción con seguidores",
        "Análisis de métricas",
      ],
    },
  ];

  return (
    <section ref={sectionRef} className="w-full py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-8 lg:px-12">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 sm:mb-12"
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#379aa3] mb-4">
            Nuestros Servicios
          </h1>
          <p className="text-base sm:text-lg text-gray-600 mx-auto max-w-3xl px-4 sm:px-0">
            En HanaByte, ofrecemos soluciones digitales personalizadas que impulsan
            tu negocio. Desde desarrollo web hasta estrategias de marketing digital,
            creamos experiencias únicas que generan resultados reales.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: isInView ? 1 : 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-8 sm:mt-12"
        >
          <Swiper
            spaceBetween={20}
            slidesPerView={1}
            loop={true}
            breakpoints={{
              640: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 25,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 30,
              },
            }}
            className="px-2 sm:px-4"
          >
            {services.map((service, index) => (
              <SwiperSlide key={index}>
                <Card className="w-full h-full min-h-[400px] sm:min-h-[450px] border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 mx-auto">
                  <CardHeader className="px-6 pt-6 pb-4">
                    <div className="flex flex-col">
                      <h2 className="text-xl sm:text-2xl font-semibold text-[#379aa3] text-center">
                        {service.title}
                      </h2>
                      <p className="text-sm sm:text-base text-gray-500 mt-2 font-light text-center">
                        {service.description}
                      </p>
                    </div>
                  </CardHeader>
                  <Divider />
                  <CardBody className="px-6 py-4">
                    <ul className="list-disc pl-5 space-y-2 text-sm sm:text-base text-gray-600">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex}>{feature}</li>
                      ))}
                    </ul>
                    <p className="text-center text-2xl sm:text-3xl font-semibold text-[#2d6671] mt-6 mb-4">
                      {service.price}
                    </p>
                  </CardBody>
                </Card>
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>
      </div>
    </section>
  );
}