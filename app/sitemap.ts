import type { MetadataRoute } from "next"

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://paradisodellemadonie.it"
  const currentDate = new Date()

  return [
    // HOMEPAGE - Massima priorità
    {
      url: baseUrl,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 1.0,
    },

    // PAGINE PRINCIPALI HOTEL - Alta priorità
    {
      url: `${baseUrl}/camere`,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/prenota`,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/offerte-speciali`,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 0.85,
    },

    // SERVIZI HOTEL
    {
      url: `${baseUrl}/servizi`,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/servizi/ristorante`,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.75,
    },
    {
      url: `${baseUrl}/servizi/transfer-aeroporto-palermo`,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.75,
    },
    {
      url: `${baseUrl}/servizi/escursioni-guidate-madonie`,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.75,
    },

    // OFFERTE SPECIALI
    {
      url: `${baseUrl}/offerte-speciali/weekend-romantico-madonie`,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/offerte-speciali/famiglia-parco-madonie`,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/offerte-speciali/ypsigrock-festival-2025`,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/offerte-speciali/settimana-bianca-piano-battaglia`,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.75,
    },

    // CASTELBUONO - Pillar page
    {
      url: `${baseUrl}/castelbuono`,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/castelbuono/cosa-vedere`,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.85,
    },
    {
      url: `${baseUrl}/castelbuono/castello-ventimiglia`,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.85,
    },
    {
      url: `${baseUrl}/castelbuono/cappella-serpotta`,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.75,
    },
    {
      url: `${baseUrl}/castelbuono/dove-mangiare`,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/castelbuono/come-arrivare`,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.8,
    },

    // PARCO DELLE MADONIE - Pillar page
    {
      url: `${baseUrl}/parco-delle-madonie`,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/parco-delle-madonie/trekking-pizzo-carbonara`,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/parco-delle-madonie/agrifogli-giganti`,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.75,
    },
    {
      url: `${baseUrl}/parco-delle-madonie/monte-mufara`,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/parco-delle-madonie/bosco-pomieri`,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/parco-delle-madonie/gole-di-tiberio`,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.85,
    },
    {
      url: `${baseUrl}/parco-delle-madonie/mountain-bike`,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.75,
    },
    {
      url: `${baseUrl}/parco-delle-madonie/piano-battaglia-sci`,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.8,
    },

    // BORGHI SICILIANI - Pillar page
    {
      url: `${baseUrl}/borghi-siciliani`,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.85,
    },
    {
      url: `${baseUrl}/borghi-siciliani/geraci-siculo`,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/borghi-siciliani/gangi-borgo-dei-borghi`,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/borghi-siciliani/petralia-soprana`,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/borghi-siciliani/petralia-sottana`,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.75,
    },
    {
      url: `${baseUrl}/borghi-siciliani/isnello-parco-astronomico`,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.75,
    },
    {
      url: `${baseUrl}/borghi-siciliani/pollina`,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.75,
    },
    {
      url: `${baseUrl}/borghi-siciliani/cefalu-duomo-unesco`,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.85,
    },

    // EVENTI - Alta priorità stagionale
    {
      url: `${baseUrl}/eventi-castelbuono`,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 0.85,
    },
    {
      url: `${baseUrl}/eventi-castelbuono/ypsigrock-festival`,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/eventi-castelbuono/divino-festival`,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 0.85,
    },
    {
      url: `${baseUrl}/eventi-castelbuono/funghi-fest`,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 0.85,
    },
    {
      url: `${baseUrl}/eventi-castelbuono/dolcemente-castelbuono`,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.75,
    },
    {
      url: `${baseUrl}/eventi-castelbuono/sant-anna-festa`,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.7,
    },

    // ESPERIENZE ENOGASTRONOMICHE - Pillar page
    {
      url: `${baseUrl}/esperienze-enogastronomiche`,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.85,
    },
    {
      url: `${baseUrl}/esperienze-enogastronomiche/manna-castelbuono`,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.85,
    },
    {
      url: `${baseUrl}/esperienze-enogastronomiche/pasticceria-fiasconaro`,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.85,
    },
    {
      url: `${baseUrl}/esperienze-enogastronomiche/funghi-madonie`,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.75,
    },
    {
      url: `${baseUrl}/esperienze-enogastronomiche/formaggi-salumi-madoniti`,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.75,
    },
    {
      url: `${baseUrl}/esperienze-enogastronomiche/olio-evo-madonie`,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/esperienze-enogastronomiche/tartufo-madonie`,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.7,
    },

    // GUIDE & ITINERARI
    {
      url: `${baseUrl}/itinerari/weekend-3-giorni-madonie`,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/itinerari/settimana-madonie-cefalu`,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/itinerari/borghi-madonie-5-giorni`,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.75,
    },
    {
      url: `${baseUrl}/itinerari/castelbuono-con-bambini`,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.75,
    },

    // BLOG (se implementato)
    {
      url: `${baseUrl}/blog`,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 0.7,
    },

    // PAGINE LEGALI
    {
      url: `${baseUrl}/privacy`,
      lastModified: currentDate,
      changeFrequency: "yearly",
      priority: 0.5,
    },
    {
      url: `${baseUrl}/cookie-policy`,
      lastModified: currentDate,
      changeFrequency: "yearly",
      priority: 0.5,
    },
    {
      url: `${baseUrl}/termini`,
      lastModified: currentDate,
      changeFrequency: "yearly",
      priority: 0.5,
    },
    {
      url: `${baseUrl}/terms`,
      lastModified: currentDate,
      changeFrequency: "yearly",
      priority: 0.5,
    },

    // CONTATTI & INFO
    {
      url: `${baseUrl}/contatti`,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/come-raggiungerci`,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.75,
    },
    {
      url: `${baseUrl}/gallery`,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 0.6,
    },
    {
      url: `${baseUrl}/recensioni`,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 0.7,
    },

    // LINGUE ALTERNATIVE
    {
      url: `${baseUrl}/en`,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/de`,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/fr`,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.7,
    },
  ]
}
