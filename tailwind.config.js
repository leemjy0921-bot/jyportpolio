export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
// tailwind.config.js 예시
theme: {
  extend: {
    colors: {
      brand: '#6366f1', // 지영님만의 고유 컬러
      dark: '#0a0a0a',
    },
    fontFamily: {
        // 본문용: 세련된 Inter
        sans: ['Inter', 'sans-serif'],
        // 터미널/코드용: 개발자들이 가장 선호하는 JetBrains Mono
        mono: ['"JetBrains Mono"', 'monospace'],
      }
  }
},
  plugins: [],
}