import { createRequire } from 'node:module'

const require = createRequire(import.meta.url)

export const baseConfig = {
  tabWidth: 2,
  printWidth: 80,
  semi: false,
  singleQuote: true,
  trailingComma: 'all',
  arrowParens: 'always',
  endOfLine: 'lf',
  plugins: [
    require.resolve('prettier-package-json'),
    require.resolve('prettier-plugin-autocorrect'),
    require.resolve('prettier-plugin-sh'),
  ],
}
