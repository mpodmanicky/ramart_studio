import { withPayload } from "@payloadcms/next/withPayload";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "localhost",
      },
      {
        protocol: "https",
        hostname: "**",
      },
    ],
  },
  async redirects() {
    return [
      {
        source: '/o-nas',
        destination: '/atelier',
        permanent: true,
      },
      {
        source: '/projekty',
        destination: '/portfolio',
        permanent: true,
      },
    ];
  },
};

export default withPayload(nextConfig);
