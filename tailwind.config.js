const plugin = require('tailwindcss/plugin');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{js,jsx,ts,tsx}', './components/**/*.{js,jsx,ts,tsx}'],
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
    extend: {
      fontWeight: {
        // font-bold 적용 시 아래 fontFamily와 중복 방지를 위함
        bold: undefined,
      },
      fontFamily: {
        regular: ['Pretendard-Regular'],
        bold: ['Pretendard-Bold'],

        // 기본 폰트
        sans: ['Pretendard-Regular'],
      },

      fontSize: {
        'display-sm': [36, { lineHeight: 1.22, letterSpacing: -0.015 }],
        'display-md': [42, { lineHeight: 1.24, letterSpacing: -0.015 }],
        'display-lg': [56, { lineHeight: 1.15, letterSpacing: -0.015 }],

        'headline-sm': [24, { lineHeight: 1.33, letterSpacing: -0.01 }],
        'headline-md': [28, { lineHeight: 1.29, letterSpacing: -0.01 }],
        'headline-lg': [32, { lineHeight: 1.25, letterSpacing: -0.01 }],

        'title-sm': [14, { lineHeight: 1.57, letterSpacing: -0.01 }],
        'title-md': [16, { lineHeight: 1.5, letterSpacing: -0.01 }],
        'title-lg': [22, { lineHeight: 1.27, letterSpacing: -0.01 }],

        'label-sm': [12, { lineHeight: 1.5, letterSpacing: -0.01 }],
        'label-md': [14, { lineHeight: 1.57, letterSpacing: -0.01 }],
        'label-lg': [16, { lineHeight: 1.56, letterSpacing: -0.01 }],

        'body-sm': [15, { lineHeight: 1.6, letterSpacing: -0.01 }],
        'body-md': [17, { lineHeight: 1.53, letterSpacing: -0.01 }],
        'body-lg': [19, { lineHeight: 1.47, letterSpacing: -0.01 }],
      },

      borderRadius: {
        xs: 4,
        sm: 8,
        md: 12,
        lg: 16,
        xl: 28,
        full: 9999,
      },
    },
  },
  plugins: [
    plugin(({ addBase }) =>
      addBase({
        ':root': {
          '--color-sky-50': '241 250 255',
          '--color-sky-100': '221 244 255',
          '--color-sky-200': '183 234 255',
          '--color-sky-300': '131 225 248',
          '--color-sky-400': '59 205 241',
          '--color-sky-500': '23 190 232',
          '--color-sky-600': '4 186 228',
          '--color-sky-700': '20 176 215',
          '--color-sky-800': '0 150 188',
          '--color-sky-900': '0 129 161',

          '--color-grey-50': '248 248 248',
          '--color-grey-100': '237 239 241',
          '--color-grey-200': '226 230 233',
          '--color-grey-300': '207 217 225',
          '--color-grey-400': '166 175 183',
          '--color-grey-500': '135 141 146',
          '--color-grey-600': '92 96 99',
          '--color-grey-700': '72 74 76',
          '--color-grey-800': '50 50 50',
          '--color-grey-900': '22 22 22',

          '--color-yellow-500': '252 191 73',
          '--color-red-500': '227 43 43',
          '--color-green-500': '15 213 153',

          '--color-white': '255 255 255',
          '--color-black': 'var(--color-grey-900)',
        },
      }),
    ),
  ],
};
