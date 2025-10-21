// next.config.mjs
const isGithubActions = process.env.GITHUB_ACTIONS || false;


/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // 静的HTMLを出力
  images: { unoptimized: true }, // 画像最適化を無効（GitHub Pages向け）
  basePath: '/haunted-house2025', // ← リポジトリ名を指定（必須）
  assetPrefix: '/haunted-house2025/', // ← 同じくリポジトリ名を指定（必須）
  eslint: { ignoreDuringBuilds: true },
  typescript: { ignoreBuildErrors: true },
};

export default nextConfig;
