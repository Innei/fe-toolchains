module.exports = {
  parser: 'vue-eslint-parser',
  parserOptions: {
    parser: '@typescript-eslint/parser',
    ecmaVersion: 2020,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  root: true,
  extends: [
    'plugin:vue/vue3-recommended',

    '@innei/eslint-config-ts',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
  ],
  overrides: [
    {
      files: [
        '*.config.[tj]s',
        'pages/**/*.[tj]sx',
        'src/pages/**/*.[tj]sx',
        'src/views/**/*.[tj]sx',
        'src/layouts/**/*.[tj]sx',
      ],
      rules: {
        'import/no-default-export': 'off',
      },
    },
  ],

  rules: {
    'react/react-in-jsx-scope': 'off',
    'react/prop-types': 'off',
    'react/jsx-no-target-blank': 'off',
    'react/display-name': 'off',
    'import/no-default-export': 'off',
    'react/self-closing-comp': ['warn'],

    'vue/html-self-closing': 'off',
    '@typescript-eslint/ban-types': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-unused-vars':
      process.env.NODE_ENV === 'development' ? 'warning' : 'off',
    'vue/one-component-per-file': 'off',
    '@typescript-eslint/ban-ts-comment': 'off',
    'vue/require-default-prop': 'off',
    'vue/no-mutating-props': 'off',
    '@typescript-eslint/no-namespace': 'off',
    '@typescript-eslint/no-non-null-assertion': 0,
  },
}
