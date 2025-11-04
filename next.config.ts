/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  images: {
    domains: ['images.unsplash.com'],
  },

  typescript: {
    ignoreBuildErrors: true,
  },

  eslint: {
    // Ignore ESLint errors on Vercel build
    ignoreDuringBuilds: true,
  },
};

module.exports = nextConfig;

