module.exports = {
  root: true,
  extends: [
    '@innei/eslint-config-ts',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:tailwindcss/recommended',
  ],
  plugins: ['tailwindcss'],
  settings: {
    tailwindcss: {
      callees: ['clsx', 'clsxm'],
      removeDuplicates: true,
    },
  },
  rules: {
    'react/react-in-jsx-scope': 'off',
    'react/prop-types': 'off',
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    'react/jsx-no-target-blank': 'warn',
    'react/display-name': 'warn',

    // For Component Name
    'prefer-arrow-callback': 'off',

    'import/no-default-export': 'off',

    'react/self-closing-comp': 'warn',
    'tailwindcss/no-unnecessary-arbitrary-value': 'error',
    'tailwindcss/no-custom-classname': 0,
    'react/jsx-curly-brace-presence': [
      'error',
      { props: 'never', children: 'never' },
    ],
  },
}
