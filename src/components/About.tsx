// src/components/About.tsx
const About = () => {
  return (
    <section id="about" className="bg-slate-800 py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8 text-white">
          关于我
        </h2>
        <p className="max-w-3xl mx-auto text-lg leading-relaxed">
          {/* TODO: 在这里填充你的“热情来源”故事 */}
          我是一名对计算机充满热情的研究者与开发者，专注于人工智能算法、浮点数据压缩等方向的探索。我的兴趣始于对技术原理的好奇，逐步延伸至将前沿研究落地为实用系统的实践。无论是在科研还是项目中，我始终致力于打造兼具创新性与应用价值的智能解决方案，相信技术应服务于人类的发展与未来。
        </p>
      </div>
    </section>
  )
}

export default About
