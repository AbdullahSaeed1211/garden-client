/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        hostname: 'images.unsplash.com',
      },
    ],
  },
  reactStrictMode: true,
};

module.exports = nextConfig; 