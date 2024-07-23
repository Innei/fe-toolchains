import react from '@eslint-react/eslint-plugin'
import reactHooks from 'eslint-plugin-react-hooks'
import { Linter } from 'eslint'

import { sxzz } from '@sxzz/eslint-config'

export interface InneiESlineConfig {
  react: {
    path: Array<string | string[]>
  }
  nest: {
    path: Array<string | string[]>
  }

  path: Array<string | string[]>

  ignores: string[]
}
export function innei(
  config: Linter.FlatConfig | Linter.FlatConfig[],
  options: Partial<InneiESlineConfig> = {},
) {
  const configs = Array.isArray(config) ? config : [config]
  return sxzz(
    [
      options.react
        ? {
            files: options.react.path,
            ...react.configs.recommended,
            languageOptions: {
              parserOptions: {
                ecmaFeatures: {
                  jsx: true,
                },
              },
            },
            plugins: {
              'react-hooks': reactHooks,
            },
            rules: {
              'react-hooks/rules-of-hooks': 'error',
              'react-hooks/exhaustive-deps': 'warn',
            },
          }
        : {},
      options.nest
        ? {
            files: options.nest.path,
            languageOptions: {
              parserOptions: {
                emitDecoratorMetadata: true,
                experimentalDecorators: true,
              },
            },
            rules: {
              '@typescript-eslint/no-var-requires': 0,
            },
          }
        : {},
      {
        ignores: options.ignores,
      },
      {
        files: options.path || ['**/*.{ts,tsx,js,jsx}'],

        rules: {
          'import/order': 'off',
          'import/first': 'error',
          'import/newline-after-import': 'error',
          'import/no-duplicates': 'error',

          eqeqeq: 'off',

          'no-void': 0,
          '@typescript-eslint/consistent-type-imports': 'warn',
          '@typescript-eslint/consistent-type-assertions': 0,
          'no-restricted-syntax': 0,
          'unicorn/filename-case': 0,
          'unicorn/prefer-math-trunc': 0,

          'unused-imports/no-unused-imports': 'error',

          'unused-imports/no-unused-vars': [
            'error',
            {
              vars: 'all',
              varsIgnorePattern: '^_',
              args: 'after-used',
              argsIgnorePattern: '^_',
              ignoreRestSiblings: true,
            },
          ],

          // for node server runtime
          'require-await': 0,
          'unicorn/no-array-callback-reference': 0,

          'node/prefer-global/process': 0,
          'node/prefer-global/buffer': 'off',
          'no-duplicate-imports': 'off',
          'unicorn/explicit-length-check': 0,
          'unicorn/prefer-top-level-await': 0,
          // readable push syntax
          'unicorn/no-array-push-push': 0,
          'unicorn/custom-error-definition': 0,
        },
      },
      ...configs,
    ],
    {
      prettier: true,
      markdown: true,
      vue: false,
      unocss: false,
    },
  )
}
