/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}', // Note the addition of the `app` directory.
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './templates/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        black: '#1A1E27',
        red: '#E06469',
        blue: '#19A7CE',
        gray01: '#B1B8C0',
        bg01: '#F6F1F1',
      },
      fontSize: {
        body: ['16px', { fontWeight: '400', lineHeight: '19px' }],
        subtitle: ['14px', { fontWeight: '400', lineHeight: '17px' }],
        caption: ['12px', { fontWeight: '400', lineHeight: '17px' }],
        h2: ['20px', { fontWeight: '400', lineHeight: '24px' }],
        h1: ['20px', { fontWeight: '600', lineHeight: '24px' }],
      },
      width: {
        430: '430px',
      },
      height: {
        90: '90px',
        55: '55px',
        300: '300px',
        900: '900px',
      },
    },
  },
  plugins: [],
}
