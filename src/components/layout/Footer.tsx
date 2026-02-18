import { Facebook, Instagram, MessageCircle } from "lucide-react";

const SOCIAL_LINKS = [
  {
    label: "Facebook de Grúas JJ",
    href: "https://www.facebook.com/GRUASJJ",
    icon: Facebook,
  },
  {
    label: "Instagram de Grúas JJ",
    href: "https://www.instagram.com/gruasjj/",
    icon: Instagram,
  },
  {
    label: "WhatsApp de Grúas JJ",
    href: "https://wa.me/522299585946?text=Hola%2C%20me%20interesa%20cotizar%20un%20servicio%20de%20gr%C3%BAa.",
    icon: MessageCircle,
  },
];

export default function Footer() {
  return (
    <footer className="bg-[#1A1A1A] text-white py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center">
          {/* Logo */}
          <p className="text-2xl font-black tracking-widest text-[#F5B800]">
            GRÚAS JJ
          </p>

          {/* Tagline */}
          <p className="mt-2 text-sm text-gray-400">
            Renta de Grúas Industriales en Veracruz
          </p>

          {/* Social icons */}
          <div className="mt-6 flex items-center gap-5" aria-label="Redes sociales">
            {SOCIAL_LINKS.map(({ label, href, icon: Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-700 text-gray-400 transition-colors duration-200 hover:border-[#F5B800] hover:text-[#F5B800]"
              >
                <Icon size={18} />
              </a>
            ))}
          </div>

          {/* Divider */}
          <div className="mt-8 h-px w-full bg-gray-800" role="separator" />

          {/* Copyright */}
          <p className="mt-6 text-xs text-gray-500">
            &copy; 2025 Gr&uacute;as JJ. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
