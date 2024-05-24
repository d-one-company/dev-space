import type { Config } from 'tailwindcss';

const config = {
  darkMode: ['class'],
  content: ['./pages/**/*.{ts,tsx}', './components/**/*.{ts,tsx}', './app/**/*.{ts,tsx}', './src/**/*.{ts,tsx}'],
  prefix: '',
  theme: {
    container: {},
    extend: {
      colors: {
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        'secondary-bg': 'hsl(var(--secondary-bg))',
        'oslo-gray': 'hsl(var(--oslo-gray))',
        onyx: 'hsl(var(--onyx))',
        night: 'hsl(var(--night))',
        'tab-bg': 'hsl(var(--tab-bg))',
        thunder: 'hsl(var(--thunder))',
        gainsboro: 'hsl(var(--gainsboro))',
        'disabled-button': 'hsl(var(--disabled-button))',
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
} satisfies Config;

export default config;
