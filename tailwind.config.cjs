/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    // 폴더 내에 모든 디렉토리 내에 모든 파일.{확장자}
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {},
  },
  plugins: [],
  darkMode: 'class',
};
