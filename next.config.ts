import type { NextConfig } from "next";

/** English is the default: most decision-makers for these roles read English,
 *  and the Spanish routes stay one click away from every page. */
const nextConfig: NextConfig = {
  async redirects() {
    return [
      { source: "/", destination: "/en", permanent: false },
      { source: "/cv", destination: "/en/cv", permanent: false },
      { source: "/projects/trading-sim", destination: "/en/projects/trading-sim", permanent: false },
    ];
  },
};

export default nextConfig;
