/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: 'images.unsplash.com',
      },
    ],
  },
  reactStrictMode: true,
  experimental: {
    optimizeCss: true,
  },
};

module.exports = nextConfig; 