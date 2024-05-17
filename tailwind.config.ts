import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./pages/**/*.{js,ts,jsx,tsx,mdx}', './components/**/*.{js,ts,jsx,tsx,mdx}', './app/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        'gold-drop': '#F1840A',
        'rangoon-green': '#1E1E1B',
        'oslo-gray': '#8C8C8C',
        onyx: '#120F0E',
        gainsboro: '#DEDDDC',
      },
    },
  },
  plugins: [],
};
export default config;
