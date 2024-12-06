/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  images: {
    domains: ['images.unsplash.com'],
  },
  experimental: {
    serverActions: true,
  },
  webpack: (config) => {
    config.optimization.minimize = true;
    return config;
  },
}

module.exports = nextConfig
