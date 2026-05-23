/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  async redirects() {
    return [
      // Consolidate duplicate homepage URL
      { source: '/home', destination: '/', permanent: true },
      { source: '/nl/home', destination: '/nl', permanent: true },
      { source: '/index', destination: '/', permanent: true },
      // EN is the default locale — collapse /en/* into / to avoid duplicate content
      { source: '/en', destination: '/', permanent: true },
      { source: '/en/:path*', destination: '/:path*', permanent: true },
    ];
  },
};

module.exports = nextConfig;
