import { site } from "@/config/site";
import { industries } from "@/data/industries";

// schema.org structured data so search engines understand the business.
export default function JsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "ProfessionalService",
        "@id": `${site.url}/#business`,
        name: site.name,
        url: site.url,
        email: site.email,
        description: site.description,
        image: `${site.url}/og.png`,
        areaServed: { "@type": "Country", name: "Australia" },
        address: { "@type": "PostalAddress", addressCountry: site.country },
        founder: { "@id": `${site.url}/#founder` },
        knowsAbout: [
          "Artificial Intelligence",
          "Machine Learning",
          "Large Language Models",
          "Retrieval-Augmented Generation",
          "Computer Vision",
          "MLOps",
        ],
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "AI consulting by industry",
          itemListElement: industries.map((i) => ({
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: `AI for ${i.name}`,
              url: `${site.url}/${i.slug}/`,
            },
          })),
        },
      },
      {
        "@type": "Person",
        "@id": `${site.url}/#founder`,
        name: site.founder,
        jobTitle: "Senior AI Engineer",
        worksFor: { "@id": `${site.url}/#business` },
        sameAs: Object.values(site.social),
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      // JSON.stringify output is static and contains no user input.
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }}
    />
  );
}
