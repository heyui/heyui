module.exports = {
  root: true,
  env: {
    node: true
  },
  globals: {
    $: true
  },
  extends: ['plugin:vue/vue3-essential'],
  parserOptions: {
    parser: 'babel-eslint',
    ecmaVersion: 6,
    sourceType: 'module'
  },
  rules: {
    'vue/script-setup-uses-vars': 'off'
  }
};
