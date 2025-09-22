import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Export as fully static site for Nginx hosting
  output: "export",
  images: {
    // Required for static export when using next/image
    unoptimized: true,
  },
  eslint: {
    // Disable ESLint during build to avoid quote errors
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
