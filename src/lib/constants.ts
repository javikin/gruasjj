const WHATSAPP_NUMBER = "522299585946";
const WHATSAPP_MESSAGE = "Hola, me interesa cotizar un servicio de grúa.";

export const BUSINESS = {
  name: "Grúas JJ",
  tagline: "Renta de Grúas Industriales en Veracruz",
  phone: {
    primary: "229 958 5946",
    secondary: "229 476 6220",
    primaryLink: "tel:+522299585946",
    secondaryLink: "tel:+522294766220",
  },
  whatsapp: {
    number: WHATSAPP_NUMBER,
    message: WHATSAPP_MESSAGE,
    url: `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`,
  },
  email: "mgruasjj@gmail.com",
  social: {
    facebook: "https://www.facebook.com/GRUASJJ",
    instagram: "https://www.instagram.com/gruasjj/",
  },
  location: "Veracruz, Ver., México",
  domain: "https://gruasjj.com",
} as const;
