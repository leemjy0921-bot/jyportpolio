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
    }
  }
},
  plugins: [],
}