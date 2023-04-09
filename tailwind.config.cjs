/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    // 폴더 내에 모든 디렉토리 내에 모든 파일.{확장자}
    'src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        // sans가 제일 기본 상속 폰트이므로 전체 폰트바꾸려면 sans재지정후 맨앞에 원하는 폰트 넣기
        sans: ['Nanum Gothic', 'Arial', 'sans-serif'],
      },
      animation: {
        skeleton: 'skeleton-gradient 2s infinite linear;',
      },
      keyframes: {
        'skeleton-gradient': {
          '0%, 100%': { backgroundColor: 'rgba(226, 232, 240, 0.4)' },
          '50%': { backgroundColor: 'rgba(226, 232, 240, 1)' },
        },
      },
    },
  },
  plugins: [require('autoprefixer')],
  darkMode: 'class',
};
