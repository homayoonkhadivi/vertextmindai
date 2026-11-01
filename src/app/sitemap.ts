import type { MetadataRoute } from "next";
import { site } from "@/config/site";
import { industries } from "@/data/industries";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return [
    { url: `${site.url}/`, lastModified: now, changeFrequency: "monthly", priority: 1 },
    ...industries.map((i) => ({
      url: `${site.url}/${i.slug}/`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
  ];
}
