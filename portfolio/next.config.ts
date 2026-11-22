import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Fully static output: Cloudflare Pages serves the `out` folder for free.
  output: "export",
  images: { unoptimized: true },
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
