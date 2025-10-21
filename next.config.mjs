// next.config.mjs
const isGithubActions = process.env.GITHUB_ACTIONS || false;


/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: { unoptimized: true },
  basePath: '/haunted-house2025',
  assetPrefix: '/haunted-house2025/',
  eslint: { ignoreDuringBuilds: true },
  typescript: { ignoreBuildErrors: true },
};

export default nextConfig;
