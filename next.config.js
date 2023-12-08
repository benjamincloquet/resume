/** @type {import('next').NextConfig} */
const nextConfig = {
  output: process.env.NODE_ENV === 'production' ? 'export' : 'standalone',
  assetPrefix: process.env.NODE_ENV === "production" ? "/resume/" : undefined,
}

module.exports = nextConfig
