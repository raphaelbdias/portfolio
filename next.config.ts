// next.config.ts
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,

  // These two lines are the only ones that matter now
  basePath: "",                  // ← empty because it's root domain
  assetPrefix: "",               // ← empty because it's root domain root

  images: {
    unoptimized: true,
  },
};

export default nextConfig;