/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    // 폴더 내에 모든 디렉토리 내에 모든 파일.{확장자}
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Nanum Gothic', 'Arial', 'sans-serif'],
        // sans가 제일 기본 상속 폰트이므로 전체 폰트바꾸려면 sans재지정후 맨앞에 원하는 폰트 넣기
      },
    },
  },
  plugins: [],
  darkMode: 'class',
};
