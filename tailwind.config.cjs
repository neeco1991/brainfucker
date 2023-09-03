/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        ez: '#66C863',
        moderate: '#FFC100',
        intense: '#FF8200',
        brainfucker: '#FF0000',
      },
    },
  },
  plugins: [],
};
