import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Grúas JJ | Renta de Grúas Industriales en Veracruz",
  description:
    "Renta de grúas industriales en Veracruz con amplia experiencia en izaje, maniobras y transporte de carga pesada. Servicio 24/7 para toda la zona de Veracruz y alrededores.",
  keywords: [
    "renta de grúas Veracruz",
    "grúas industriales Veracruz",
    "servicio de grúa",
    "izaje industrial",
    "maniobras industriales Veracruz",
    "transporte de carga pesada",
    "grúa telescópica Veracruz",
    "renta de grúa Veracruz México",
    "grúas JJ",
  ],
  authors: [{ name: "Grúas JJ" }],
  creator: "Grúas JJ",
  publisher: "Grúas JJ",
  metadataBase: new URL("https://gruasjj.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "es_MX",
    url: "https://gruasjj.com",
    siteName: "Grúas JJ",
    title: "Grúas JJ | Renta de Grúas Industriales en Veracruz",
    description:
      "Renta de grúas industriales en Veracruz con amplia experiencia en izaje, maniobras y transporte de carga pesada. Servicio 24/7.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Grúas JJ | Renta de Grúas Industriales en Veracruz",
    description:
      "Renta de grúas industriales en Veracruz. Servicio 24/7, operadores certificados y flota moderna.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={inter.variable}>
      <body className="antialiased">{children}</body>
    </html>
  );
}
