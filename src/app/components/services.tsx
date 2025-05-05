"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Card, CardHeader, CardBody, Divider } from "@heroui/react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

interface Servicio {
  servicio: string;
  descripcion: string;
  precio: number;
  caracteristicas: string[];
}

export function ServicesSection() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

  const services: Servicio[] = [
    {
      servicio: "Landing Page Esencial",
      descripcion:
        "Presencia básica para cafeterías y restaurantes que inician su camino digital.",
      precio: 3500,
      caracteristicas: [
        "Diseño responsivo",
        "1 sección principal",
        "Formulario de contacto",
        "Botón de WhatsApp",
        "Integración con Google Maps",
        "Hosting gratuito 1 mes",
      ],
    },
    {
      servicio: "Landing Page Profesional",
      descripcion:
        "Una solución más completa, ideal para negocios en crecimiento.",
      precio: 6800,
      caracteristicas: [
        "Diseño responsivo personalizado",
        "Hasta 3 secciones (Menú, Galería, Opiniones)",
        "1 video promocional corto",
        "Enlace a redes sociales",
        "Hosting gratuito 3 meses",
      ],
    },
    {
      servicio: "Landing Page Premium",
      descripcion:
        "Página avanzada con funciones interactivas para negocios establecidos.",
      precio: 12500,
      caracteristicas: [
        "Hasta 5 secciones dinámicas",
        "2 videos promocionales profesionales",
        "Sistema de reservas o pedidos por WhatsApp",
        "Galería animada / Carrusel",
        "Blog o sección de novedades",
        "Hosting gratuito 6 meses",
        "Capacitación para autogestión",
      ],
    },
    {
      servicio: "Landing Page Personalizada",
      descripcion:
        "Desarrollamos la solución que tu negocio necesita, ajustándonos a tus objetivos y presupuesto.",
      precio: 0,
      caracteristicas: [
        "Diseño a medida",
        "Contenido y secciones flexibles",
        "Funcionalidades personalizadas",
        "Costo y entrega según requerimientos",
      ],
    },
  ];

  return (
    <section
      id="productos"
      ref={sectionRef}
      className="w-full py-12 sm:py-20 lg:py-24 px-4 sm:px-6 md:px-8 lg:px-12 bg-white h-full justify-center items-center"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 20 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4">
            Nuestros Servicios
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Soluciones digitales diseñadas para potenciar tu negocio
            gastronómico
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: isInView ? 1 : 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <Swiper
            spaceBetween={30}
            slidesPerView={1}
            loop={true}
            centeredSlides={true}
            breakpoints={{
              640: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 30,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 30,
              },
            }}
            className="pb-12 px-2"
          >
            {services.map((service, index) => (
              <SwiperSlide key={index}>
                <div className="h-full flex flex-col">
                  <Card className="w-full h-[500px] flex flex-col border border-gray-200 rounded-lg shadow-sm hover:shadow-lg transition-all duration-300 mx-auto bg-white">
                    <CardHeader className="px-6 pt-8 pb-4">
                      <div className="flex flex-col">
                        <h2 className="text-xl sm:text-2xl font-bold text-gray-800 text-center">
                          {service.servicio}
                        </h2>
                        <p className="text-sm sm:text-base text-gray-600 mt-3 font-normal text-center">
                          {service.descripcion}
                        </p>
                      </div>
                    </CardHeader>
                    <Divider className="my-0" />
                    <CardBody className="px-6 py-6 flex-grow flex flex-col">
                      <ul className="list-disc pl-5 space-y-2.5 text-sm sm:text-base text-gray-700 flex-grow">
                        {service.caracteristicas.map((caracteristica, i) => (
                          <li key={i} className="leading-relaxed">
                            {caracteristica}
                          </li>
                        ))}
                      </ul>
                      <div className="mt-8">
                        <p className="text-center text-2xl sm:text-3xl font-bold text-[#2d6671] mb-2">
                          {service.precio > 0
                            ? `$${service.precio.toLocaleString()}`
                            : "A convenir"}
                        </p>
                        {service.precio > 0 && (
                          <p className="text-center text-sm text-gray-500">
                            Precio final
                          </p>
                        )}
                      </div>
                    </CardBody>
                  </Card>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>
      </div>
    </section>
  );
}
