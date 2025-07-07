import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  /* config options here */
  // 关键配置：告诉 Next.js 我们要构建的是一个静态网站
  output: 'export',
  // 如果你在页面中使用了 Next.js 的 <Image> 组件，建议加上这个配置
  images: {
    unoptimized: true,
  },
}

export default nextConfig
