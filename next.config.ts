import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === 'production';

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
  output: "export",
  assetPrefix: isProd ? '/your-repository-name/' : '',
  basePath: isProd ? '/your-repository-name' : ''
};

export default nextConfig;
