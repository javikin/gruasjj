import { ReactNode } from "react";

interface ServiceCardProps {
  icon: ReactNode;
  title: string;
  description: string;
}

export default function ServiceCard({ icon, title, description }: ServiceCardProps) {
  return (
    <article className="flex flex-col items-center rounded-xl border border-gray-100 bg-white p-6 text-center shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg">
      {/* Icon wrapper */}
      <div
        className="flex h-16 w-16 items-center justify-center rounded-full bg-[#F5B800]/10"
        aria-hidden="true"
      >
        <span className="text-[#F5B800]">{icon}</span>
      </div>

      {/* Title */}
      <h3 className="mt-4 text-lg font-semibold text-[#1A1A1A]">{title}</h3>

      {/* Description */}
      <p className="mt-2 text-sm leading-relaxed text-[#4A4A4A]">{description}</p>
    </article>
  );
}
