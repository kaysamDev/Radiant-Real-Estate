/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero-bg': "url('/images/hero2.webp')"
      },
      colors: {
        'dark': '#333333',
        'dark2': '#080E24',
        'gray-dark': '#525252',
        'white': '#FFFFFF',
        'blue': '#3CA3F4',
        'foundation-primary': '#F6FBFF',
        'foundation-blue': '#DEEFFD',
        'foundation-dark': '#7A7A7A'
      },
    },
  },
  plugins: [],
}
