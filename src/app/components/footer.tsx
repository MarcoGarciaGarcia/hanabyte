"use client";
import Link from "next/link";
import { motion } from "framer-motion";

export function Footer() {
  return (
    <footer className="w-full bg-[#379aa3] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex flex-col items-center md:items-start"
          >
            <div className="flex items-center mb-4">
              <span className="text-2xl font-bold">HanaByte</span>
              <span className="ml-2 text-xl">花</span>
            </div>
            <p className="text-[#daf3f3] text-sm mb-6 text-center md:text-left">
              Cultivando soluciones digitales con esencia natural
            </p>
            <div className="flex space-x-4">
              <Link
                href="https://www.instagram.com/hana.byte?igsh=NmdscmhwYnVseWhm"
                target="_blank"
                aria-label="Instagram"
              >
                <motion.div
                  whileHover={{ y: -2 }}
                  className="bg-[#59b9c0] hover:bg-[#307e8a] p-2 rounded-full transition-colors"
                >
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </motion.div>
              </Link>

              <Link
                href="https://www.facebook.com/share/18uPzuZFnH/"
                target="_blank"
                aria-label="Facebook"
              >
                <motion.div
                  whileHover={{ y: -2 }}
                  className="bg-[#59b9c0] hover:bg-[#307e8a] p-2 rounded-full transition-colors"
                >
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                  </svg>
                </motion.div>
              </Link>

              <Link
                href="https://github.com/MarcoGarciaGarcia"
                target="_blank"
                aria-label="GitHub"
              >
                <motion.div
                  whileHover={{ y: -2 }}
                  className="bg-[#59b9c0] hover:bg-[#307e8a] p-2 rounded-full transition-colors"
                >
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                      clipRule="evenodd"
                    />
                  </svg>
                </motion.div>
              </Link>
            </div>
          </motion.div>

          {/* Enlaces rápidos */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex flex-col items-center md:items-start"
          >
            <h3 className="text-lg font-semibold mb-4">Enlaces Rápidos</h3>
            {/* <ul className="space-y-2 text-center md:text-left">
              <li>
                <Link
                  href="/servicios"
                  className="text-[#daf3f3] hover:text-white transition-colors text-sm"
                >
                  Servicios
                </Link>
              </li>
              <li>
                <Link
                  href="/portafolio"
                  className="text-[#daf3f3] hover:text-white transition-colors text-sm"
                >
                  Portafolio
                </Link>
              </li>
              <li>
                <Link
                  href="/nosotros"
                  className="text-[#daf3f3] hover:text-white transition-colors text-sm"
                >
                  Nosotros
                </Link>
              </li>
              <li>
                <Link
                  href="/blog"
                  className="text-[#daf3f3] hover:text-white transition-colors text-sm"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  href="/contacto"
                  className="text-[#daf3f3] hover:text-white transition-colors text-sm"
                >
                  Contacto
                </Link>
              </li>
            </ul> */}
          </motion.div>

          {/* Contacto */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="flex flex-col items-center md:items-start"
          >
            <h3 className="text-lg font-semibold mb-4">Contacto</h3>
            <address className="not-italic text-sm text-[#daf3f3] text-center md:text-left space-y-2">
              <p>contacto@hanabyte.com</p>
              <p>+52 55 1455 7043</p>
              <p>Ciudad de México, México</p>
            </address>
          </motion.div>
        </div>

        {/* Derechos de autor */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="border-t border-[#59b9c0] mt-8 pt-8 text-center"
        >
          <p className="text-xs text-[#daf3f3]">
            © {new Date().getFullYear()} HanaByte 花. Todos los derechos
            reservados.
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
