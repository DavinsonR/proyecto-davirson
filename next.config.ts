import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      { source: "/", destination: "/es", permanent: false },
      { source: "/cv", destination: "/es/cv", permanent: false },
    ];
  },
};

export default nextConfig;
