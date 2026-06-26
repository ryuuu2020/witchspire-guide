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
        abyss: '#f5f4ed',
        'abyss-light': '#faf9f5',
        'abyss-elevated': '#ffffff',
        'accent-primary': '#c96442',
        'accent-primary-dim': '#a85030',
        'accent-primary-glow': 'rgba(201,100,66,0.10)',
        'accent-secondary': '#5e5d59',
        'text-primary': '#141413',
        'text-secondary': '#5e5d59',
        'text-muted': '#87867f',
        'border-subtle': '#f0eee6',
        'border-strong': '#e8e6dc',
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
