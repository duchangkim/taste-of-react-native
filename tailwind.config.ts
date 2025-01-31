import plugin from 'tailwindcss/plugin';

import { colorTokens } from './src/shared/ui/color-tokens';

import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{js,jsx,ts,tsx}', './src/**/*.{js,jsx,ts,tsx}'],
  presets: [require('nativewind/preset')],
  theme: {
    colors: {
      // 기본 컬러 토큰
      transparent: 'transparent',
      current: 'currentColor',
      sky: {
        50: 'rgb(var(--color-sky-50) / <alpha-value>)',
        100: 'rgb(var(--color-sky-100) / <alpha-value>)',
        200: 'rgb(var(--color-sky-200) / <alpha-value>)',
        300: 'rgb(var(--color-sky-300) / <alpha-value>)',
        400: 'rgb(var(--color-sky-400) / <alpha-value>)',
        500: 'rgb(var(--color-sky-500) / <alpha-value>)',
        600: 'rgb(var(--color-sky-600) / <alpha-value>)',
        700: 'rgb(var(--color-sky-700) / <alpha-value>)',
        800: 'rgb(var(--color-sky-800) / <alpha-value>)',
        900: 'rgb(var(--color-sky-900) / <alpha-value>)',
      },
      grey: {
        50: 'rgb(var(--color-grey-50) / <alpha-value>)',
        100: 'rgb(var(--color-grey-100) / <alpha-value>)',
        200: 'rgb(var(--color-grey-200) / <alpha-value>)',
        300: 'rgb(var(--color-grey-300) / <alpha-value>)',
        400: 'rgb(var(--color-grey-400) / <alpha-value>)',
        500: 'rgb(var(--color-grey-500) / <alpha-value>)',
        600: 'rgb(var(--color-grey-600) / <alpha-value>)',
        700: 'rgb(var(--color-grey-700) / <alpha-value>)',
        800: 'rgb(var(--color-grey-800) / <alpha-value>)',
        900: 'rgb(var(--color-grey-900) / <alpha-value>)',
      },
      yellow: {
        500: 'rgb(var(--color-yellow-500) / <alpha-value>)',
      },
      red: {
        500: 'rgb(var(--color-red-500) / <alpha-value>)',
      },
      green: {
        500: 'rgb(var(--color-green-500) / <alpha-value>)',
      },

      // 시맨틱 컬러 토큰
      brand: {
        primary: 'rgb(var(--color-sky-500) / <alpha-value>)',
        secondary: 'rgb(var(--color-yellow-500) / <alpha-value>)',
      },
      error: 'rgb(var(--color-red-500) / <alpha-value>)',
      info: 'rgb(var(--color-green-500) / <alpha-value>)',
      white: 'rgb(var(--color-white) / <alpha-value>)',
      black: 'rgb(var(--color-black) / <alpha-value>)',
    },
    fontFamily: {
      regular: ['Pretendard-Regular'],
      medium: ['Pretendard-Medium'],
      bold: ['Pretendard-Bold'],

      // 기본 폰트
      sans: ['Pretendard-Regular'],
    },
    fontWeight: {},
    fontSize: {
      'display-sm': ['36', { lineHeight: '1.222222222', letterSpacing: '-0.015' }], // 44/36
      'display-md': ['42', { lineHeight: '1.238095238', letterSpacing: '-0.015' }], // 52/42
      'display-lg': ['56', { lineHeight: '1.142857143', letterSpacing: '-0.015' }], // 64/56

      'headline-sm': ['24', { lineHeight: '1.333333333', letterSpacing: '-0.01' }], // 32/24
      'headline-md': ['28', { lineHeight: '1.285714286', letterSpacing: '-0.01' }], // 36/28
      'headline-lg': ['32', { lineHeight: '1.25', letterSpacing: '-0.01' }], // 40/32

      'title-sm': ['14', { lineHeight: '1.571428571', letterSpacing: '-0.01' }], // 22/14
      'title-md': ['16', { lineHeight: '1.5', letterSpacing: '-0.01' }], // 24/16
      'title-lg': ['22', { lineHeight: '1.272727273', letterSpacing: '-0.01' }], // 28/22

      'label-sm': ['12', { lineHeight: '1.5', letterSpacing: '-0.01' }], // 18/12
      'label-md': ['14', { lineHeight: '1.571428571', letterSpacing: '-0.01' }], // 22/14
      'label-lg': ['16', { lineHeight: '1.5625', letterSpacing: '-0.01' }], // 25/16

      'body-sm': ['15', { lineHeight: '1.6', letterSpacing: '-0.01' }], // 24/15
      'body-md': ['17', { lineHeight: '1.529411765', letterSpacing: '-0.01' }], // 26/17
      'body-lg': ['19', { lineHeight: '1.473684211', letterSpacing: '-0.01' }], // 28/19
    },
    borderRadius: {
      xs: '4',
      sm: '8',
      md: '12',
      lg: '16',
      xl: '28',
      full: '9999',
    },
  },
  plugins: [
    plugin(({ addBase }) =>
      addBase({
        ':root': {
          '--color-sky-50': colorTokens.sky[50],
          '--color-sky-100': colorTokens.sky[100],
          '--color-sky-200': colorTokens.sky[200],
          '--color-sky-300': colorTokens.sky[300],
          '--color-sky-400': colorTokens.sky[400],
          '--color-sky-500': colorTokens.sky[500],
          '--color-sky-600': colorTokens.sky[600],
          '--color-sky-700': colorTokens.sky[700],
          '--color-sky-800': colorTokens.sky[800],
          '--color-sky-900': colorTokens.sky[900],

          '--color-grey-50': colorTokens.grey[50],
          '--color-grey-100': colorTokens.grey[100],
          '--color-grey-200': colorTokens.grey[200],
          '--color-grey-300': colorTokens.grey[300],
          '--color-grey-400': colorTokens.grey[400],
          '--color-grey-500': colorTokens.grey[500],
          '--color-grey-600': colorTokens.grey[600],
          '--color-grey-700': colorTokens.grey[700],
          '--color-grey-800': colorTokens.grey[800],
          '--color-grey-900': colorTokens.grey[900],

          '--color-yellow-500': colorTokens.yellow[500],
          '--color-red-500': colorTokens.red[500],
          '--color-green-500': colorTokens.green[500],

          '--color-white': colorTokens.white,
          '--color-black': colorTokens.grey[900],
        },
      }),
    ),
  ],
} satisfies Config;

export default config;
