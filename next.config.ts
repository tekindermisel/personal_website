import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === 'production';

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
  output: "export",
  assetPrefix: isProd ? '' : '',
  basePath: isProd ? '/personal_website' : '',
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
