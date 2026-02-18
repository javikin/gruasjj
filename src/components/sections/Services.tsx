import {
  Factory,
  Hammer,
  Plane,
  Package,
  Signpost,
  Building2,
  Truck,
  Droplets,
} from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import ServiceCard from "@/components/ui/ServiceCard";

const services = [
  {
    icon: <Factory className="h-8 w-8" aria-hidden="true" />,
    title: "Maniobras Industriales",
    description:
      "Izaje y montaje en plantas industriales, cementeras y fábricas con equipo especializado.",
  },
  {
    icon: <Hammer className="h-8 w-8" aria-hidden="true" />,
    title: "Montaje de Estructuras",
    description:
      "Montaje de estructura metálica y elementos prefabricados para construcción.",
  },
  {
    icon: <Plane className="h-8 w-8" aria-hidden="true" />,
    title: "Izaje de Aeronaves",
    description:
      "Maniobras especializadas de izaje de aviones en hangares y aeropuertos.",
  },
  {
    icon: <Package className="h-8 w-8" aria-hidden="true" />,
    title: "Carga y Descarga",
    description:
      "Carga y descarga de contenedores, maquinaria y equipo pesado.",
  },
  {
    icon: <Signpost className="h-8 w-8" aria-hidden="true" />,
    title: "Instalación de Anuncios",
    description:
      "Montaje e instalación de señalética y anuncios comerciales de gran formato.",
  },
  {
    icon: <Building2 className="h-8 w-8" aria-hidden="true" />,
    title: "Construcción",
    description:
      "Apoyo con grúa para proyectos de construcción y obra civil.",
  },
  {
    icon: <Truck className="h-8 w-8" aria-hidden="true" />,
    title: "Transporte Especializado",
    description:
      "Transporte de maquinaria y equipo pesado en plataforma y cama baja.",
  },
  {
    icon: <Droplets className="h-8 w-8" aria-hidden="true" />,
    title: "Sector Petrolero",
    description:
      "Servicio de grúa en instalaciones petroleras, refinerías y plantas de gas.",
  },
];

export default function Services() {
  return (
    <section
      id="servicios"
      className="bg-white py-20 md:py-28"
      aria-label="Nuestros Servicios"
    >
      <div className="mx-auto max-w-6xl px-4">
        <SectionHeading
          title="Nuestros Servicios"
          subtitle="Soluciones integrales de izaje y maniobras para la industria"
        />

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => (
            <ServiceCard
              key={service.title}
              icon={service.icon}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
