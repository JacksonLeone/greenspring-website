/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true
  },
  // Only use GitHub Pages paths when explicitly deploying
  assetPrefix: process.env.DEPLOY_TARGET === 'github-pages' ? '/greenspring-website' : '',
  basePath: process.env.DEPLOY_TARGET === 'github-pages' ? '/greenspring-website' : ''
}

module.exports = nextConfig