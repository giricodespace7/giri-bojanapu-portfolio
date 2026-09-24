/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        bg: '#0B0D12',
        surface: '#12151D',
        'surface-2': '#171B26',
        border: '#232838',
        muted: '#8891A3',
        ink: '#EDEFF3',
        gold: '#E8A94D',
        signal: '#5C8DFF',
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'sans-serif'],
        body: ['"Inter"', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      maxWidth: {
        content: '1120px',
      },
    },
  },
  plugins: [],
}
