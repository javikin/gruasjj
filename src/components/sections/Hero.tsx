import Image from "next/image";
import { ChevronDown } from "lucide-react";

const WHATSAPP_URL =
  "https://wa.me/522299585946?text=Hola%2C%20me%20interesa%20cotizar%20un%20servicio%20de%20gr%C3%BAa.";

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative flex min-h-screen items-center justify-center overflow-hidden md:h-[85vh] md:min-h-[600px]"
      aria-label="Inicio"
    >
      {/* Background image */}
      <Image
        src="/images/hero/cement-plant-steel-work.jpg"
        alt="Grúa trabajando en planta cementera, Veracruz"
        fill
        className="object-cover"
        priority
        sizes="100vw"
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/60" aria-hidden="true" />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-4xl px-4 text-center text-white">
        {/* Brand */}
        <p className="text-5xl font-black tracking-tight text-[#F5B800] md:text-7xl">
          GRÚAS JJ
        </p>

        {/* Headline */}
        <h1 className="mt-4 text-xl font-light uppercase tracking-wide md:text-2xl">
          Renta de Grúas Industriales en Veracruz
        </h1>

        {/* Subtitle */}
        <p className="mx-auto mt-6 max-w-xl text-base text-gray-200 md:text-lg">
          Servicio profesional de izaje, montaje de estructuras y maniobras
          especializadas con operadores certificados.
        </p>

        {/* CTA buttons */}
        <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block rounded-lg bg-[#F5B800] px-8 py-4 font-semibold text-[#1A1A1A] transition-colors hover:bg-[#FFD54F] focus:outline-none focus:ring-2 focus:ring-[#F5B800] focus:ring-offset-2 focus:ring-offset-black"
            aria-label="Cotizar por WhatsApp"
          >
            Cotizar por WhatsApp
          </a>

          <a
            href="#servicios"
            className="inline-block rounded-lg border-2 border-white px-8 py-4 font-semibold text-white transition-colors hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-black"
          >
            Ver Servicios
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce text-white/70"
        aria-hidden="true"
      >
        <ChevronDown className="h-8 w-8" strokeWidth={1.5} />
      </div>
    </section>
  );
}
