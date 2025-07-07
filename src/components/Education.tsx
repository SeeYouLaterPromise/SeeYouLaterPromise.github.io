// src/components/Education.tsx

const educationData = [
  {
    institution: '浙江大学宁波理工学院',
    degree: '本科 · 计算机科学与技术',
    years: '2022 - 2026',
  },
  {
    institution: '新加坡南洋理工大学 (NTU)',
    degree: '访学 · 数据通信与物联网',
    years: '2023.07 - 2023.08',
  },
]

const Education = () => {
  return (
    <section id="education" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-white">
          教育背景
        </h2>
        <div className="max-w-2xl mx-auto space-y-6">
          {educationData.map((edu, index) => (
            <div key={index} className="bg-slate-800 p-6 rounded-lg shadow-lg">
              <div className="flex justify-between items-center mb-2">
                <h3 className="text-lg font-bold text-white">
                  {edu.institution}
                </h3>
                <p className="text-sm text-gray-400">{edu.years}</p>
              </div>
              <p className="text-zju-blue">{edu.degree}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Education
