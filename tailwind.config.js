/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': 'var(--primary-color)',
        'primary-hover': 'var(--primary-color-hover)',
        'secondary': 'var(--secondary-color)',
        'very-dark-blue': 'var(--very-dark-blue)',
        'dark-grayish-blue': 'var(--dark-grayish-blue)',
        'white': 'var(--white)',
      },
      fontFamily: {
        'title': 'var(--font-title)',
        'text': 'var(--font-text)',
      },
      fontSize: {
        'paragraph': 'var(--font-size-paragraph)',
        'title': 'var(--font-size-title)',
      },
      fontWeight: {
        'regular': 'var(--font-weight-regular)',
        'bold': 'var(--font-weight-bold)',
        'black': 'var(--font-weight-black)',
      },
    },
  },
  plugins: [],
}

