"use client";

import { useState, useCallback, useEffect } from "react";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";

interface GalleryItem {
  src: string;
  alt: string;
  label: string;
  width: number;
  height: number;
}

const galleryItems: GalleryItem[] = [
  {
    src: "/images/gallery/aircraft-lifting-airport.jpg",
    alt: "Izaje de aeronave en aeropuerto",
    label: "Izaje de Aeronave",
    width: 1141,
    height: 900,
  },
  {
    src: "/images/hero/cement-plant-steel-work.jpg",
    alt: "Montaje de estructura en planta cementera",
    label: "Planta Cementera",
    width: 1280,
    height: 720,
  },
  {
    src: "/images/gallery/container-loading.jpg",
    alt: "Carga de contenedores industriales",
    label: "Carga de Contenedores",
    width: 1024,
    height: 768,
  },
  {
    src: "/images/gallery/waldos-sign-installation.jpg",
    alt: "Instalación de anuncio Waldos",
    label: "Instalación de Anuncio",
    width: 1866,
    height: 2048,
  },
  {
    src: "/images/gallery/oil-gas-sunset.jpg",
    alt: "Servicio en planta petrolera",
    label: "Sector Petrolero",
    width: 956,
    height: 575,
  },
  {
    src: "/images/gallery/construction-lifting.jpg",
    alt: "Izaje en obra de construcción",
    label: "Construcción",
    width: 1440,
    height: 1800,
  },
  {
    src: "/images/gallery/boom-truck-exterran.jpg",
    alt: "Grúa en instalación Exterran",
    label: "Maniobra Industrial",
    width: 900,
    height: 506,
  },
  {
    src: "/images/gallery/drone-yard-overview.jpg",
    alt: "Vista aérea de equipo y plataforma",
    label: "Equipo y Transporte",
    width: 902,
    height: 509,
  },
  {
    src: "/images/gallery/warehouse-crane.jpg",
    alt: "Grúa operando en nave industrial",
    label: "Nave Industrial",
    width: 1053,
    height: 1053,
  },
];

export default function Gallery() {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const openLightbox = (index: number) => setSelectedIndex(index);
  const closeLightbox = () => setSelectedIndex(null);

  const goToPrev = useCallback(() => {
    setSelectedIndex((prev) =>
      prev === null ? null : (prev - 1 + galleryItems.length) % galleryItems.length
    );
  }, []);

  const goToNext = useCallback(() => {
    setSelectedIndex((prev) =>
      prev === null ? null : (prev + 1) % galleryItems.length
    );
  }, []);

  // Keyboard navigation
  useEffect(() => {
    if (selectedIndex === null) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowLeft") goToPrev();
      if (e.key === "ArrowRight") goToNext();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedIndex, goToPrev, goToNext]);

  // Prevent body scroll when lightbox is open
  useEffect(() => {
    if (selectedIndex !== null) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [selectedIndex]);

  return (
    <section
      id="galeria"
      className="bg-[#F5F5F5] py-20 md:py-28"
      aria-label="Galería de trabajos"
    >
      <div className="mx-auto max-w-6xl px-4">
        <SectionHeading
          title="Nuestros Trabajos"
          subtitle="Proyectos realizados en Veracruz y zona sureste"
        />

        {/* Gallery grid */}
        <div
          className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3"
          role="list"
        >
          {galleryItems.map((item, index) => {
            // Make items 0, 4 span 2 columns on large screens for variety
            const isWide = index === 0 || index === 4;

            return (
              <div
                key={item.src}
                role="listitem"
                className={`relative overflow-hidden rounded-xl${
                  isWide ? " sm:col-span-2 lg:col-span-2" : ""
                }`}
                style={{ aspectRatio: isWide ? "16/9" : "4/3" }}
              >
                <button
                  onClick={() => openLightbox(index)}
                  className="group relative block h-full w-full cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#F5B800] focus:ring-offset-2"
                  aria-label={`Ver imagen: ${item.label}`}
                >
                  <Image
                    src={item.src}
                    alt={item.alt}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes={
                      isWide
                        ? "(max-width: 640px) 100vw, (max-width: 1024px) 100vw, 66vw"
                        : "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    }
                  />

                  {/* Hover overlay */}
                  <div className="absolute inset-0 flex items-center justify-center bg-black/50 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    <span className="rounded-lg bg-black/30 px-4 py-2 text-sm font-semibold uppercase tracking-wider text-white backdrop-blur-sm">
                      {item.label}
                    </span>
                  </div>
                </button>
              </div>
            );
          })}
        </div>
      </div>

      {/* Lightbox */}
      {selectedIndex !== null && (
        <div
          className="fixed inset-0 z-[60] flex items-center justify-center bg-black/90"
          role="dialog"
          aria-modal="true"
          aria-label={`Imagen: ${galleryItems[selectedIndex].label}`}
          onClick={closeLightbox}
        >
          {/* Image container */}
          <div
            className="relative mx-4 max-h-[85vh] max-w-5xl w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative h-full w-full overflow-hidden rounded-xl">
              <Image
                src={galleryItems[selectedIndex].src}
                alt={galleryItems[selectedIndex].alt}
                width={galleryItems[selectedIndex].width}
                height={galleryItems[selectedIndex].height}
                className="h-auto max-h-[85vh] w-full object-contain"
                priority
              />
            </div>

            {/* Label */}
            <p className="mt-3 text-center text-sm font-semibold uppercase tracking-widest text-[#F5B800]">
              {galleryItems[selectedIndex].label}
            </p>
          </div>

          {/* Close button */}
          <button
            onClick={closeLightbox}
            className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur-sm transition-colors hover:bg-white/20 focus:outline-none focus:ring-2 focus:ring-white"
            aria-label="Cerrar imagen"
          >
            <X className="h-5 w-5" />
          </button>

          {/* Prev button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              goToPrev();
            }}
            className="absolute left-4 top-1/2 -translate-y-1/2 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur-sm transition-colors hover:bg-white/20 focus:outline-none focus:ring-2 focus:ring-white"
            aria-label="Imagen anterior"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>

          {/* Next button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              goToNext();
            }}
            className="absolute right-4 top-1/2 -translate-y-1/2 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur-sm transition-colors hover:bg-white/20 focus:outline-none focus:ring-2 focus:ring-white"
            aria-label="Siguiente imagen"
          >
            <ChevronRight className="h-5 w-5" />
          </button>

          {/* Counter */}
          <p className="absolute bottom-4 left-1/2 -translate-x-1/2 text-sm text-white/60">
            {selectedIndex + 1} / {galleryItems.length}
          </p>
        </div>
      )}
    </section>
  );
}
