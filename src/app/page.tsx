import Hero from '@/components/Hero'
import About from '@/components/About'
import Research from '@/components/Research'
import Projects from '@/components/Projects'
import Skills from '@/components/Skills'
import Education from '@/components/Education'
import Contact from '@/components/Contact'

export default function Home() {
  return (
    <main className="bg-slate-900 text-gray-300">
      <Hero />
      <About />
      <Research />
      <Projects />
      <Skills />
      <Education />
      <Contact />
    </main>
  )
}
