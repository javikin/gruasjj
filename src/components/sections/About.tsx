import Image from "next/image";

const stats = [
  { value: "10+", label: "Años de Experiencia" },
  { value: "500+", label: "Proyectos Realizados" },
  { value: "24/7", label: "Disponibilidad" },
  { value: "100%", label: "Grúas Propias" },
];

export default function About() {
  return (
    <section
      id="nosotros"
      className="bg-[#1A1A1A] py-20 text-white md:py-28"
      aria-label="Sobre Nosotros"
    >
      <div className="mx-auto max-w-6xl px-4">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
          {/* Left column */}
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-[#F5B800]">
              Sobre Nosotros
            </p>

            <h2 className="mt-2 text-3xl font-bold leading-tight md:text-4xl">
              Experiencia y Compromiso en Cada Maniobra
            </h2>

            <div className="mt-6 space-y-4 leading-relaxed text-gray-300">
              <p>
                Somos una empresa veracruzana especializada en renta de grúas
                industriales y maniobras de izaje. Contamos con equipo National
                Crane de alto rendimiento y operadores certificados para
                garantizar la seguridad en cada proyecto.
              </p>
              <p>
                Atendemos a la industria petrolera, cementera, de construcción
                y comercial en todo el estado de Veracruz y zonas aledañas.
              </p>
            </div>

            {/* Equipment image */}
            <div className="relative mt-8 h-72 w-full overflow-hidden rounded-xl md:h-80">
              <Image
                src="/images/equipment/boom-truck-parked.jpg"
                alt="Grúa tipo boom truck de Grúas JJ estacionada"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>

          {/* Right column — stat cards */}
          <div
            className="grid grid-cols-2 gap-6"
            aria-label="Estadísticas de la empresa"
          >
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-xl border border-white/10 bg-white/5 p-6 text-center backdrop-blur"
              >
                <p
                  className="text-4xl font-bold text-[#F5B800]"
                  aria-label={stat.value}
                >
                  {stat.value}
                </p>
                <p className="mt-2 text-sm text-gray-400">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
