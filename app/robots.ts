import type { MetadataRoute } from "next"

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: [
          "/api/",
          "/admin/",
          "/private/",
          "/_next/",
          "/dashboard/",
          "/checkout/",
          "/*?*utm_source=",  // Evita duplicati con parametri tracking
          "/*?*sessionid=",
          "/search?",  // Se hai ricerca interna
        ],
        crawlDelay: 0,
      },
      {
        userAgent: "Googlebot",
        allow: "/",
        disallow: ["/api/", "/admin/", "/private/", "/checkout/"],
        crawlDelay: 0,
      },
      {
        userAgent: "Googlebot-Image",
        allow: "/",
        disallow: ["/admin/", "/private/"],
      },
      {
        userAgent: "Bingbot",
        allow: "/",
        disallow: ["/api/", "/admin/", "/private/", "/checkout/"],
        crawlDelay: 0,
      },
      // Blocca bad bots
      {
        userAgent: [
          "GPTBot",
          "ChatGPT-User",
          "CCBot",
          "anthropic-ai",
          "Claude-Web",
          "Bytespider", // TikTok
          "PetalBot", // Huawei
        ],
        disallow: "/",
      },
    ],
    sitemap: "https://paradisodellemadonie.it/sitemap.xml",
    host: "https://paradisodellemadonie.it",
  }
}
