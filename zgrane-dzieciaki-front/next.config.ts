import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      {
        source: '/pages',
        destination: '/',
      },
    ]
  },
  images: {
    remotePatterns: [
      {
        hostname: 'cdn.pixabay.com',
      },
    ],
  },
};

export default nextConfig;
