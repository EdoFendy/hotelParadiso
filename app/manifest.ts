import type { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Hotel Paradiso delle Madonie - Castelbuono',
    short_name: 'Paradiso Madonie',
    description: 'Hotel 3 stelle a Castelbuono nel Parco delle Madonie. A 23km da Cefalù, tra mare e montagna.',
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#1e1b4b',
    orientation: 'portrait-primary',
    scope: '/',
    lang: 'it-IT',
    dir: 'ltr',
    categories: ['travel', 'hotel', 'tourism', 'hospitality'],
    icons: [
      {
        src: '/icon/web-app-manifest-192x192.png',
        sizes: '192x192',
        type: 'image/png',
        purpose: 'maskable',
      },
      {
        src: '/icon/web-app-manifest-512x512.png',
        sizes: '512x512',
        type: 'image/png',
        purpose: 'maskable',
      },
      {
        src: '/icon/apple-touch-icon.png',
        sizes: '180x180',
        type: 'image/png',
      },
    ],
    screenshots: [
      {
        src: '/images/fronte.png',
        sizes: '1200x630',
        type: 'image/png',
        form_factor: 'wide',
        label: 'Facciata Hotel Paradiso delle Madonie',
      },
      {
        src: '/images/reception.png',
        sizes: '1200x630',
        type: 'image/png',
        form_factor: 'wide',
        label: 'Reception accogliente',
      },
    ],
    shortcuts: [
      {
        name: 'Prenota ora',
        short_name: 'Prenota',
        description: 'Prenota la tua camera',
        url: '/#prenota',
        icons: [{ src: '/icon/web-app-manifest-192x192.png', sizes: '192x192' }],
      },
      {
        name: 'Contattaci',
        short_name: 'Contatti',
        description: 'Contatta l\'hotel',
        url: '/#contatti',
        icons: [{ src: '/icon/web-app-manifest-192x192.png', sizes: '192x192' }],
      },
      {
        name: 'Camere',
        short_name: 'Camere',
        description: 'Scopri le nostre camere',
        url: '/#camere',
        icons: [{ src: '/icon/web-app-manifest-192x192.png', sizes: '192x192' }],
      },
    ],
    related_applications: [],
    prefer_related_applications: false,
  }
}
