/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },

  output: 'export',
  trailingSlash: true,
  basePath: '/aahd',
  assetPrefix: '/aahd/',

}

export default nextConfig
