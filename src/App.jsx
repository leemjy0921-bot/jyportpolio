import { motion } from "framer-motion";

// 프로젝트 데이터 (상수)
const PROJECTS = [
  {
    title: "한익스프레스 쇼핑몰 통합관리 'DAON'",
    period: "2024.08 - 2025.01",
    tech: ["React", "Spring Boot", "Oracle", "Mybatis"],
    description: "공급·생산·매장관리로 분산된 3개 시스템을 하나로 통합했습니다.",
    keyPoints: ["Vue.js → React 리액토링", "비즈니스 로직 현대화"]
  },
  {
    title: "CJ CGV 차세대 시스템",
    period: "2025.02 - 2025.07",
    tech: ["React", "Spring Boot", "Oracle", "Mybatis"],
    description: "대규모 디지털 시스템 구축 및 프론트엔드 최적화 작업을 수행했습니다.",
    keyPoints: ["대규모 트래픽 대응", "시스템 안정성 강화"]
  },
  {
    title: "한살림 통합 모바일웹 'Msalime'",
    period: "2024.08 - 2025.01",
    tech: ["React", "Spring Boot", "Oracle", "Mybatis"],
    description: "분산된 3개 시스템을 하나로 통합하여 운영 효율을 개선했습니다.",
    keyPoints: ["기존 Vue 분석 후 리팩토링", "통합 시스템 설계"]
  },
  {
    title: "KT알파 쇼핑몰 통합관리 'TAMS'",
    period: "2024.03 - 2024.07",
    tech: ["Java", "Spring", "JSP", "MySQL", "API 연동"],
    description: "쇼핑몰 통합 관리 솔루션 커스터마이징 개발을 담당했습니다.",
    keyPoints: ["외부 쇼핑몰 API 연동", "프로시저 최적화"]
  },
  {
    title: "삼성전자 DS 부문 'DS-CLOUD'",
    period: "2023.07 - 2024.01",
    tech: ["Java", "Spring Boot", "JPA", "MSA", "Redis"],
    description: "삼성전자 DS 내부 클라우드 자원 관리 시스템 백엔드를 개발했습니다.",
    keyPoints: ["MSA 환경 설계", "Load Balancer 로직 구현"]
  },
  {
    title: "물류 3PL 통합관리 'JAWS'",
    period: "2021.11 - 2023.06",
    tech: ["Java", "Spring", "Nexacro", "Oracle", "Spring Batch"],
    description: "유통사와 물류센터 간 통합 물류 프로세스를 구축했습니다.",
    keyPoints: ["Spring Batch 자동화", "엑셀 업로드 방식 개선"]
  }
];

const SKILLS = {
  Backend: ["Java", "Spring Boot", "JPA", "Mybatis", "Spring Batch"],
  Database: ["MySQL", "Oracle", "Redis", "DynamoDB"],
  Frontend: ["React", "JavaScript", "HTML/CSS", "Nexacro"],
  DevOps: ["Jenkins", "Git", "Jira", "MSA"]
};

