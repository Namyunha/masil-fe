import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/stories/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens: {
      mobile: { max: '480px' },
    },
    extend: {
      colors: {
        // Todo: 디자인 팔레트에 맞춰 재작업
        transparent: 'transparent',
        red: '#FF0000',
        orange: '#FF7849',
        yellow: '#FFC82C',
        brown: '#A52A2A',
        green: '#13CE66',
        blue: '#1FB6FF',
        pink: '#FF49DB',
        purple: '#7E5BEF',
        white: '#FFFFFF',
        gray: {
          50: '#FAFAFA',
          100: '#EFEFF0',
          200: '#F9F9F9CC',
          300: '#F5F5F5B2',
          400: '#B3B3B363',
          500: '#3C3C43',
          600: '#3C3C4399',
          700: '#3C3C435C',
          800: '#B3B3B31F',
          900: '#00000033',
        },
        black: '#000000',
      },
    },
  },
  plugins: [],
};
export default config;
