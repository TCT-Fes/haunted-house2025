// next.config.mjs
const isGithubActions = process.env.GITHUB_ACTIONS || false;

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: { unoptimized: true },
  basePath: '/haunted-house2025',      // リポジトリ名に変更
  assetPrefix: '/haunted-house2025/',  // 同じくリポジトリ名
  eslint: { ignoreDuringBuilds: true },
  typescript: { ignoreBuildErrors: true },
};

export default nextConfig;
