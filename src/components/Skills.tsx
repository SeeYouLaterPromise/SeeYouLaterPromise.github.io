// src/components/Skills.tsx

// 我们将技能数据结构化，方便管理和展示
const skillsData = {
  frontend: ['TypeScript', 'React', 'Next.js', 'Tailwind CSS', 'Vite'],
  backend: ['Python', 'FastAPI', 'Node.js'],
  ai_datascience: ['PyTorch', 'Scikit-learn', '数据分析', '脑电信号(EEG)处理'],
  tools_and_others: ['Git & GitHub', 'Docker', '数据结构与算法'],
}

const Skills = () => {
  return (
    <section id="skills" className="bg-slate-800 py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-white">
          我的武器库
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <h3 className="text-xl font-semibold text-zju-blue mb-4">
              前端 Frontend
            </h3>
            <ul className="space-y-2">
              {skillsData.frontend.map((skill) => (
                <li key={skill}>{skill}</li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-zju-blue mb-4">
              后端 Backend
            </h3>
            <ul className="space-y-2">
              {skillsData.backend.map((skill) => (
                <li key={skill}>{skill}</li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-zju-blue mb-4">
              AI & 数据科学
            </h3>
            <ul className="space-y-2">
              {skillsData.ai_datascience.map((skill) => (
                <li key={skill}>{skill}</li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-zju-blue mb-4">
              工具及其他
            </h3>
            <ul className="space-y-2">
              {skillsData.tools_and_others.map((skill) => (
                <li key={skill}>{skill}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills
