module.exports = {
  root: true,
  extends: [
    "eslint:recommended",
    "react-app",
    'plugin:@typescript-eslint/eslint-recommended',
  ].concat([
    "./rules/common.yml",
    "./rules/react.yml"
  ].map(require.resolve)).concat([
    'plugin:prettier/recommended'
  ]),
  env: {
    browser: true,
    node: true,
    es6: true,
  },
  plugins: ['@typescript-eslint', 'prettier', 'import'],
  parser: '@typescript-eslint/parser',
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
  },
};
