import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  compress: true,
  poweredByHeader: false,
  
  // Image optimization
  images: {
    formats: ['image/webp'],
  },
  
  // Production optimizations
  reactStrictMode: true,
  
  // Experimental features for better performance
  experimental: {
    optimizePackageImports: ['@/components'],
  },
};

export default nextConfig;
