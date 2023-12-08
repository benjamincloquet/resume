/** @type {import('next').NextConfig} */
const nextConfig = {
  output: process.env.NODE_ENV === 'production' ? 'export' : 'standalone',
  basePath: process.env.NODE_ENV === 'production' ? '/resume' : '',
  //assetPrefix: process.env.NODE_ENV === "production" ? "/resume/" : undefined,
}

module.exports = nextConfig
