// https://docs.expo.dev/guides/using-eslint/
module.exports = {
  extends: ['expo', 'prettier'],
  ignorePatterns: ['/dist/*', '/android/*', '/ios/*'],
  plugins: ['prettier', 'import', 'react', 'react-hooks'],
  rules: {
    'prettier/prettier': 'error',
    'import/order': [
      'error',
      {
        groups: [
          'builtin', // node "builtin" 모듈
          'external', // npm 패키지
          'internal', // 프로젝트 내부 import
          ['parent', 'sibling'], // 상대 경로 import
          'index', // ./index.js 파일
          'type', // 타입 import
        ],
        'newlines-between': 'always',
        alphabetize: {
          order: 'asc',
          caseInsensitive: true,
        },
      },
    ],
    'react/jsx-sort-props': [
      'error',
      {
        callbacksLast: true, // 콜백 함수를 마지막으로
        shorthandFirst: true, // 축약형 props를 먼저
        multiline: 'last', // 여러 줄인 경우 마지막으로
        ignoreCase: true, // 대소문자 구분 안 함
        reservedFirst: true, // 예약된 props를 먼저 (key, ref 등)
      },
    ],
    'react-hooks/exhaustive-deps': 'warn',
    '@typescript-eslint/no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],
  },
  overrides: [
    {
      files: ['*.ts', '*.tsx', '*.d.ts'],
      parserOptions: {
        project: './tsconfig.json',
      },
    },
  ],
};
