// next.config.ts
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  images: {
    unoptimized: true,
    path: process.env.NODE_ENV === "production" ? "/portfolio/" : "/",
  },
  // THIS LINE FIXES YOUR CSS/IMAGES/JS
  assetPrefix: process.env.NODE_ENV === "production" ? "/portfolio" : "",
  basePath: process.env.NODE_ENV === "production" ? "/portfolio" : "",
};

export default nextConfig;