"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const WHATSAPP_URL =
  "https://wa.me/522299585946?text=Hola%2C%20me%20interesa%20cotizar%20un%20servicio%20de%20gr%C3%BAa.";

const NAV_LINKS = [
  { label: "Inicio", href: "#inicio" },
  { label: "Servicios", href: "#servicios" },
  { label: "Galería", href: "#galeria" },
  { label: "Contacto", href: "#contacto" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const handleNavClick = (href: string) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-white shadow-md"
            : "bg-transparent"
        }`}
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            {/* Logo */}
            <a
              href="#inicio"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick("#inicio");
              }}
              className="text-xl font-black tracking-widest text-[#F5B800] select-none"
              aria-label="Grúas JJ - Inicio"
            >
              GRÚAS JJ
            </a>

            {/* Desktop navigation */}
            <nav className="hidden md:flex items-center gap-8" aria-label="Navegación principal">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(link.href);
                  }}
                  className={`text-sm font-medium transition-colors duration-200 hover:text-[#F5B800] ${
                    scrolled ? "text-[#1A1A1A]" : "text-white"
                  }`}
                >
                  {link.label}
                </a>
              ))}
            </nav>

            {/* Desktop CTA + Mobile hamburger */}
            <div className="flex items-center gap-4">
              {/* Cotizar button - desktop only */}
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="hidden md:inline-flex items-center justify-center rounded-full bg-[#F5B800] px-5 py-2 text-sm font-semibold text-[#1A1A1A] transition-colors duration-200 hover:bg-[#C49000]"
                aria-label="Cotizar servicio por WhatsApp"
              >
                Cotizar
              </a>

              {/* Hamburger button - mobile only */}
              <button
                onClick={() => setMenuOpen((prev) => !prev)}
                className={`md:hidden p-2 rounded-md transition-colors duration-200 ${
                  scrolled ? "text-[#1A1A1A]" : "text-white"
                }`}
                aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
                aria-expanded={menuOpen}
                aria-controls="mobile-menu"
              >
                {menuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile full-screen overlay */}
      <div
        id="mobile-menu"
        role="dialog"
        aria-modal="true"
        aria-label="Menú de navegación"
        className={`fixed inset-0 z-40 bg-[#1A1A1A] flex flex-col transition-all duration-300 md:hidden ${
          menuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        {/* Top bar inside overlay - matches navbar height */}
        <div className="flex h-16 items-center justify-between px-4 sm:px-6">
          <span className="text-xl font-black tracking-widest text-[#F5B800]">
            GRÚAS JJ
          </span>
          <button
            onClick={() => setMenuOpen(false)}
            className="p-2 text-white"
            aria-label="Cerrar menú"
          >
            <X size={24} />
          </button>
        </div>

        {/* Nav links */}
        <nav
          className="flex flex-1 flex-col items-center justify-center gap-8"
          aria-label="Navegación móvil"
        >
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => {
                e.preventDefault();
                handleNavClick(link.href);
              }}
              className="text-2xl font-semibold text-white transition-colors duration-200 hover:text-[#F5B800]"
            >
              {link.label}
            </a>
          ))}

          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setMenuOpen(false)}
            className="mt-4 inline-flex items-center justify-center rounded-full bg-[#F5B800] px-8 py-3 text-lg font-semibold text-[#1A1A1A] transition-colors duration-200 hover:bg-[#C49000]"
            aria-label="Cotizar servicio por WhatsApp"
          >
            Cotizar
          </a>
        </nav>
      </div>
    </>
  );
}
