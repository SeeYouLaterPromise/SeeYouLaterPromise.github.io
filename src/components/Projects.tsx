// src/components/Projects.tsx

// TODO: 填充你的项目数据
const projectData = [
  {
    title: '训练Mario游戏智能体',
    description:
      '分为强监督学习、强化学习、以及半监督学习三个方向展开。小组成员有两位分别从强监督学习和强化学习进展。早期我带队主要设计强监督学习训练。后面使用PPO训练智能体。最后使用强监督学习的结果来作为强化学习的热启动。',
    tags: ['强化学习', '游戏AI', 'Python'],
    githubLink: 'https://github.com/SeeYouLaterPromise/RL-begin',
  },
  {
    title: '基于YOLO的飞镖得分识别系统',
    description:
      '熟悉yolo基本原理与重要的密集检测特性; 对于v5的anchor机制和v8的anchor-free机制对比探究。最终使用Yolov11n来识别识别人为定义的四个校准点以及飞镖点从而对板面建模计算得分。',
    tags: ['计算机视觉', 'YOLO', '目标检测'],
    githubLink: 'https://github.com/SeeYouLaterPromise/dart-score-ai',
  },
  // 你可以继续添加更多项目...
]

const Projects = () => {
  return (
    <section id="projects" className="bg-slate-800 py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-white">
          项目展示
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          {projectData.map((proj, index) => (
            <div key={index} className="bg-slate-900 p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold text-zju-blue mb-2">
                {proj.title}
              </h3>
              <p className="mb-4 h-16">{proj.description}</p>{' '}
              {/* h-16 用于大致对齐高度 */}
              <div className="flex flex-wrap gap-2 mb-4">
                {proj.tags.map((tag) => (
                  <span
                    key={tag}
                    className="bg-gray-700 text-gray-300 text-xs font-semibold px-2.5 py-0.5 rounded-full">
                    {tag}
                  </span>
                ))}
              </div>
              <a
                href={proj.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="font-bold text-white hover:text-zju-blue transition-colors">
                查看代码 &rarr;
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
