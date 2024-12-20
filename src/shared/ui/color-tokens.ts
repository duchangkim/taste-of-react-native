export const colorTokens = {
  sky: {
    50: '241 250 255',
    100: '221 244 255',
    200: '183 234 255',
    300: '131 225 248',
    400: '59 205 241',
    500: '23 190 232',
    600: '4 186 228',
    700: '20 176 215',
    800: '0 150 188',
    900: '0 129 161',
  },

  grey: {
    50: '248 248 248',
    100: '237 239 241',
    200: '226 230 233',
    300: '207 217 225',
    400: '166 175 183',
    500: '135 141 146',
    600: '92 96 99',
    700: '72 74 76',
    800: '50 50 50',
    900: '22 22 22',
  },

  yellow: {
    500: '252 191 73',
  },
  red: {
    500: '227 43 43',
  },
  green: {
    500: '15 213 153',
  },
  white: '255 255 255',
  black: '22 22 22',
} as const;

export const semanticColorTokens = {
  brand: {
    primary: colorTokens.sky[500],
    secondary: colorTokens.yellow[500],
  },
  error: colorTokens.red[500],
  info: colorTokens.green[500],
} as const;

type PrimitiveColorToken =
  | `sky-${keyof typeof colorTokens.sky}`
  | `grey-${keyof typeof colorTokens.grey}`
  | `yellow-${keyof typeof colorTokens.yellow}`
  | `red-${keyof typeof colorTokens.red}`
  | `green-${keyof typeof colorTokens.green}`
  | 'white'
  | 'black';

type SemanticColorToken = `brand-${keyof typeof semanticColorTokens.brand}` | 'error' | 'info';

export type ColorToken = PrimitiveColorToken | SemanticColorToken;

export function getColorFromToken(token: ColorToken): string {
  // 'sky-500' -> ['sky', '500']
  const [namespace, shade] = token.split('-') as [string, string];

  // semantic colors
  if (namespace === 'brand') {
    const brandColor = semanticColorTokens.brand[shade as keyof typeof semanticColorTokens.brand];
    return `rgb(${brandColor})`;
  }
  if (token === 'error') return `rgb(${semanticColorTokens.error})`;
  if (token === 'info') return `rgb(${semanticColorTokens.info})`;

  // base colors
  if (token === 'white') return `rgb(${colorTokens.white})`;
  if (token === 'black') return `rgb(${colorTokens.black})`;

  // color scales
  const colorScale = colorTokens[namespace as keyof typeof colorTokens];
  if (colorScale && shade) {
    return `rgb(${colorScale[shade as unknown as keyof typeof colorScale]})`;
  }

  return 'rgb(0, 0, 0)'; // 기본값
}
