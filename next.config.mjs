// next.config.mjs
const isGithubActions = process.env.GITHUB_ACTIONS || false;


/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // ← これが重要！
  images: {
    unoptimized: true,
  },
  basePath: '/haunted-house2025', // ← GitHub Pages用
  assetPrefix: '/haunted-house2025/',
};

export default nextConfig;
