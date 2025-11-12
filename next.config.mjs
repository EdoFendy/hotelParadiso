/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },

  // Image Optimization per SEO e Performance
  images: {
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 31536000, // 1 anno
    dangerouslyAllowSVG: true,
    contentDispositionType: 'attachment',
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },

  // Compression
  compress: true,

  // Powered by header removal (security + SEO)
  poweredByHeader: false,

  // Trailing slash per SEO consistency
  trailingSlash: false,

  // Strict mode
  reactStrictMode: true,

  // SWC Minification
  swcMinify: true,

  // Compiler optimizations
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },

  // HTTP Headers per SEO, Security e Performance
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          // Security Headers
          {
            key: 'X-DNS-Prefetch-Control',
            value: 'on',
          },
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=63072000; includeSubDomains; preload',
          },
          {
            key: 'X-Frame-Options',
            value: 'SAMEORIGIN',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block',
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin',
          },
          {
            key: 'Permissions-Policy',
            value: 'camera=(), microphone=(), geolocation=(self), interest-cohort=()',
          },
          // Performance Headers
          {
            key: 'X-UA-Compatible',
            value: 'IE=edge',
          },
        ],
      },
      // Cache Headers per Static Assets
      {
        source: '/images/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      {
        source: '/_next/static/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      // Preload fonts
      {
        source: '/fonts/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
    ]
  },

  // Redirects per SEO (trailing slash, www, etc)
  async redirects() {
    return [
      // Redirect www to non-www
      {
        source: '/:path*',
        has: [
          {
            type: 'host',
            value: 'www.paradisodellemadonie.it',
          },
        ],
        destination: 'https://paradisodellemadonie.it/:path*',
        permanent: true,
      },
      // Old URLs redirects (se necessario)
      {
        source: '/hotel',
        destination: '/',
        permanent: true,
      },
      {
        source: '/home',
        destination: '/',
        permanent: true,
      },
      // Legal pages redirects
      {
        source: '/terms',
        destination: '/termini',
        permanent: true,
      },
    ]
  },

  // Rewrites per API proxy (se necessario)
  async rewrites() {
    return [
      // Google Tag Manager proxy per privacy
      {
        source: '/gtm.js',
        destination: 'https://www.googletagmanager.com/gtag/js',
      },
    ]
  },

  // Webpack custom configuration
  webpack: (config, { isServer }) => {
    // Ottimizzazioni custom webpack
    if (!isServer) {
      config.resolve.fallback = {
        ...config.resolve.fallback,
        fs: false,
        net: false,
        tls: false,
      }
    }

    return config
  },

  // Experimental features per performance
  experimental: {
    optimizePackageImports: ['lucide-react', '@radix-ui/react-icons'],

  },

  // Output mode (se necessiti di static export)
  // output: 'export', // Decommenta per static export
}

export default nextConfig
