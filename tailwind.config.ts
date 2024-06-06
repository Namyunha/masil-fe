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
      mobile: { max: '640px' },
    },
    extend: {
      colors: {
        // Todo: 디자인 팔레트에 맞춰 재작업
        transparent: 'transparent',
        primary: '#ECCDC1',
        gray: '#c9c8d3',
        orange: '#ff7b27',
        bg_white: '#FFFFFF',
        bg_disabled: '#F4F3FE',
        stroke_focused: '#F845FC',
        stroke_grey: '#BDBCDB',
        text_black: '#212121',
        text_disabled: '#C5C0DB',
        text_error: '#F93232',
        text_grey: '#8A8894',
        text_light_grey: '#C9C8D3',
        text_success: '#439F6E',
        text_validation: '#FFB82E',
        text_white: '#FFFFFF',
      },
      margin: {
        8: '8px',
        16: '16px',
        24: '24px',
        32: '32px',
        40: '40px',
        48: '48px',
        56: '56px',
        64: '64px',
        80: '80px',
        120: '120px',
      },
      padding: {
        8: '8px',
        16: '16px',
        24: '24px',
        32: '32px',
        40: '40px',
        48: '48px',
        56: '56px',
        64: '64px',
        80: '80px',
        120: '120px',
      },
      spacing: {
        8: '8px',
        16: '16px',
        24: '24px',
        32: '32px',
        40: '40px',
        48: '48px',
        56: '56px',
        64: '64px',
        80: '80px',
        120: '120px',
      },
      fontSize: {
        24: '24px',
        20: '20px',
        18: '18px',
        16: '16px',
        14: '14px',
        12: '12px',
      },
    },
  },
  plugins: [],
};

export default config;
