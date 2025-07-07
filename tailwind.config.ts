import type { Config } from 'tailwindcss'

const config: Config = {
  // 这个 content 数组告诉 Tailwind 去哪些文件里扫描并应用样式
  // 非常重要，必须包含所有用到 Tailwind class 的文件路径
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      // 在这里我们定义你的自定义颜色
      colors: {
        'zju-blue': '#005BAC', // 这里使用了你喜欢的新名字 zju-blue
      },
    },
  },
  plugins: [],
}
export default config
