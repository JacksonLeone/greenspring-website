/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true
  },
  // Use GitHub Pages paths for production builds
  assetPrefix: process.env.NODE_ENV === 'production' ? '/greenspring-website' : '',
  basePath: process.env.NODE_ENV === 'production' ? '/greenspring-website' : ''
}

module.exports = nextConfig