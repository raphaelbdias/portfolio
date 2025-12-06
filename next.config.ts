import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  basePath: process.env.NODE_ENV === "production" ? "/portfolio" : "",
  assetPrefix: process.env.NODE_ENV === "production" ? "/portfolio" : "",
  images: {
    unoptimized: true,   // ← ONLY this line. Remove the `path` line completely
  },
};

export default nextConfig;