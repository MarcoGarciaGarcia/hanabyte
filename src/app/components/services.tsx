"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Card, CardHeader, CardBody, Divider } from "@heroui/react";
import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";

interface Servicio {
  servicio: string;
  descripcion: string;
  precio: number;
  caracteristicas: string[];
}

export function ServicesSection() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });
  const [services, setServices] = useState<Servicio[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchServices = async () => {
      try {
        setLoading(true);
        const response = await fetch(
          "https://backend.remmi.space/api/getAllServicios"
        );

        if (!response.ok) {
          throw new Error("Error al obtener los servicios");
        }

        const data = await response.json();

        // Asegúrate de que los datos tengan la estructura correcta
        if (Array.isArray(data)) {
          setServices(data);
        } else {
          throw new Error("Formato de datos incorrecto");
        }
      } catch (err) {
        setError("error");
        console.error("Error fetching services:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchServices();
  }, []);

  // Datos de ejemplo mientras carga o si hay error
  const demoServices: Servicio[] = [
    {
      servicio: "Desarrollo de Landing Pages",
      descripcion: "Soluciones personalizadas que hacen crecer tu negocio.",
      precio: 3500,
      caracteristicas: [
        "Diseño responsivo",
        "Optimización SEO",
        "Integración de formularios",
        "Análisis de rendimiento",
      ],
    },
  ];

  // Usamos los datos de la API o los de demostración si hay error
  const displayedServices = error || loading ? demoServices : services;

  return (
    <section
      id="productos"
      ref={sectionRef}
      className="w-full py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-8 lg:px-12"
    >
      <div className="max-w-7xl mx-auto">
        {/* ... (código anterior igual) ... */}

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
            {displayedServices.map((service, index) => (
              <SwiperSlide key={index}>
                <Card className="w-full h-full min-h-[400px] sm:min-h-[450px] border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 mx-auto">
                  <CardHeader className="px-6 pt-6 pb-4">
                    <div className="flex flex-col">
                      <h2 className="text-xl sm:text-2xl font-semibold text-[#379aa3] text-center">
                        {service.servicio}
                      </h2>
                      <p className="text-sm sm:text-base text-gray-500 mt-2 font-light text-center">
                        {service.descripcion}
                      </p>
                    </div>
                  </CardHeader>
                  <Divider />
                  <CardBody className="px-6 py-4">
                    <ul className="list-disc pl-5 space-y-2 text-sm sm:text-base text-gray-600">
                      {service.caracteristicas?.map(
                        (caracteristica, featureIndex) => (
                          <li key={featureIndex}>{caracteristica}</li>
                        )
                      )}
                    </ul>
                    <p className="text-center text-2xl sm:text-3xl font-semibold text-[#2d6671] mt-6 mb-4">
                      ${service.precio}
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
