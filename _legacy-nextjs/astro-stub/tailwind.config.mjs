/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#4c1d7a',   /* Royal plum/deep purple */
          light: '#6b21a8',
          dark: '#3b0f5e',
        },
        accent: '#9333ea',      /* Rich violet */
        foreground: '#1c1917',
        muted: '#78716c',
        background: '#ffffff',
        surface: '#fafaf9',
        border: '#e7e5e4',
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
