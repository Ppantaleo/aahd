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
  // Comentamos basePath y assetPrefix para dominio personalizado
  // basePath: '/aahd',
  // assetPrefix: '/aahd/',

  // Removemos la configuración i18n para export estático
  // i18n: {
  //   locales: ['es', 'en'],
  //   defaultLocale: 'es',
  //   localeDetection: false,
  // },
}

export default nextConfig