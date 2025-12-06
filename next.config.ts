// next.config.ts
import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === "production";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,

  // This exact combination is the only one that works reliably
  basePath: isProd ? "/portfolio" : "",
  assetPrefix: isProd ? "/portfolio/" : "",        // note the trailing slash here

  images: {
    unoptimized: true,
    // This line is REQUIRED for <Image /> component on GitHub Pages
    path: isProd ? "/portfolio/" : "/",
  },
};

export default nextConfig;