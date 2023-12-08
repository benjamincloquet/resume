/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/resume' : '',
  images: {
    unoptimized: true
  }
}

module.exports = nextConfig
