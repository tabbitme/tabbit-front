/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        main: '#1F9F3A', // カスタム緑色を追加
      },
    },
  },
  plugins: [require('daisyui')],
  mode: 'jit',
  daisyui: {
    themes: ['emerald', 'light', 'dark'],
  },
};
