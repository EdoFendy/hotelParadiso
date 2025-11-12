/**
 * SEO UTILITY FUNCTIONS
 * Helper functions for generating dynamic SEO metadata, canonical URLs, and more
 */

import type { Metadata } from 'next'

const SITE_URL = 'https://paradisodellemadonie.it'
const SITE_NAME = 'Hotel Paradiso delle Madonie'
const DEFAULT_IMAGE = '/images/fronte.png'

/**
 * Generate canonical URL
 */
export function generateCanonicalUrl(path: string): string {
  const cleanPath = path.startsWith('/') ? path : `/${path}`
  return `${SITE_URL}${cleanPath}`
}

/**
 * Generate complete metadata for pages
 */
export interface PageMetadataConfig {
  title: string
  description: string
  keywords?: string
  path?: string
  image?: string
  type?: 'website' | 'article' | 'product'
  publishedTime?: string
  modifiedTime?: string
  author?: string
}

export function generatePageMetadata(config: PageMetadataConfig): Metadata {
  const {
    title,
    description,
    keywords,
    path = '/',
    image = DEFAULT_IMAGE,
    type = 'website',
    publishedTime,
    modifiedTime,
    author,
  } = config

  const canonicalUrl = generateCanonicalUrl(path)
  const fullTitle = `${title} | ${SITE_NAME}`

  return {
    title: fullTitle,
    description,
    keywords,
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title: fullTitle,
      description,
      url: canonicalUrl,
      siteName: SITE_NAME,
      type,
      locale: 'it_IT',
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
      ...(type === 'article' && publishedTime
        ? {
            publishedTime,
            modifiedTime: modifiedTime || publishedTime,
            authors: author ? [author] : undefined,
          }
        : {}),
    },
    twitter: {
      card: 'summary_large_image',
      title: fullTitle,
      description,
      images: [image],
    },
  }
}

/**
 * Generate breadcrumb structured data
 */
export interface BreadcrumbItem {
  name: string
  path: string
}

export function generateBreadcrumbSchema(items: BreadcrumbItem[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: SITE_URL,
      },
      ...items.map((item, index) => ({
        '@type': 'ListItem',
        position: index + 2,
        name: item.name,
        item: generateCanonicalUrl(item.path),
      })),
    ],
  }
}

/**
 * Generate Article Schema
 */
export interface ArticleSchemaConfig {
  title: string
  description: string
  image: string
  datePublished: string
  dateModified?: string
  author: string
  path: string
}

export function generateArticleSchema(config: ArticleSchemaConfig) {
  const { title, description, image, datePublished, dateModified, author, path } = config

  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: title,
    description,
    image: `${SITE_URL}${image}`,
    datePublished,
    dateModified: dateModified || datePublished,
    author: {
      '@type': 'Person',
      name: author,
    },
    publisher: {
      '@type': 'Organization',
      name: SITE_NAME,
      logo: {
        '@type': 'ImageObject',
        url: `${SITE_URL}/placeholder-logo.png`,
      },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': generateCanonicalUrl(path),
    },
  }
}

/**
 * Generate Review Schema
 */
export interface ReviewSchemaConfig {
  author: string
  rating: number
  reviewBody: string
  datePublished: string
}

export function generateReviewSchema(config: ReviewSchemaConfig) {
  const { author, rating, reviewBody, datePublished } = config

  return {
    '@context': 'https://schema.org',
    '@type': 'Review',
    itemReviewed: {
      '@type': 'Hotel',
      name: SITE_NAME,
      image: `${SITE_URL}${DEFAULT_IMAGE}`,
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'Via Dante Alighieri, 82',
        addressLocality: 'Castelbuono',
        addressRegion: 'PA',
        postalCode: '90013',
        addressCountry: 'IT',
      },
    },
    author: {
      '@type': 'Person',
      name: author,
    },
    reviewRating: {
      '@type': 'Rating',
      ratingValue: rating.toString(),
      bestRating: '5',
      worstRating: '1',
    },
    reviewBody,
    datePublished,
  }
}

/**
 * Generate Event Schema
 */
export interface EventSchemaConfig {
  name: string
  description: string
  startDate: string
  endDate: string
  location: string
  image?: string
  url?: string
  organizer?: string
}

export function generateEventSchema(config: EventSchemaConfig) {
  const { name, description, startDate, endDate, location, image, url, organizer } = config

  return {
    '@context': 'https://schema.org',
    '@type': 'Event',
    name,
    description,
    startDate,
    endDate,
    eventStatus: 'https://schema.org/EventScheduled',
    eventAttendanceMode: 'https://schema.org/OfflineEventAttendanceMode',
    location: {
      '@type': 'Place',
      name: location,
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Castelbuono',
        addressRegion: 'PA',
        addressCountry: 'IT',
      },
    },
    image: image ? `${SITE_URL}${image}` : `${SITE_URL}${DEFAULT_IMAGE}`,
    ...(url ? { url: generateCanonicalUrl(url) } : {}),
    ...(organizer
      ? {
          organizer: {
            '@type': 'Organization',
            name: organizer,
          },
        }
      : {}),
  }
}

/**
 * Generate Product Schema (per offerte speciali)
 */
