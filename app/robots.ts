import type { MetadataRoute } from "next"

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/", "/admin/", "/private/", "/dashboard/", "/checkout/"],
      },
    ],
    sitemap: [
      "https://paradisodellemadonie.it/sitemap.xml",
      "https://paradisodellemadonie.it/sitemap-images.xml",
    ],
    host: "https://paradisodellemadonie.it",
  }
}
