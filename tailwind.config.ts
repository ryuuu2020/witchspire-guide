import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: 'class',
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        abyss: '#141210',
        'abyss-light': '#0d0b0a',
        'abyss-elevated': '#1c1a16',
        'accent-primary': '#c96442',
        'accent-primary-dim': '#e07b5a',
        'accent-primary-glow': 'rgba(201,100,66,0.10)',
        'accent-secondary': '#8c8982',
        'text-primary': '#ede6de',
        'text-secondary': '#a89e94',
        'text-muted': '#6e655c',
        'border-subtle': '#2a2520',
        'border-strong': '#3d3630',
      },
      fontFamily: {
        display: ["Georgia", "Times New Roman", "serif"],
        body: ["Inter", "system-ui", "sans-serif"],
        mono: ["SF Mono", "Menlo", "monospace"],
      },
    },
  },
  plugins: [],
};

export default config;
