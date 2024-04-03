/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [
      {
        protocol: 'http',
        hostname: '**'
      }
    ]
  },
  logging: {
    fetches: {
      fullUrl: true
    }
  }
}

module.exports = nextConfig
