import type { Config } from 'tailwindcss';

const config = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'light-pink': 'hsl(275, 100%, 97%)',
        'grayish-purple': 'hsl(292, 16%, 49%)',
        purple: 'hsl(281, 83%, 54%)',
        'dark-purple': 'hsl(292, 42%, 14%)',
      },
    },
  },
  plugins: [],
} satisfies Config;

export default config;
