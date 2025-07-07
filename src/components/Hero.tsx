// src/components/Hero.tsx
const Hero = () => {
  return (
    <section id="hero" className="container mx-auto px-4 py-24 text-center">
      {/* TODO: 在 public 文件夹放入你的头像图片，并替换 'your-avatar.jpg' */}
      {/* <img
        src="/your-avatar.jpg"
        alt="你的名字"
        className="w-32 h-32 rounded-full mx-auto mb-6 border-4 border-zju-blue"
      /> */}
      <h1 className="text-4xl md:text-6xl font-bold mb-4 text-white">
        {/* TODO: 替换成你的名字 */}
        你好，我是卢刘烨昕
      </h1>
      <p className="text-xl md:text-2xl mb-8 text-zju-blue font-semibold">
        {/* TODO: 替换成你的身份标签 */}
        AI Researcher & Software Engineer
      </p>
      <p className="max-w-3xl mx-auto text-lg">
        {/* TODO: 替换成你的个人宣言 (Bio) */}
        我是来自浙江大学宁波理工学院的学生，一名对计算机充满热情的研究者和开发者...
      </p>
    </section>
  )
}

export default Hero
