// src/components/Research.tsx

const researchData = [
  {
    title: '时序浮点数据的无损压缩算法创新',
    // V 新增论文题目字段
    paperTitle:
      'Monkey: Segmentation-based Lossless Floating-Point Compression',
    conference:
      'APWeb-WAIM 2025: The 9th APWeb-WAIM joint International Conference on Web and Big Data',
    role: '第一作者',
    description:
      '对时序无损压缩SOTA算法ELF+进行优化：通过发现规律使得变长编码下无需存储长度，而是解码时动态计算，使压缩率进一步提升7.1%。',
    tags: ['数据压缩', '算法优化', '时间序列'],
  },
  {
    title: '基于脑电信号(EEG)的情感识别模型',
    // V 新增论文题目字段
    paperTitle:
      'CS-DAViT: Cross-Scale Vision Transformer with Dual Attention for Efficient Emotion Recognition',
    conference:
      'IJCNN 2025: International Joint Conference on Neural Networks (IJCNN)',
    role: '学生二作',
    description:
      '采用多模态视角分解EEG信号，提取联合特征；并在ViT中插入轻量级XCA，模型准确率达99.41%。',
    tags: ['脑机接口', '深度学习', '情感识别', 'ViT'],
  },
]

const Research = () => {
  return (
    <section id="research" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-white">
          科研亮点
        </h2>
        <div className="space-y-8">
          {researchData.map((item, index) => (
            <div
              key={index}
              className="bg-slate-800 p-6 rounded-lg shadow-lg transform hover:-translate-y-2 transition-transform duration-300">
              <h3 className="text-xl font-bold text-zju-blue mb-2">
                {item.title}
              </h3>

              {/* V 新增用于展示论文题目的部分 */}
              <div className="mb-3 pl-4 border-l-4 border-slate-600">
                <p className="font-mono text-base text-gray-300">
                  {item.paperTitle}
                </p>
              </div>

              <p className="text-sm font-semibold text-gray-400 mb-3">
                录用于: {item.conference} -{' '}
                <span className="font-bold text-white">{item.role}</span>
              </p>
              <p className="mb-4">{item.description}</p>
              <div className="flex flex-wrap gap-2">
                {item.tags.map((tag) => (
                  <span
                    key={tag}
                    className="bg-blue-900 text-blue-300 text-xs font-semibold px-2.5 py-0.5 rounded-full">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Research
