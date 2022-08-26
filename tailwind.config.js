/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      'sans': ['ui-sans-serif', 'system-ui'],
      'serif': ['ui-serif', 'Georgia'],
      'monospace': ['"Inconsolata"', 'monospace'],
      'display': ['Oswald'],
      'body': ['"Open Sans"'],
      'clear-sans-thin': ['"Clear Sans Thin", "sans-serif"'],
      'advent-pro': ['"Advent Pro"', 'sans-serif'],
      'share-tech-mono': ['"Share Tech Mono", "Helvetica", "Verdana", "Tahoma", "sans-serif"'],
    },
    extend: {
      colors: {
        "dark-purple": "#1A142A",
        "dark-red": "#271415",
        "dark-mid-section": "#1B152B",
      },
    },
    plugins: [],
  },
};
