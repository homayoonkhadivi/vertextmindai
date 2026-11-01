// Single source of truth for brand, contact and SEO details.
// Optional integrations are driven by NEXT_PUBLIC_* env vars (inlined at build
// time) so they can be switched on without code changes. See .env.example.

export const site = {
  name: "VertexMind AI",
  url: "https://vertexmindai.com.au",
  title: "VertexMind AI — AI Consulting Australia",
  description:
    "Senior AI consulting across healthcare, energy, mining, sports analytics, and digital transformation. Real deployments, measurable outcomes.",
  locale: "en_AU",
  founder: "Homayoon Khadivi",
  email: "khadivi.homi@vertexmindai.com.au",
  country: "AU",
  social: {
    linkedin: "https://www.linkedin.com/in/homayoon-khadivi",
    github: "https://github.com/homayoonkhadivi",
    kaggle: "https://www.kaggle.com/homayoonkhadivi",
  },
  formspreeId: "mkjolvjn",
  // e.g. https://cal.com/your-name/30min or https://calendly.com/your-name/30min
  bookingUrl: process.env.NEXT_PUBLIC_BOOKING_URL || "",
  // Plausible domain, e.g. vertexmindai.com.au
  analyticsDomain: process.env.NEXT_PUBLIC_PLAUSIBLE_DOMAIN || "",
} as const;

export const mailto = `mailto:${site.email}`;
