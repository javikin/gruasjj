interface SectionHeadingProps {
  title: string;
  subtitle?: string;
}

export default function SectionHeading({ title, subtitle }: SectionHeadingProps) {
  return (
    <div className="text-center">
      <h2 className="text-3xl font-bold text-[#1A1A1A] md:text-4xl">{title}</h2>

      {/* Yellow accent bar */}
      <div className="mx-auto mt-3 h-1 w-16 rounded-full bg-[#F5B800]" aria-hidden="true" />

      {subtitle && (
        <p className="mx-auto mt-4 max-w-2xl text-lg text-[#4A4A4A]">
          {subtitle}
        </p>
      )}
    </div>
  );
}
