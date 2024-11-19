import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      {
        source: '/api/gpt4all/:path*',
        destination: 'http://localhost:4891/:path*', // Proxy to GPT4All server
      },
    ];
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "cdn.mos.cms.futurecdn.net",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
