module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  extends: ['plugin:prettier/recommended'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2020,
  },
  rules: {
    'prettier/prettier': [
      'error',
      {
        semi: false,
        bracketSpacing: true,
        singleQuote: true,
        arrowParens: 'always',
        printWidth: 120,
      },
    ],
  },
}
