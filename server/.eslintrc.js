module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es2021: true
  },
  extends: [
    'plugin:vue/essential',
    'standard'
  ],
  parserOptions: {
    ecmaVersion: 13,
    parser: '@typescript-eslint/parser'
  },
  plugins: [
    'vue',
    '@typescript-eslint'
  ],
  rules: {
    indent: 'off',
    'no-tabs': 0
  }
}
