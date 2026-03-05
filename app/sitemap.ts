import type { MetadataRoute } from "next"

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://paradisodellemadonie.it"
  const currentDate = new Date()

  return [
    {
      url: baseUrl,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: `${baseUrl}/hotel-castelbuono`,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 0.95,
    },
    {
      url: `${baseUrl}/alloggio-castelbuono`,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/camere-castelbuono`,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/hotel-cefalu`,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 0.88,
    },
    {
      url: `${baseUrl}/esperienze`,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.92,
    },
    {
      url: `${baseUrl}/esperienze/castelbuono`,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.88,
    },
    {
      url: `${baseUrl}/esperienze/parco-madonie`,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.87,
    },
    {
      url: `${baseUrl}/esperienze/cefalu-costa`,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.86,
    },
    {
      url: `${baseUrl}/esperienze/enogastronomia`,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.85,
    },
    {
      url: `${baseUrl}/esperienze/quando-venire`,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.84,
    },
    {
      url: `${baseUrl}/esperienze/famiglie-bambini`,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.83,
    },
    {
      url: `${baseUrl}/esperienze/gite-giornaliere`,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.82,
    },
  ]
}
