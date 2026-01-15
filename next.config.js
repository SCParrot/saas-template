/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        port: '',
        pathname: '/**'
      },
      {
        protocol: 'https',
        hostname: 'plus.unsplash.com',
        port: '',
        pathname: '/**'
      },
      {
        protocol: 'https',
        hostname: 'pbs.twimg.com',
        port: '',
        pathname: '/**'
      },
      {
        protocol: 'https',
        hostname: 'assets.aceternity.com',
        port: '',
        pathname: '/**'
      },
      {
        protocol: 'https',
        hostname: 'ideogram.ai',
        port: '',
        pathname: '/**'
      },
      {
        protocol: 'https',
        hostname: "cdn.dribbble.com",
        port: '',
        pathname: '/**'
      },
      {
        protocol: 'https',
        hostname: "miro.medium.com",
        port: '',
        pathname: '/**'
      }
    ],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    domains: ['images.unsplash.com', 'plus.unsplash.com'],
  },
};

export default nextConfig;