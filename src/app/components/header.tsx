"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const Header: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>("");
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);

      const sections = ["inicio", "conocenos", "productos", "clientes"];
      const offsets = sections.map((id) => {
        const el = document.getElementById(id);
        return el ? el.offsetTop : 0;
      });

      const scrollY = window.scrollY + window.innerHeight / 2;
      for (let i = 0; i < sections.length; i++) {
        if (
          scrollY >= offsets[i] &&
          (i === sections.length - 1 || scrollY < offsets[i + 1])
        ) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // para estado inicial

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinkClass = (section: string) =>
    `text-sm px-4 py-2 transition-all ${
      activeSection === section
        ? "border-b-2 border-[#379aa3] text-[#379aa3]"
        : "border-b-2 border-transparent text-gray-700 hover:text-[#379aa3]"
    }`;

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all ${
        isScrolled ? "bg-white/80 backdrop-blur-md shadow-sm" : "bg-white"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/#inicio" className="flex items-center">
          <p className="text-[#379aa3] text-xl font-semibold">花 HB</p>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-6">
          <Link href="/#inicio" className={navLinkClass("inicio")}>
            Inicio
          </Link>
          <Link href="/#conocenos" className={navLinkClass("conocenos")}>
            Conócenos
          </Link>
          <Link href="/#productos" className={navLinkClass("productos")}>
            Productos
          </Link>
          <Link href="/#clientes" className={navLinkClass("clientes")}>
            Clientes
          </Link>
          <Link href="/platform" className={navLinkClass("plataforma")}>
            Plataforma
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-800"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-md py-4 px-6">
          <nav className="flex flex-col gap-4">
            <Link
              href="/#inicio"
              className={navLinkClass("inicio")}
              onClick={() => setIsMenuOpen(false)}
            >
              Inicio
            </Link>
            <Link
              href="/#conocenos"
              className={navLinkClass("conocenos")}
              onClick={() => setIsMenuOpen(false)}
            >
              Conócenos
            </Link>
            <Link
              href="/#productos"
              className={navLinkClass("productos")}
              onClick={() => setIsMenuOpen(false)}
            >
              Productos
            </Link>
            <Link
              href="/#clientes"
              className={navLinkClass("clientes")}
              onClick={() => setIsMenuOpen(false)}
            >
              Clientes
            </Link>
            <Link
              href="/platform"
              className={navLinkClass("clientes")}
              onClick={() => setIsMenuOpen(false)}
            >
              Plataforma
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
