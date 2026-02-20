import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

const PROJECTS = [
  {
    title: "Java API 500 Error Optimization",
    desc: "Legacy system debugging & MyBatis query optimization",
    tech: ["Java", "MyBatis", "JSP", "jQuery"],
  },
  {
    title: "React Personal Portfolio",
    desc: "Vite, Tailwind CSS, Vercel CI/CD pipeline",
    tech: ["React", "Tailwind CSS", "Vercel"],
  }
];

function App() {
  return (
    <div className="bg-[#111] text-gray-100 min-h-screen font-sans selection:bg-blue-500">
      {/* Navbar */}
      <nav className="p-6 flex justify-between items-center max-w-5xl mx-auto">
        <h1 className="text-xl font-bold tracking-tighter">JIYOUNG.DEV</h1>
        <div className="space-x-8 text-sm text-gray-400">
          <a href="#projects" className="hover:text-white transition">Projects</a>
          <a href="#about" className="hover:text-white transition">About</a>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="max-w-5xl mx-auto px-6 py-24">
        <h2 className="text-5xl md:text-7xl font-bold leading-tight mb-8">
          5년 차 개발자로서<br /> 
          <span className="text-blue-500">실질적인 해결책</span>을 제시합니다.
        </h2>
        <p className="text-gray-400 text-lg max-w-2xl border-l-2 border-blue-500 pl-6">
          Java 레거시 시스템의 안정화부터 리액트 현대화까지, <br />
          비즈니스 가치를 높이는 코드를 작성합니다.
        </p>
      </header>

      {/* Projects Section */}
      <section id="projects" className="max-w-5xl mx-auto px-6 py-20">
        <h3 className="text-2xl font-bold mb-12 border-b border-gray-800 pb-4">Selected Projects</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {PROJECTS.map((project, index) => (
            <div key={index} className="group cursor-pointer">
              <div className="bg-gray-900 aspect-video rounded-xl mb-4 overflow-hidden border border-gray-800 group-hover:border-blue-500/50 transition">
                {/* 여기에 나중에 이미지를 넣을 거예요 */}
                <div className="w-full h-full flex items-center justify-center text-gray-700">Preview Image</div>
              </div>
              <h4 className="text-xl font-bold mb-2 group-hover:text-blue-400 transition">{project.title}</h4>
              <p className="text-gray-400 text-sm mb-4">{project.desc}</p>
              <div className="flex gap-2">
                {project.tech.map(t => (
                  <span key={t} className="text-[10px] uppercase tracking-widest bg-gray-800 px-2 py-1 rounded text-gray-300">{t}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default App
