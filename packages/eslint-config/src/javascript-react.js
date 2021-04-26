module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  extends: [
    'prettier',
    'plugin:prettier/recommended',
    'plugin:react-hooks/recommended',
  ],
  plugins: ['react', 'prettier', 'react-hooks'],
  parserOptions: {
    ecmaFeatures: {
      ecmaVersion: 2018,
      jsx: true,
    },
    sourceType: 'module',
  },
  rules: {},
}
