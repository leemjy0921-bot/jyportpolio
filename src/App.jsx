import { useState, useEffect } from 'react';
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
  // 기본값을 false(Light)로 설정합니다.
  const [darkMode, setDarkMode] = useState(false); 

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const toggleTheme = () => setDarkMode(!darkMode);

return (
<div className={`min-h-screen font-sans transition-colors duration-500 ${
      darkMode ? 'bg-[#0f0f0f] text-gray-100' : 'bg-white text-gray-900'
    }`}>
      
      {/* Navbar: 텍스트 크기 및 선명도 강화 */}
      <nav className={`fixed top-0 w-full z-50 border-b transition-colors duration-500 ${
        darkMode ? 'bg-[#0f0f0f]/90 border-gray-800' : 'bg-white/90 border-gray-200'
      } backdrop-blur-md`}>
        <div className="p-5 flex justify-between items-center max-w-6xl mx-auto">
          <h1 className={`text-2xl font-mono font-black tracking-tighter ${darkMode ? 'text-blue-400' : 'text-blue-600'}`}>
            JIYOUNG.LOG
          </h1>
          
          <div className="flex items-center gap-8">
            <div className={`hidden md:flex space-x-10 text-base font-bold ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
              <a href="#about" className="hover:text-blue-500 transition">About</a>
              <a href="#projects" className="hover:text-blue-500 transition">Projects</a>
            </div>

            <button 
              onClick={toggleTheme}
              className={`flex items-center gap-2 px-4 py-2 rounded-full border text-sm font-bold transition-all ${
                darkMode 
                ? 'bg-gray-800 border-gray-700 text-yellow-400' 
                : 'bg-gray-100 border-gray-300 text-gray-800 hover:bg-gray-200 shadow-sm'
              }`}
            >
              {darkMode ? "🌙 Dark" : "☀️ Light"}
            </button>
          </div>
        </div>
      </nav>

      <main className="pt-32">
        <section className="max-w-5xl mx-auto px-6 py-12">
          {/* 터미널 창: font-mono 적용 */}
          <div className="bg-[#121212] rounded-2xl shadow-2xl border border-gray-800 overflow-hidden font-mono">
            <div className="bg-[#1e1e1e] px-6 py-4 flex items-center gap-2 border-b border-[#2a2a2a]">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-[#ff5f56]" />
                <div className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
                <div className="w-3 h-3 rounded-full bg-[#27c93f]" />
              </div>
              <span className="ml-4 text-xs font-medium text-gray-500 tracking-widest uppercase">zsh — 80x24</span>
            </div>

            <div className="p-10 space-y-12">
              {/* WHO AM I: font-mono의 세련된 느낌 */}
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <span className="text-green-500 font-bold">➜</span>
                  <span className="text-cyan-400 font-bold">~</span>
                  <span className="text-white font-bold text-xl">who am i</span>
                </div>
                <p className="text-2xl md:text-3xl leading-snug font-extrabold text-gray-100 tracking-tight">
                  "안녕하세요! 코드는 단순하게, 생각은 깊이 있게, 결과는 가치 있게"
                </p>
                <p className="text-2xl md:text-3xl leading-snug font-extrabold text-gray-100 tracking-tight">
                  <span className="text-blue-500 italic">5년차 개발자</span> 임지영 입니다.
                </p>
              </div>

              {/* 자기소개서 본문: font-sans(Inter)로 가독성 확보 */}
              <div className="space-y-6">
                <div className="flex items-center gap-3">
                  <span className="text-green-500 font-bold">➜</span>
                  <span className="text-cyan-400 font-bold">~</span>
                  <span className="text-white font-bold text-xl">cat intro.md</span>
                </div>
                <div className="font-sans bg-black/30 p-8 rounded-2xl border-l-4 border-blue-600 leading-relaxed text-lg text-gray-300">
                  <p>
                    안녕하세요, <strong>기본기에 집착하는 5년 차 개발자 임지영</strong>입니다. 
                    자바와 스프링 생태계에서 다져온 탄탄한 기초는 어떤 복잡한 요구사항 앞에서도 흔들리지 않는 제 가장 큰 무기입니다.
                  </p>
                  <p className="mt-4 text-blue-500">
                    저는 AI를 단순한 코드 생성기가 아닌, <strong>나의 생산성을 극대화하는 파트너</strong>로 정의합니다. 
                    도구가 제안하는 결과물을 무비판적으로 수용하지 않고, 직접 검증하고 최적화하여 시스템의 안정성을 끝까지 책임집니다.
                  </p>
                  <p className="mt-4">
                    <strong>삼성전자, CJ, KT</strong> 등 대규모 프로젝트에서는 완벽한 협업과 역할 수행으로 거대한 시스템의 안정성을 배웠고, 
                    소규모 프로젝트에서는 <strong>기획부터 DB 설계, QA까지</strong> 전 과정에 참여하며 서비스 전체를 보는 시야를 길렀습니다.
                  </p>
                  <p className="mt-4">
                    새로운 기술을 마주할 때 거부감보다 설렘을 느낍니다. 
                    익숙함에 안주하기보다 <strong>새로운 도전 속에서 성장의 동력을 찾는 집요함</strong>으로 비즈니스 가치를 만들어내겠습니다.
                  </p>
                  <div className="mt-8">
                    <motion.span 
                      animate={{ opacity: [0, 1, 0] }}
                      transition={{ repeat: Infinity, duration: 1 }}
                      className="inline-block w-3 h-6 bg-blue-500 align-middle"
                    />
                  </div>
                </div>
              </div>

              
              {/* Core Values */}
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <span className="text-green-500 font-black">➜</span>
                  <span className="text-cyan-400 font-black">~</span>
                  <span className="text-white font-black">ls --core-values</span>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-base">
                  {['Responsibility', 'Persistence', 'Meticulousness', 'Challenge'].map((val) => (
                    <div key={val} className="bg-[#000] border-2 border-gray-800 p-4 rounded-xl text-center text-blue-400 font-black tracking-widest hover:border-blue-500 transition-colors">
                      {val}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Projects Section: 텍스트 항상 노출 및 호버 시 강조 */}
        <section id="projects" className={`max-w-6xl mx-auto px-6 py-24 border-t ${darkMode ? 'border-gray-900' : 'border-gray-200'}`}>
          <div className="flex justify-between items-end mb-16">
            <h3 className={`text-4xl font-black tracking-tighter ${darkMode ? 'text-white' : 'text-gray-900'}`}>Selected_Projects</h3>
            <span className={`font-mono font-bold text-lg ${darkMode ? 'text-gray-500' : 'text-gray-400'}`}>TOTAL (06)</span>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {PROJECTS.map((project, index) => (
              <motion.div 
                key={index}
                whileHover={{ scale: 1.02, y: -5 }}
                className={`group p-10 rounded-3xl border-2 transition-all duration-300 ${
                  darkMode 
                  ? 'bg-[#1a1a1a] border-gray-800 hover:border-blue-500 shadow-2xl' 
                  : 'bg-white border-gray-100 shadow-lg hover:shadow-2xl hover:border-blue-300'
                }`}
              >
                <div className="flex justify-between items-center mb-6">
                  <span className={`text-xs font-black px-3 py-1 rounded-full tracking-wider ${
                    darkMode ? 'bg-blue-900/40 text-blue-300' : 'bg-blue-100 text-blue-700'
                  }`}>{project.period}</span>
                  <span className={`text-xl transition-transform group-hover:translate-x-1 group-hover:-translate-y-1 ${darkMode ? 'text-gray-700' : 'text-gray-300'}`}>↗</span>
                </div>
                
                <h4 className={`text-2xl font-black mb-5 transition-colors ${darkMode ? 'text-white group-hover:text-blue-400' : 'text-gray-900 group-hover:text-blue-600'}`}>{project.title}</h4>
                
                {/* 설명 문구 크기 키우고 색상 진하게 수정 */}
                <p className={`text-base font-semibold leading-relaxed mb-8 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                  {project.description}
                </p>
                
                <ul className="mb-8 space-y-3">
                  {project.keyPoints.map((point, i) => (
                    <li key={i} className={`text-sm font-bold flex items-start gap-3 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                      <span className="text-blue-600 text-lg">•</span> {point}
                    </li>
                  ))}
                </ul>

                <div className={`flex flex-wrap gap-3 pt-6 border-t ${darkMode ? 'border-gray-800' : 'border-gray-100'}`}>
                  {project.tech.map(t => (
                    <span key={t} className={`text-xs font-black uppercase tracking-widest ${darkMode ? 'text-gray-500' : 'text-gray-400'}`}>#{t}</span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Skills Section: 텍스트 대비 강화 */}
        <section id="about" className={`max-w-6xl mx-auto px-6 py-24 border-t ${darkMode ? 'border-gray-900' : 'border-gray-200'}`}>
          <h3 className={`text-lg font-black uppercase tracking-[0.2em] mb-16 flex items-center gap-4 ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
            <span className="w-12 h-1 bg-blue-600" /> Core Skills
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
            {Object.entries(SKILLS).map(([category, items]) => (
              <div key={category} className="space-y-6">
                <h4 className={`text-xl font-black flex items-center gap-3 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                  <span className="text-blue-600 font-bold">{'>'}</span> {category}
                </h4>
                <ul className="space-y-3 text-base font-bold text-gray-500">
                  {items.map(item => (
                    <li key={item} className={`transition-colors cursor-default ${darkMode ? 'hover:text-white' : 'hover:text-blue-600'}`}>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>
      </main>

      <footer className={`p-16 text-center text-sm font-black border-t transition-colors ${darkMode ? 'bg-[#0a0a0a] border-gray-900 text-gray-600' : 'bg-gray-50 border-gray-200 text-gray-400'}`}>
        &copy; 2026 JIYOUNG.DEV. ALL RIGHTS RESERVED. (PERSISTENCE_PAYS_OFF)
      </footer>
    </div>
  );
}

export default App;