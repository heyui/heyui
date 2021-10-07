module.exports = {
  root: true,
  env: {
    node: true
  },
  globals: {
    $: true
  },
  extends: ['plugin:vue/vue3-recommended'],
  parserOptions: {
    parser: 'babel-eslint',
    ecmaVersion: 6,
    sourceType: 'module'
  },
  rules: {}
};
