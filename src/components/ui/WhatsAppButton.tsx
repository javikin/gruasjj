"use client";

import { MessageCircle } from "lucide-react";

const WHATSAPP_URL =
  "https://wa.me/522299585946?text=Hola%2C%20me%20interesa%20cotizar%20un%20servicio%20de%20gr%C3%BAa.";

export default function WhatsAppButton() {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contactar por WhatsApp"
      className="fixed bottom-6 right-6 z-50 group"
    >
      {/* Pulse ring */}
      <span
        className="animate-pulse-ring absolute inset-0 rounded-full bg-[#25D366]/40"
        aria-hidden="true"
      />

      {/* Button circle */}
      <span className="relative flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] shadow-lg transition-colors duration-200 group-hover:bg-[#20BA5C] md:h-16 md:w-16">
        <MessageCircle
          className="text-white"
          size={26}
          strokeWidth={2}
          aria-hidden="true"
        />
      </span>
    </a>
  );
}
