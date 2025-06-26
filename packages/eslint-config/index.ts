import { defineConfig } from 'eslint-config-hyoban'

export default defineConfig(
  {
    formatting: false,
    lessOpinionated: true,
    preferESM: false,
    react: true,
    tailwindCSS: true,
    linterOptions: {},
    settings: {},
  },
  {
    rules: {
      'unicorn/prefer-math-trunc': 'off',
      'unicorn/no-static-only-class': 'off',
      '@eslint-react/no-clone-element': 0,
      // TailwindCSS v4 not support
      'tailwindcss/no-custom-classname': 0,
      '@eslint-react/hooks-extra/no-direct-set-state-in-use-effect': 0,
      // NOTE: Disable this temporarily
      'react-compiler/react-compiler': 0,
      'no-restricted-syntax': 0,
    },
  },

  {
    files: ['**/*.tsx'],
    rules: {
      '@stylistic/jsx-self-closing-comp': 'error',
    },
  },
)

export const extendConfig: typeof defineConfig = (options, ...args) =>
  defineConfig(
    {
      formatting: false,
      lessOpinionated: true,
      preferESM: false,
      react: true,
      tailwindCSS: true,
      linterOptions: {},
      settings: {},
      ...options,
    },
    {
      rules: {
        'unicorn/prefer-math-trunc': 'off',
        'unicorn/no-static-only-class': 'off',
        '@eslint-react/no-clone-element': 0,
        // TailwindCSS v4 not support
        'tailwindcss/no-custom-classname': 0,
        '@eslint-react/hooks-extra/no-direct-set-state-in-use-effect': 0,
        // NOTE: Disable this temporarily
        'react-compiler/react-compiler': 0,
        'no-restricted-syntax': 0,
      },
    },

    {
      files: ['**/*.tsx'],
      rules: {
        '@stylistic/jsx-self-closing-comp': 'error',
      },
    },
    ...args,
  )
