module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: [
    'plugin:vue/essential',
    'prettier',
    'prettier/vue',
    'eslint:recommended'
  ],
  plugins: ['prettier'],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'vue/attributes-order': 'warn',
    'quotes': ['warn', 'single'],
    'prettier/prettier': ['error', {
      singleQuote: true
    }]
  },
  parserOptions: {
    parser: 'babel-eslint'
  }
}