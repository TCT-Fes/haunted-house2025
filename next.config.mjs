// next.config.mjs
const isGithubActions = process.env.GITHUB_ACTIONS || false;


const isProd = process.env.NODE_ENV === 'production';

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: { unoptimized: true },
  basePath: isProd ? '/haunted-house2025' : '',      // URL にリポジトリ名を追加
  assetPrefix: isProd ? '/haunted-house2025/' : '',  // CSS/JS のパスも調整
};

export default nextConfig;
