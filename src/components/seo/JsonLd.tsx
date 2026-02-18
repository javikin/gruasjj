import { BUSINESS } from "@/lib/constants";

export default function JsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${BUSINESS.domain}/#business`,
    name: BUSINESS.name,
    description:
      "Renta de grúas industriales en Veracruz. Servicio de izaje, maniobras y transporte de carga pesada con operadores certificados. Disponibles 24 horas, 7 días a la semana.",
    url: BUSINESS.domain,
    telephone: [BUSINESS.phone.primaryLink, BUSINESS.phone.secondaryLink],
    email: BUSINESS.email,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Veracruz",
      addressRegion: "Veracruz",
      addressCountry: "MX",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 19.1738,
      longitude: -96.1342,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday",
        ],
        opens: "00:00",
        closes: "23:59",
      },
    ],
    sameAs: [BUSINESS.social.facebook, BUSINESS.social.instagram],
    priceRange: "$$",
    currenciesAccepted: "MXN",
    paymentAccepted: "Efectivo, Transferencia bancaria",
    areaServed: {
      "@type": "State",
      name: "Veracruz",
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
