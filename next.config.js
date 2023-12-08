/** @type {import('next').NextConfig} */
const nextConfig = {
  // output: process.env.NODE_ENV === 'production' ? 'export' : 'standalone',
  // basePath: process.env.NODE_ENV === 'production' ? '/resume' : '',
  output: 'export',
  images: {
    unoptimized: true
  }
}

module.exports = nextConfig
