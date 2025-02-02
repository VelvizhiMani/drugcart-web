import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    domains: ['localhost'],
  },
  ExperimentalConfig: {
    missingSuspenseWithCSRBailout: false,
  },
};

export default nextConfig;
