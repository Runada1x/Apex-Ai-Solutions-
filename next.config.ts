import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Export as fully static site for Nginx hosting
  output: "export",
  images: {
    // Required for static export when using next/image
    unoptimized: true,
  },
};

export default nextConfig;
