import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    missingSuspenseWithCSRBailout: false,
  /* config options here */
  images: {
    domains: ['localhost'],
  },
};

export default nextConfig;