export interface ProductSchemaConfig {
  name: string
  description: string
  image: string
  price: string
  currency?: string
  availability?: 'InStock' | 'OutOfStock' | 'PreOrder'
  url: string
}

export function generateProductSchema(config: ProductSchemaConfig) {
  const {
    name,
    description,
    image,
    price,
    currency = 'EUR',
    availability = 'InStock',
    url,
  } = config

  return {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name,
    description,
    image: `${SITE_URL}${image}`,
    brand: {
      '@type': 'Brand',
      name: SITE_NAME,
    },
    offers: {
      '@type': 'Offer',
      url: generateCanonicalUrl(url),
      priceCurrency: currency,
      price,
      availability: `https://schema.org/${availability}`,
      seller: {
        '@type': 'Organization',
        name: SITE_NAME,
      },
    },
  }
}

/**
 * Generate Video Schema
 */
export interface VideoSchemaConfig {
  name: string
  description: string
  thumbnailUrl: string
  uploadDate: string
  duration?: string
  contentUrl?: string
  embedUrl?: string
}

export function generateVideoSchema(config: VideoSchemaConfig) {
  const { name, description, thumbnailUrl, uploadDate, duration, contentUrl, embedUrl } = config

  return {
    '@context': 'https://schema.org',
    '@type': 'VideoObject',
    name,
    description,
    thumbnailUrl: `${SITE_URL}${thumbnailUrl}`,
    uploadDate,
    ...(duration ? { duration } : {}),
    ...(contentUrl ? { contentUrl } : {}),
    ...(embedUrl ? { embedUrl } : {}),
  }
}

/**
 * Generate TouristAttraction Schema
 */
export interface TouristAttractionSchemaConfig {
  name: string
  description: string
  image: string
  address: {
    locality: string
    region: string
    country?: string
  }
  latitude: number
  longitude: number
  isAccessibleForFree?: boolean
  url?: string
}

export function generateTouristAttractionSchema(config: TouristAttractionSchemaConfig) {
  const {
    name,
    description,
    image,
    address,
    latitude,
    longitude,
    isAccessibleForFree = true,
    url,
  } = config

  return {
    '@context': 'https://schema.org',
    '@type': 'TouristAttraction',
    name,
    description,
    image: `${SITE_URL}${image}`,
    address: {
      '@type': 'PostalAddress',
      addressLocality: address.locality,
      addressRegion: address.region,
      addressCountry: address.country || 'IT',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude,
      longitude,
    },
    isAccessibleForFree,
    publicAccess: true,
    ...(url ? { url: generateCanonicalUrl(url) } : {}),
  }
}

/**
 * Generate How-To Schema (per guide/tutorial)
 */
export interface HowToStepConfig {
  name: string
  text: string
  image?: string
}

export interface HowToSchemaConfig {
  name: string
  description: string
  image: string
  totalTime?: string
  steps: HowToStepConfig[]
}

export function generateHowToSchema(config: HowToSchemaConfig) {
  const { name, description, image, totalTime, steps } = config

  return {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name,
    description,
    image: `${SITE_URL}${image}`,
    ...(totalTime ? { totalTime } : {}),
    step: steps.map((step, index) => ({
      '@type': 'HowToStep',
      position: index + 1,
      name: step.name,
      text: step.text,
      ...(step.image ? { image: `${SITE_URL}${step.image}` } : {}),
    })),
  }
}

/**
 * Sanitize e optimize text for SEO
 */
export function sanitizeForSEO(text: string, maxLength?: number): string {
  let cleaned = text
    .replace(/<[^>]*>/g, '') // Remove HTML tags
    .replace(/\s+/g, ' ') // Replace multiple spaces
    .trim()

  if (maxLength && cleaned.length > maxLength) {
    cleaned = cleaned.substring(0, maxLength - 3) + '...'
  }

  return cleaned
}

/**
 * Generate slug from title
 */
export function generateSlug(title: string): string {
  return title
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '') // Remove accents
    .replace(/[^a-z0-9]+/g, '-') // Replace non-alphanumeric with hyphens
    .replace(/^-+|-+$/g, '') // Remove leading/trailing hyphens
}

/**
 * Calculate reading time
 */
export function calculateReadingTime(text: string): string {
  const wordsPerMinute = 200
  const words = text.trim().split(/\s+/).length
  const minutes = Math.ceil(words / wordsPerMinute)
  return `${minutes} min di lettura`
}

/**
 * Generate alt text for images
 */
export function generateAltText(filename: string, context?: string): string {
  const name = filename.replace(/\.[^/.]+$/, '').replace(/[-_]/g, ' ')
  return context ? `${context} - ${name}` : name
}

/**
 * Check if URL is external
 */
export function isExternalUrl(url: string): boolean {
  return url.startsWith('http://') || url.startsWith('https://')
}

/**
 * Add tracking parameters to URL
 */
export function addTrackingParams(url: string, params: Record<string, string>): string {
  const urlObj = new URL(url, SITE_URL)
  Object.entries(params).forEach(([key, value]) => {
    urlObj.searchParams.set(key, value)
  })
  return urlObj.toString()
}

export { SITE_URL, SITE_NAME, DEFAULT_IMAGE }
