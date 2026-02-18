import { Phone, MessageCircle, Mail, MapPin } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";

const WHATSAPP_URL =
  "https://wa.me/522299585946?text=Hola%2C%20me%20interesa%20cotizar%20un%20servicio%20de%20gr%C3%BAa.";

interface ContactCardProps {
  icon: React.ReactNode;
  title: string;
  children: React.ReactNode;
}

function ContactCard({ icon, title, children }: ContactCardProps) {
  return (
    <div className="flex items-start gap-4">
      {/* Icon circle */}
      <div
        className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#F5B800]/10"
        aria-hidden="true"
      >
        <span className="text-[#F5B800]">{icon}</span>
      </div>

      {/* Content */}
      <div>
        <p className="font-semibold text-[#1A1A1A]">{title}</p>
        <div className="mt-1 space-y-1">{children}</div>
      </div>
    </div>
  );
}

export default function Contact() {
  return (
    <section
      id="contacto"
      className="bg-white py-20 md:py-28"
      aria-label="Contacto"
    >
      <div className="mx-auto max-w-5xl px-4">
        <SectionHeading
          title="Contáctanos"
          subtitle="Estamos disponibles las 24 horas para cotizaciones y emergencias"
        />

        <div className="mt-12 grid grid-cols-1 gap-12 lg:grid-cols-2">
          {/* Left — contact info */}
          <div className="space-y-6">
            <ContactCard
              icon={<Phone className="h-5 w-5" />}
              title="Teléfono"
            >
              <a
                href="tel:+522299585946"
                className="block text-[#4A4A4A] transition-colors hover:text-[#F5B800]"
              >
                229 958 5946
              </a>
              <a
                href="tel:+522294766220"
                className="block text-[#4A4A4A] transition-colors hover:text-[#F5B800]"
              >
                229 476 6220
              </a>
            </ContactCard>

            <ContactCard
              icon={<MessageCircle className="h-5 w-5" />}
              title="WhatsApp"
            >
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="block text-[#4A4A4A] transition-colors hover:text-[#F5B800]"
                aria-label="Abrir chat de WhatsApp con Grúas JJ"
              >
                229 958 5946
              </a>
            </ContactCard>

            <ContactCard
              icon={<Mail className="h-5 w-5" />}
              title="Correo Electrónico"
            >
              <a
                href="mailto:mgruasjj@gmail.com"
                className="block text-[#4A4A4A] transition-colors hover:text-[#F5B800]"
              >
                mgruasjj@gmail.com
              </a>
            </ContactCard>

            <ContactCard
              icon={<MapPin className="h-5 w-5" />}
              title="Ubicación"
            >
              <p className="text-[#4A4A4A]">Veracruz, Ver., México</p>
            </ContactCard>
          </div>

          {/* Right — WhatsApp CTA card */}
          <div className="flex h-full flex-col items-center justify-center rounded-2xl bg-[#F5B800] p-8 text-center md:p-12">
            {/* WhatsApp icon */}
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#1A1A1A]/10">
              <MessageCircle
                className="h-8 w-8 text-[#1A1A1A]"
                aria-hidden="true"
              />
            </div>

            <h3 className="mt-6 text-2xl font-bold text-[#1A1A1A] md:text-3xl">
              ¿Necesitas una grúa?
            </h3>

            <p className="mt-4 text-[#1A1A1A]/70">
              Envíanos un mensaje por WhatsApp y te respondemos en minutos
            </p>

            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-block rounded-lg bg-[#1A1A1A] px-8 py-4 font-semibold text-white transition-colors hover:bg-[#2D2D2D] focus:outline-none focus:ring-2 focus:ring-[#1A1A1A] focus:ring-offset-2 focus:ring-offset-[#F5B800]"
              aria-label="Abrir WhatsApp para cotizar servicio de grúa"
            >
              Abrir WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