function App() {
  return (
    <div className="bg-[#0f0f0f] text-gray-100 min-h-screen font-sans selection:bg-blue-500">
      {/* 1. Navbar */}
      <nav className="fixed top-0 w-full z-50 bg-[#0f0f0f]/80 backdrop-blur-md border-b border-gray-900">
        <div className="p-6 flex justify-between items-center max-w-5xl mx-auto">
          <h1 className="text-xl font-mono font-bold tracking-tighter text-blue-500">JIYOUNG.LOG</h1>
          <div className="space-x-8 text-sm font-mono text-gray-400">
            <a href="#about" className="hover:text-white transition">./about</a>
            <a href="#projects" className="hover:text-white transition">./projects</a>
          </div>
        </div>
      </nav>

      <main className="pt-24">
        {/* 2. Terminal Hero Section */}
        <section className="max-w-5xl mx-auto px-6 py-12 md:py-24">
          <div className="bg-[#1e1e1e] rounded-xl shadow-2xl border border-gray-800 overflow-hidden font-mono">
            <div className="bg-[#333] px-4 py-2 flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-red-500" />
              <div className="w-3 h-3 rounded-full bg-yellow-500" />
              <div className="w-3 h-3 rounded-full bg-green-500" />
              <span className="ml-2 text-xs text-gray-400 font-mono italic">visitor@jiyoung-dev: ~</span>
            </div>
            <div className="p-8 space-y-6">
              <div>
                <span className="text-green-400">➜</span> <span className="text-cyan-400">~</span> <span className="text-white">whoami</span>
                <p className="mt-2 text-gray-300 leading-relaxed">
                  "안녕하세요! 코드는 단순하게, 생각은 깊이 있게, 결과는 가치 있게. <br/>
                  AI 시대의 개발자로서 <strong>집요한 검증과 책임감</strong>으로 가치를 설계하는 임지영입니다."
                </p>
              </div>

              <div>
                <span className="text-green-400">➜</span> <span className="text-cyan-400">~</span> <span className="text-white">ls --core-values</span>
                <div className="mt-4 grid grid-cols-2 md:grid-cols-4 gap-4">
                  {['Responsibility', 'Persistence', 'Meticulousness', 'Challenge'].map((val) => (
                    <div key={val} className="border border-gray-700 p-3 rounded-lg bg-black/20 text-blue-400 text-xs text-center font-bold">
                      {val}
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex items-center gap-2">
                <span className="text-green-400">➜</span> <span className="text-cyan-400">~</span> 
                <span className="text-white">grep "success" mindset</span>
                <motion.span 
                  animate={{ opacity: [0, 1, 0] }}
                  transition={{ repeat: Infinity, duration: 0.8 }}
                  className="w-2 h-5 bg-blue-500 inline-block"
                />
              </div>
            </div>
          </div>
        </section>

 {/* 4. Projects Section */}
        <section id="projects" className="max-w-5xl mx-auto px-6 py-20 border-t border-gray-900">
          <div className="flex justify-between items-end mb-12">
            <h3 className="text-3xl font-bold italic tracking-tighter">Selected_Projects</h3>
            <span className="text-gray-600 font-mono text-sm">TOTAL (06)</span>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {PROJECTS.map((project, index) => (
              <motion.div 
                key={index}
                whileHover={{ y: -10 }}
                className="group p-8 rounded-2xl bg-[#151515] border border-gray-800 hover:border-blue-500/30 transition-all duration-300"
              >
                <div className="flex justify-between items-start mb-6">
                  <span className="text-[10px] font-mono text-blue-500 bg-blue-500/10 px-2 py-1 rounded tracking-widest">{project.period}</span>
                  <span className="text-gray-700 group-hover:text-blue-500 transition-colors">↗</span>
                </div>
                
                <h4 className="text-xl font-bold mb-4 group-hover:text-white transition-colors">{project.title}</h4>
                <p className="text-gray-400 text-sm leading-relaxed mb-6">{project.description}</p>
                
                <ul className="mb-6 space-y-1">
                  {project.keyPoints.map((point, i) => (
                    <li key={i} className="text-xs text-gray-500 flex items-start gap-2">
                      <span className="text-blue-900 mt-1">•</span> {point}
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2 pt-4 border-t border-gray-900">
                  {project.tech.map(t => (
                    <span key={t} className="text-[9px] uppercase tracking-tighter text-gray-600 font-mono">#{t}</span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </section>
        
        {/* 3. Skills Section */}
        <section id="about" className="max-w-5xl mx-auto px-6 py-20 border-t border-gray-900">
          <h3 className="text-sm font-bold text-gray-500 uppercase tracking-[0.2em] mb-12 flex items-center gap-2">
            <span className="w-8 h-px bg-gray-800" /> Core Skills
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {Object.entries(SKILLS).map(([category, items]) => (
              <div key={category} className="space-y-4">
                <h4 className="text-white font-mono font-bold flex items-center gap-2">
                  <span className="text-blue-500">{'>'}</span> {category}
                </h4>
                <ul className="space-y-2 text-sm text-gray-500">
                  {items.map(item => (
                    <li key={item} className="hover:text-blue-400 transition-colors cursor-default tracking-wide">{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

      </main>

      <footer className="p-12 text-center text-gray-600 text-xs font-mono border-t border-gray-900">
        &copy; 2026 JIYOUNG.DEV. ALL RIGHTS RESERVED. (PERSISTENCE_PAYS_OFF)
      </footer>
    </div>
  );
}

export default App;