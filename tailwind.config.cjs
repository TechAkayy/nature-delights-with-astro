const { pg_colors, pg_fonts } = require('./themes/pg-tailwindcss-theme.cjs') // tailwind.config.[js,cjs]

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
    // used by Vue Designer for live-designing
    './_pginfo/**/*.{html,js}',
  ],
  theme: {
    extend: {
      colors: {
        primary: { 500: '#6200EE' },
        secondary: { 500: '#03DAC6' },
        success: { 500: '#4CAF50' },
        warning: { 500: '#FF9800' },
        error: { 500: '#B00020' },
        ...pg_colors, // ...(pg_colors as any), // tailwind.config.ts
      },
      fontFamily: pg_fonts, // pg_fonts as any, // tailwind.config.ts
      //...
    },
  },
  plugins: [],
}
