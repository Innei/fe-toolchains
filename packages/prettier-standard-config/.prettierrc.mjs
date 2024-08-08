// @ts-check
import { createRequire } from 'node:module'

import { baseConfig } from './base.mjs'

const require = createRequire(import.meta.url)
/**
 *
 * @param {import('./types').PrettierConfigOptions} options
 * @returns
 */
export const factory = (options = {}) => {
  const { importSort = true, tailwindcss = false } = options

  const plugins = [...baseConfig.plugins]

  const additionalProps = {}

  if (importSort) {
    plugins.push(require.resolve('@ianvs/prettier-plugin-sort-imports'))
    additionalProps['importOrder'] = [
      'react',
      '<THIRD_PARTY_MODULES>',
      '<TYPES>',
      '<TYPES>^[.]',
      '',

      '^@(.*)/(.*)$',
      '',
      '^~/(.*)$',
      '',
      '^@/(.*)$',
      '',
      '^[./]',
      '',
      '^(?!.*[.]css$)[./].*$',
      '.css$',
    ]
  }

  if (tailwindcss) {
    plugins.push(require.resolve('prettier-plugin-tailwindcss'))
  }

  return {
    ...baseConfig,
    plugins,
    ...additionalProps,
  }
}
export default factory({
  tailwindcss: true,
  importSort: true,
})
