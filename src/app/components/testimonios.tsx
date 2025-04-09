"use client";
import { AnimatedTestimonials } from "@/components/magicui/ui/animated-testimonials";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export function AnimatedTestimonialsSection() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

  const testimonials = [
    {
      quote:
        "HanaByte transformó completamente nuestra presencia digital. Su enfoque creativo y técnico nos ayudó a destacar en un mercado competitivo. El equipo demostró un profundo entendimiento de nuestras necesidades.",
      name: "Carlos Mendoza",
      designation: "Director de Marketing en VerdeNatural",
      src: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=3560&auto=format&fit=crop",
    },
    {
      quote:
        "Como startup, necesitábamos un sitio web que escalara con nuestro crecimiento. HanaByte no solo entregó un producto excepcional, sino que nos guió en cada paso con profesionalismo y paciencia.",
      name: "Ana Lucía Ramírez",
      designation: "Fundadora de EduTech Solutions",
      src: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=3540&auto=format&fit=crop",
    },
    {
      quote:
        "La plataforma e-commerce que desarrolló HanaByte aumentó nuestras ventas en un 40%. Su atención al detalle en la experiencia de usuario hizo la diferencia.",
      name: "Roberto Fernández",
      designation: "Gerente General en ModaSostenible",
      src: "https://images.unsplash.com/photo-1623582854588-d60de57fa33f?q=80&w=3540&auto=format&fit=crop",
    },
    {
      quote:
        "Trabajar con HanaByte fue una experiencia refrescante. Entendieron nuestra visión y la llevaron más allá de lo que imaginábamos posible con su solución tecnológica.",
      name: "María González",
      designation: "Directora de Innovación en SaludPlus",
      src: "https://images.unsplash.com/photo-1636041293178-808a6762ab39?q=80&w=3464&auto=format&fit=crop",
    },
    {
      quote:
        "El rediseño de nuestra web corporativa por parte de HanaByte no solo mejoró nuestra imagen, sino que optimizó nuestros procesos internos. Excelente consultoría técnica.",
      name: "Javier Ortega",
      designation: "CEO de Consultoría Integral",
      src: "https://images.unsplash.com/photo-1624561172888-ac93c696e10c?q=80&w=2592&auto=format&fit=crop",
    },
  ];

  return (
    <section
      id="clientes"
      ref={sectionRef}
      className="w-full py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-20"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 sm:mb-12 md:mb-16"
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#379aa3] mb-4">
            Lo que dicen nuestros clientes
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            Descubre cómo hemos ayudado a empresas como la tuya a florecer en el
            mundo digital
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: isInView ? 1 : 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <AnimatedTestimonials testimonials={testimonials} />
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: isInView ? 1 : 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-12 sm:mt-16 md:mt-20 text-center"
        ></motion.div>
      </div>
    </section>
  );
}
