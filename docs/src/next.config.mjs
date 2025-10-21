// next.config.mjs
const isGithubActions = process.env.GITHUB_ACTIONS || false;

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: { unoptimized: true },
  basePath: '',                      // 空にする
  assetPrefix: '/haunted-house2025/', // リポジトリ名だけ
  eslint: { ignoreDuringBuilds: true },
  typescript: { ignoreBuildErrors: true },
};

export default nextConfig;
