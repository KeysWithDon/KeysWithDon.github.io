import type { MetadataRoute } from "next";

const baseUrl = "https://keyswithdon.github.io";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: `${baseUrl}/`, changeFrequency: "monthly", priority: 1 },
    { url: `${baseUrl}/blog`, changeFrequency: "monthly", priority: 0.9 },
    { url: `${baseUrl}/credentials`, changeFrequency: "yearly", priority: 0.8 },
    { url: `${baseUrl}/contact`, changeFrequency: "yearly", priority: 0.8 },
    { url: `${baseUrl}/consult`, changeFrequency: "yearly", priority: 0.9 },
  ];
}
