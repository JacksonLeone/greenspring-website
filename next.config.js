/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true
  },
  // Use GitHub Pages paths for production builds only (not local dev)
  assetPrefix: (process.env.NODE_ENV === 'production' && !process.env.NEXT_PUBLIC_LOCAL_DEV) ? '/greenspring-website' : '',
  basePath: (process.env.NODE_ENV === 'production' && !process.env.NEXT_PUBLIC_LOCAL_DEV) ? '/greenspring-website' : ''
}

module.exports = nextConfig