module.exports = {
  root: true,
  env: {
    node: true
  },
  globals: {
    $: true,
    log: true,
    G: true,
    Utils: true
  },
  extends: ['plugin:vue/vue3-essential', 'eslint:recommended'],
  parserOptions: {
    parser: 'babel-eslint',
    ecmaVersion: 6,
    sourceType: 'module'
  },
  rules: {}
};
